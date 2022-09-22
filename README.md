# ProyectoSalas 👋
¡Hola! Gracias por visitar la app de gestión de salas. 
# Desarrollado con ✨
Angular CLI: 14.2.1

Node 16.17.0

Package Manager: npm 8.15.0


# Pasos para arrancar el proyecto ⚙️
Haz checkout a la rama `master` 
Haz  `npm install `
Finalmente ejecuta `ng serve` y navega a `http://localhost:4200/`.

# Arquitectura 🧱

El código consta de varios componentes.
Dentro de `SRC` folder encontramos los componentes y elementos, `Header`, `planta`, `sala`, `input` y `button`.

Todas las variables de estilos comunes a la aplicaión se han declarado en un selector :root en el main styles.scss


# Explicación de las decisiones que hayas tomado 🧠

Decidí utilizar componentes lo más pequeños posible para poder reutlizar el código, lo que hizo que la comunicanción entre ellos al estar contenidos unos dentro de otros fuese más compleja.

Los estilos communes a toda la app los he metido en variables que se encuentran en el  styles.scss principal de esta manera sería fácil cambiarlos si se decidiese en un nuevo color o fuente.

# Dificultades encontradas 😵‍💫

La complejidad de este proyecto para mi radicaba tener que hacer cambio de framwork y por lo tanto estudiar y descubrir comportamiento propios de angular, por lo tanto he tenido que hacer una parte importante de busqueda y aprendizaje.

La comunicacíon de datos entre componentes fue quizás mi mayor challenge.

## Por implementar 🚧

Borrado de salas // Update: implementado ✅

Filtrar las salas por capacidad y ocupación // filtrado por capacidad implementado ✅ por ocupación [WIP]. 

Simular la conexión con backend con una API mockeada.

Testing  / Me hubuese gustado también tener tiempo a implementar la parte de testing también.
