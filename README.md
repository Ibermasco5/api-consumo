# Electricity Consumption API

Esta es una API RESTful construida con Node.js y Express que calcula el consumo teórico de electricidad basado en el consumo de electrodomésticos.

## Estructura del Proyecto

electricity-consumption-api
├── src
│ ├── app.js
│ ├── controllers
│ │ └── electrodomesticosController.js
│ ├── models
│ │ └── electrodomestico.js
│ ├── routes
│ │ └── electrodomesticosRoutes.js
│ └── db
│ └── mysql.js
├── package.json
├── .env
└── README.md

## Instalación

1. Clonar el repositorio:

git clone https://github.com/ibermasco5/electricity-consumption-api.git

2. Navegar al directorio del proyecto:

cd electricity-consumption-api

3. Instalar las dependencias:
npm install

4. Configurar las variables de entorno:

Crear un archivo `.env` en el directorio raíz y agregar las siguientes variables:

DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

Reemplaza `your-database-host`, `your-database-username`, `your-database-password` y `your-database-name` con los detalles de tu base de datos.

5. Iniciar el servidor:

npm start

La API estará disponible en `http://localhost:3000`.

## Endpoints de la API

### Agregar Nuevo Electrodoméstico

- **URL:** `/electrodomesticos`
- **Método:** POST
- **Cuerpo de la Solicitud:**

```json
{
  "nombre": "Lavadora",
  "carga": 200,
  "uso_diario": 1,
  "dias_uso": 30
}

```

- **Respuesta de Ejemplo:**

```json
{
  "id": 1
}

```
Listar Todos los Electrodomésticos
URL: /electrodomesticos
Método: GET

- **Respuesta de Ejemplo:**
[
  {
    "id": 1,
    "nombre": "Lavadora",
    "carga": 200,
    "uso_diario": 1,
    "dias_uso": 30
  }
]


## Dependencies

- express: ^4.17.1
- mysql2: ^2.3.0

## Development Dependencies

- nodemon: ^2.0.12

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.