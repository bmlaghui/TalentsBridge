const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'TalentsBridge API',
        version: '1.0.0',
        description: 'API for TalentsBridge app',
      },
      components: {
        securitySchemes: {
          apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
          },
        },
      },
      security: [
        {
          apiKeyAuth: [],
        },
      ],
    },
    apis: ['./api-routes.js'], // Path to the API routes folder
  };
  const specs = swaggerJsdoc(options);
  module.exports = { specs, swaggerUi };


  