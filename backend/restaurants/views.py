from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
import copy
import collections
import functools
import io
import os
import requests
import zipfile
from typing import List, Optional, Tuple

## for machine learning
#from sklearn import metrics, preprocessing
## for deep learning 
import tensorflow as tf
from tensorflow.keras import models, layers, utils  #(2.6.0)
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd

from rest_framework.decorators import api_view
from backend.constants import get_user_town
from backend.constants import get_restaurant_df, get_context, get_features, get_context_ambiance, get_features_ambiance, get_context_taste, get_features_taste, get_all_cuisines, get_user_id

from restaurants.models import Restaurant
from customer.views import retrieve_preferences

# Create your views here.
@api_view(['GET'])
def retrieve_near_restaurants(request):
    town = get_user_town()
    filtered_restaurants = Restaurant.filter_restaurants('town','e', town, 'id')

    nearby_restaurants = [] 
    # Display matching restaurant information 
    for restaurant in filtered_restaurants:
        #print("ID:", restaurant.id,"  Name:", restaurant.name, "  Cuisine:", restaurant.cuisine, "  Town:", restaurant.town, "rate: ",restaurant.overall_rating)
        restaurant_dict = {"name" : restaurant.name, "cuisine": restaurant.cuisine, "ambiance": restaurant.ambiance, "overall_rating": restaurant.overall_rating}
        nearby_restaurants.append(restaurant_dict)
    
    context_df = retrieve_preferences(request)
    taste_model = load_model('recommendation/last_good_taste_for_real')
    general_model = load_model('recommendation/last_good_over_for_real')
    ambiance_model = load_model('recommendation/last_good_ambiance_for_real_40')
    region,budget_amount,cust_id,topk=1,3,45,10 
    taste_results_of_all_results,top_k_cuisine_preffered,all_results,all_res,all_res_taste,ambiance_results_of_all_results,all_res_ambiance = all_at_once(region,budget_amount,cust_id,get_restaurant_df(),topk,general_model,get_context(),get_features(),get_context_taste(),taste_model,get_features_taste(),context_df.iloc[0],ambiance_model,get_features_ambiance(),get_context_ambiance())
    
    #all_results,all_res,all_res_taste,all_res_ambiance = all_at_once_solo(region,budget_amount,cust_id,get_restaurant_df(),topk,general_model,get_context(),get_features(),get_context_taste(),taste_model,get_features_taste(),context_df.iloc[0],ambiance_model,get_features_ambiance(),get_context_ambiance(), 3)

    return JsonResponse(nearby_restaurants, safe=False)

def desing_test_based(region,budget_amount,cust_id,products_df,raw_context):
  # create a new dataframe with just that row
  products_df2= copy.deepcopy(products_df)
  row = raw_context
  row["customer_id"]=cust_id
  new_df = pd.DataFrame([row]).pivot_table(index="customer_id")
  duplicated_rows = pd.concat([new_df]*500)
  duplicated_rows.reset_index(inplace=True)
  duplicated_rows['restaurant_id'] = duplicated_rows.index 
  duplicated_rows=duplicated_rows.set_index(["customer_id","restaurant_id"])
  test=  duplicated_rows.add_suffix('_context').join(products_df2, on=['restaurant_id'])
  test = test.drop("restaurant_id", axis=1)
  test=test.reset_index()
  test=test[test["budget"]<=budget_amount]
  test=test[test["restaurant_id"]%region==0 ]
  return test 

def desing_test_based_solo(region,budget_amount,cust_id,products_df,raw_context, restaurant_id):
  # create a new dataframe with just that row
  products_df2= copy.deepcopy(products_df.reset_index().iloc[restaurant_id])
  row = raw_context
  row["customer_id"]=cust_id
  new_df = pd.DataFrame([row]).pivot_table(index="customer_id")
  duplicated_rows = pd.concat([new_df])
  duplicated_rows.reset_index(inplace=True)
  duplicated_rows['restaurant_id'] = duplicated_rows.index 
  duplicated_rows=duplicated_rows.set_index(["customer_id","restaurant_id"])
  test=  duplicated_rows.add_suffix('_context').join(products_df2, on=['restaurant_id'])
  test = test.drop("restaurant_id", axis=1)
  test=test.reset_index()
  test=test[test["budget"]<=budget_amount]
  test=test[test["restaurant_id"]%region==0 ]
  return test 

def give_me_ratings_of_overall(list_of_df_top_5, context_taste, taste_model,features_taste):
  to_append=[]
  for i in range(len(list_of_df_top_5)):
      if (len(list_of_df_top_5[i])!=0):
        prod_to_predict =copy.deepcopy(list_of_df_top_5[i])
        prod_to_predict["yhat"] = taste_model.predict([prod_to_predict["customer_id"], prod_to_predict["restaurant_id"], prod_to_predict[features_taste], prod_to_predict[context_taste]])
        prod_to_predict = prod_to_predict.sort_values('yhat')
        to_append.append(prod_to_predict)
  return to_append


def give_me_top_k_overall_of_customer_preffered(cus,res,top_k):
  tags = []
  new_df = copy.deepcopy(pd.DataFrame([cus]).pivot_table(index="customer_id"))
  for col in new_df.columns:
    if new_df.iloc[0][col] ==1:
      if  col in get_all_cuisines():
        tags.append(col)
  rrrr=[]
  for i,el in enumerate(tags) :
    if i == 0:
      rrrr.append([res["cuisine"]==el])
    else:
      rrrr.append( [res["cuisine"]==el])
   
  __aa=[]
  for i in range(len(tags)):
    __aa.append(res[rrrr[i][0]][ len(res[rrrr[i][0]])-top_k:len(res[rrrr[i][0]])  ])
  top_k_cuisine_preffered=__aa
  customer_cuisine_prefference = tags
   
  return customer_cuisine_prefference,top_k_cuisine_preffered


def give_me_top_k_general_results(res,top_k):
  __aa=[]
  __aa.append(res[   len(res)-top_k  : len(res)]  )
  top_k_cuisine_preffered_=__aa
  return top_k_cuisine_preffered_

def all_at_once(region,budget_amount,cust_id,products_df,topk,general_model,context,features,context_taste,taste_model,features_taste,raw_context,ambiance_model,ambiance_features,ambiance_context):
  test = desing_test_based(region,budget_amount,cust_id,products_df,raw_context)
  test["yhat"] = general_model.predict([test["customer_id"], test["restaurant_id"], test[features], test[context]])
  all_results = test.sort_values('yhat')
  #all_res burada overall ratingden gelen top k yhat=> overall ratingleri
  all_res =give_me_top_k_general_results(all_results,topk)
  #all_res_taste burada overall ratingden gelen top k ların taste matchi  yhat=> taste ratingleri
  all_res_taste  =give_me_ratings_of_overall(all_res, context_taste, taste_model,features_taste)

  #all_res_ambiance burada overall ratingden gelen top k ların ambiance matchi  yhat=> ambiance ratingleri
  all_res_ambiance   =give_me_ratings_of_overall(all_res, ambiance_context, ambiance_model,ambiance_features)
  
  #top_k_cuisine_preffered  =>>> adamin tercih ettigi cuisinelerin overall matchingi  yhat=> overall ratingleri
  customer_cuisine_prefference,top_k_cuisine_preffered = give_me_top_k_overall_of_customer_preffered(raw_context,all_results,topk)
  
  #taste_results_of_all_results ===>>>adamin tercih ettigi cuisinelerin taste matchingi  yhat=> taste ratingleri
  taste_results_of_all_results=give_me_ratings_of_overall(top_k_cuisine_preffered, context_taste, taste_model,features_taste)

  #ambiance_results_of_all_results ===>>>adamin tercih ettigi cuisinelerin ambiance matchingi  yhat=> ambiance ratingleri
  ambiance_results_of_all_results=give_me_ratings_of_overall(top_k_cuisine_preffered, ambiance_context, ambiance_model,ambiance_features)

  print("TOP K ALL RESULTS \n", all_res[0])

  print("TOP K ALL RESULTS TASTE \n", all_res_taste[0])

  print("TOP K CUISINE PREFERRED \n", top_k_cuisine_preffered[0])
  print("TOP K CUISINE PREFERRED \n", top_k_cuisine_preffered[1])

  print("TOP K TASTE PREFERRED \n", taste_results_of_all_results[0])
  print("TOP K TASTE PREFERRED \n", taste_results_of_all_results[1])
  return taste_results_of_all_results,top_k_cuisine_preffered,all_results,all_res,all_res_taste,ambiance_results_of_all_results,all_res_ambiance


def all_at_once_2(region,budget_amount,cust_id,products_df,topk,general_model,context,features,context_taste,taste_model,features_taste,raw_context,ambiance_model,ambiance_features,ambiance_context):
  test = desing_test_based(region,budget_amount,cust_id,products_df,raw_context)
  test["yhat"] = general_model.predict([test["customer_id"], test["restaurant_id"], test[features], test[context]])
  all_results = test.sort_values('yhat')
  #all_res burada overall ratingden gelen top k yhat=> overall ratingleri
  all_res =give_me_top_k_general_results(all_results,topk)
  #all_res_taste burada overall ratingden gelen top k ların taste matchi  yhat=> taste ratingleri
  all_res_taste  =give_me_ratings_of_overall(all_res, context_taste, taste_model,features_taste)
  #all_res_ambiance burada overall ratingden gelen top k ların ambiance matchi  yhat=> ambiance ratingleri
  #all_res_ambiance = []
  all_res_ambiance   =give_me_ratings_of_overall(all_res, ambiance_context, ambiance_model,ambiance_features)
  
  #top_k_cuisine_preffered  =>>> adamin tercih ettigi cuisinelerin overall matchingi  yhat=> overall ratingleri
  #customer_cuisine_prefference= []
  #top_k_cuisine_preffered = []
  customer_cuisine_prefference,top_k_cuisine_preffered = give_me_top_k_overall_of_customer_preffered(raw_context,all_results,topk)
  #taste_results_of_all_results ===>>>adamin tercih ettigi cuisinelerin taste matchingi  yhat=> taste ratingleri
  taste_results_of_all_results=give_me_ratings_of_overall(top_k_cuisine_preffered, context_taste, taste_model,features_taste)

  #ambiance_results_of_all_results ===>>>adamin tercih ettigi cuisinelerin ambiance matchingi  yhat=> ambiance ratingleri
  #ambiance_results_of_all_results = []
  ambiance_results_of_all_results=give_me_ratings_of_overall(top_k_cuisine_preffered, ambiance_context, ambiance_model,ambiance_features)
  return taste_results_of_all_results,top_k_cuisine_preffered,all_results,all_res,all_res_taste,ambiance_results_of_all_results,all_res_ambiance

def all_at_once_solo(region,budget_amount,cust_id,products_df,topk,general_model,context,features,context_taste,taste_model,features_taste,raw_context,ambiance_model,ambiance_features,ambiance_context, restaurant_id):
  test = desing_test_based_solo(region,budget_amount,cust_id,products_df,raw_context, restaurant_id)
  test["yhat"] = general_model.predict([test["customer_id"], test["restaurant_id"], test[features], test[context]])
  all_results = test.sort_values('yhat')
  #all_res burada overall ratingden gelen top k yhat=> overall ratingleri
  all_res =give_me_top_k_general_results(all_results,topk)
  #all_res_taste burada overall ratingden gelen top k ların taste matchi  yhat=> taste ratingleri
  all_res_taste  =give_me_ratings_of_overall(all_res, context_taste, taste_model,features_taste)
  #all_res_ambiance burada overall ratingden gelen top k ların ambiance matchi  yhat=> ambiance ratingleri
  #all_res_ambiance = []
  all_res_ambiance   =give_me_ratings_of_overall(all_res, ambiance_context, ambiance_model,ambiance_features)

  print("ALL AT ONCE SOLO OVERALL RESULT: \n", all_res[0])
  print("ALL AT ONCE SOLO TASTE: \n", all_res_taste[0])
  print("ALL AT ONCE SOLO AMBIANCE: \n", all_res_ambiance[0])
  
  return all_results,all_res,all_res_taste,all_res_ambiance

