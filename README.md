# Prueba técnica IT FullStack Development Analyst

## Parte 1: Fondos

Para el desarrollo de esta aplicación se propone una solución bajo el stack Mern, ya que permite desarrollar todo el proyecto en un mismo lenguaje de programación, como JavaScript en este caso. Las siguientes son las tecnologias y herramientas utilizada en este desarrollo:

- **MongoDB:** El sistema de base de datos NoSQL para almacenar y extraer la información no estructurada
- **Express:** Para la creación de API REST para hacer CRUD con la base de datos e integrar el Front
- **React:** Un Framework de JavaScript para separar por componentes el Front de la aplicación
- **Node.JS:** Para poder utilizar JavaScript en el Back
- **Docker** Para crear contenedores de cada Stack e integrar los diferentes servidores que utiliza la aplicación

Para ejecutar la aplicación en el directorio:

```bash
docker-compose up --build
```

Los puertos locales en los que se ejcuta cada stack son los siguientes:
- *Client:* 3000
- *Server:* 8080
- *MongoDB:* 27018


