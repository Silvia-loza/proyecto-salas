# ProyectoSalas 👋

¡Hola! Gracias por visitar mi versión de la app de gestión de salas.

# Desarrollado con ✨

Angular CLI: 14.2.1

Node 16.17.0

Package Manager: npm 8.15.0

# Pasos para arrancar el proyecto ⚙️

Haz un git clone del proyecto a tu local

Entra en la carpeta principal e intala las dependencias con `npm install `

Finalmente ejecuta `ng serve` y navega a `http://localhost:4200/`.

# Arquitectura y features 🧱

La aplicación consta de varios componentes distintos que están en comunicación, un elemento fijo que es un `Header` y elementos reusados que son: `planta`, `sala`, `input` , `button` y `spinner`

Los datos son guardados en variables locales y además se mockea el CRUD a una api utilizando API mocka.

La aplicación pretende cumplir los requisitos a la vez que se comunica con el usuario para que este tenga claro lo que va sucediendo y por lo tanto tenga una buena experiencia al usarla.

Listado de salas de cada planta seleccionada (3 plantas a elegir) ✅

Añadir Nuevas salas.✅

Editar información de una sala ✅

Eliminar salas de una planta ✅

Filtrar salas por capacidad y ocupación ✅

Simular la conexión al BE con una API mockeada ✅

spinner de para mientras se cargan los datos✅

# Decisiones 🧠

Para esta II parte he decidido además de refactoriar el código y añadir las funcionalidades que faltaban,añadir Eslint y Prettier para conseguir un código de más calidad y con un formato más uniforme y fácil de leer. Además he decido añadir un spinner ya que al hacer la conexión con la API los tiempos de espera se hacian un poco largos sin ningún tipo de comunicación con el usuario.

# Dificultades encontradas 😵‍💫

En esta segunda vuelta en lo que más complejidad he encontrado ha sido
la parte de simular la conexión con el BE ya que nunca había tenído que
mockear una API y he tenido que investigar un poco como hacerlo y como
crear las conexiones desde 0 en la aplicación.

He aprendido un montón haciendo esta parte de la tarea y me ha parecido
muy interesante, gracias por la oportunidad!

## Por implementar 🚧

Error handling [WIP]

Unit testing [WIP]

e2e testing [WIP]

Un Refactor general [WIP]
