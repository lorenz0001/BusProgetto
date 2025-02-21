import pandas as pd

# Carica i dati dal file Excel
df = pd.read_excel('2.ods')

# Crea una lista per gli oggetti in formato JavaScript
objects = []

# Itera attraverso ogni riga del DataFrame
for index, row in df.iterrows():
    città = row[0]  # La città è la prima colonna
    # Ignoriamo la colonna 'Unnamed' (per evitare le colonne extra)
    orari = row[1:].dropna().values  # Otteniamo tutti gli orari, rimuovendo i NaN
    
    for orario in orari:
        # Crea un oggetto per ogni orario
        obj = {
            "partenza": f'"{città}"',  # Usa gli apici doppi per evitare conflitti
            "destinazione": '"bar villa"',  # Usa gli apici doppi
            "orario_arrivo": orario,
            "orario_destinazione": orario,
            "festivo": True
        }
        # Aggiungi l'oggetto alla lista
        objects.append(obj)

# Converti l'array di oggetti in una stringa JavaScript
js_array = "const orari = [" + ",\n".join([f'{{"partenza": {o["partenza"]}, "destinazione": {o["destinazione"]}, "orario_arrivo": {o["orario_arrivo"]}, "orario_destinazione": {o["orario_destinazione"]}, "festivo": {o["festivo"]}}}' for o in objects]) + "];"

# Stampa l'array JavaScript
print(js_array)

# Salva l'array in un file JS se desideri
with open('orari.js', 'w') as file:
    file.write(js_array)
