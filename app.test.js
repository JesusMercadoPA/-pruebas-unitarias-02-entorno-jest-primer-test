const request = require('supertest');
const app = require('./app');

describe('Pruebas unitarias para la API de Tareas', () => {
  test('GET /tareas debe retornar un estatus 200 y una lista de tareas', async () => {
    const response = await request(app).get('/tareas');

    // Comprobamos el código de estado HTTP
    expect(response.statusCode).toBe(200);

    // Comprobamos que el cuerpo sea un arreglo/lista
    expect(Array.isArray(response.body)).toBe(true);
  });
});