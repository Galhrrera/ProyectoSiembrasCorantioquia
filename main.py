import eel
import sys
import  sqlite3


#Conexión a la base de datos
connection=sqlite3.connect("./db/siembrasDB.sqlite")
sys.path.append("./")
eel.init("www")
eel.start("index.html")

cur = connection.cursor()

for row in cur.execute('select * from arboles;'):
    print(row)





connection.close()
