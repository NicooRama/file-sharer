# README

> *DISCLAMER*
> 
> Por temas de tiempo, el presente readme estara escrito en español

## Como levantar el proyecto

Asegurarse de tener un **.env** en la raiz del proyecto con las siguientes variables de entorno:

```
NEXTAUTH_SECRET=asdjaiuwnas
NEXTAUTH_URL=http://localhost:3000
BASE_URL=http://localhost:3000
```

Instalar dependencias

```npm install```

Compilar el proyecto

```npm run build```

Levantar el proyecto

```npm run start```

Abrir el navegador e ingresar a la siguiente url
[http://localhost:3000](http://localhost:3000)

Para una mayor comodidad, se crearon algunos usuario que se pueden utilizar pasa subir o compartir archivos,
los mismos se encuentran detallados en ```src/app/(users)/users/api/db.ts```.
Un usuario de ejemplo es el siguiente:
```
username:
leomessi@gmail.com
password:
loscafre2022
```

## Decisiones de implementacion

### Version de next
Considerando que es un proyecto nuevo, se uso la ultima version de next.js, con todas las features que la misma incluye, como por ejemplo:
* Server components
* Server actions
* Router handler
* etc.

### Manejo de archivos
Para el manejo de archivos se utilizan dos entindades, el user file y el user file descriptor.
El objetivo de tener un file descripto separado del file en si, es para poder almacenar y transmitir la metadata del archivo de forma mas sencilla
como asi tambien los permisos al mismo.

### Convenciones
Se siguieron las convenciones que sugiere next en su documentacion (por ejemplo la estructura de carpetas)

### Validaciones
Se implementaron las validaciones mas importantes, aun asi hay algunas que no se incluyeron, como pueden ser:
* Longitud de cadenas de texto
* Tamaño de los archivos
* etc.

### Servicios
- Hay algunas funciones que son asincronicas sin que tengan que hacerlo, esto se hizo asi ya que en un proyecto real la persistencia
de datos sera en una base de datos, y no en memoria, lo cual requiere operaciones asincronicas. 

### Users
- Por temas de practicidad y entendiendo que esto es un ejercicio, las contraseñas no estan encriptadas, sin embargo en un proyecto real es **indispensable** que lo esten.

### UI/UX
- Dado que la empresa se centra en latinoamerica, donde su mercado mas fuerte es Uruguay, los mensajes de usuario
estan en español rioplatense.


### Performance
- El filtro de usuarios se hace del lado del client, esto puede no ser optimo en un proyecto real por la cantidad de usuarios que puede haber, teniendo que hacer el filtrado del lado del servidor, pero por temas de tiempo se opto por hacerlo en el cliente.

### Consideraciones adicionales
Se subio el archivo **.env** ya que pertenece a un entorno local, pero los archivos .env pertenencientes a ambientes son ignorados en el .gitignore, por lo que el proyecto no expone informacion sensible.
