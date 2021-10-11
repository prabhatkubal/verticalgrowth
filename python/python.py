
import mysql.connector

product = mysql.connector.connect(host="localhost", user="root", passwd="",database="product")

cursor = product.cursor()

cursor.execute("select 1lks50k from cancer where ageband='60-69yrs'")

for i in (cursor.fetchall()):
    print(i)