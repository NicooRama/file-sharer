- Considerando que es un proyecto nuevo, se uso la ultima version de next.js, con todas las features que la misma incluye.

# Servicios
- Hay algunas funciones que son asincronicas sin que tengan que hacerlo, esto se hizo asi ya que en un proyecto real la persistencia
de datos sera en una base de datos, y no en memoria, lo cual requiere operaciones asincronicas. 

# Users
- Por temas de practicidad y entendiendo que esto es un ejercicio, las contraseñas no estan encriptadas. 
- En un proyecto real es indispensable que lo esten.
- Hay una rama del arbol de directorios que quedo rara ```app/(users)/users/api```. Esto quedo asi por que no 
queremos que el usuario vea "users" en la url, pero si queremos acceder a la api de usuarios usando ```/users```

# UI/UX
- Dado que la empresa se centra en latinoamerica, donde su mercado mas fuerte es Uruguay, los mensajes de usuario
estan en español rioplatense.


# Performance
- El filtro de usuarios se hace del lado del client, esto puede no ser optimo en un proyecto real por la cantidad de usuarios que puede haber, teniendo que hacer el filtrado del lado del servidor, pero por temas de tiempo se opto por hacerlo en el cliente.
