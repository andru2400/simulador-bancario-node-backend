1.# Proyecto Backend Node js y express

    Este es un proyecto de backend construido con Node.js y Express.

## Pasos realizados :

1. Instalar Node y npm en su version mas reciente

2. ejecutar: npm init                                           (Seguir pasos ... next next next)

3. ejecutar: npm install express                                (Crea carpeta "node modules" y tiene la libreria express)

4. crear la carpeta .vscode con el archivo settings.json        (Configuramos para que visual nos ayude a controlar la identacion)

5. crear la carpeta src                                         (donde va contener los diferentes archivos, de nuestra aplicacion)
    crear dentro de src -> el arhivo server.js
        en server.js vamos a usar express y es la entrada de nuestro sistema.

6. para probar que este bien configurado server.js
    debemos correr el npm run dev, pero antes debemos registrarlo en el package.json dentro de la seccion de script.

7. Vamos primero con La conexion de MYSQL

    7.1 ejecutar: npm install mysql2

        crear despues en src: 

        7.1.1 Carpeta config, con el archivo para configurar la conexion de la bd con mysql ...
        7.1.2 Carpeta repository, y el archivo por ejemplo simuladorRepository
        7.1.2 Carpeta controller,







## Definiciones Investigando con gpt: 

    req 
        (abreviatura de "request") representa el objeto de la solicitud entrante. Contiene detalles sobre la solicitud HTTP, como los parámetros de la URL, los encabezados, y el cuerpo de la solicitud.
    res 
        (abreviatura de "response") representa el objeto de la respuesta. Se usa para enviar una respuesta de vuelta al cliente.
    repositorio 
        (Clase o módulo responsable de interactuar con la capa de persistencia de datos, como una base de datos.)





