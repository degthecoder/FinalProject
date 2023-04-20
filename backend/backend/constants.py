def turkish_to_ascii(word):
    # Turkish characters and their ASCII equivalents
    chars = {'ı': 'i', 'İ': 'I', 'ş': 's', 'Ş': 'S', 'ğ': 'g', 'Ğ': 'G', 'ü': 'u', 'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'ç': 'c', 'Ç': 'C'}
    
    # Replace each Turkish character in the word with its ASCII equivalent
    for turkish_char, ascii_char in chars.items():
        word = word.replace(turkish_char, ascii_char)
    
    return word

user_town = ""
def set_user_town(t):
  global user_town
  user_town = turkish_to_ascii(t)

def get_user_town():
  global user_town
  return user_town


user_id = 0
def set_user_id(n):
  global user_id
  user_id = n
  return user_id

def get_user_id():
  global user_id
  return user_id








