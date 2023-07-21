import { Model, createServer } from 'miragejs';

const setupServer = () => {
  createServer({
    models: {
      todos: Model,
    },
    routes() {
      this.get('/api/todos', (schema) => {
        return schema.todos.all();
      });

      this.post('/api/todos', (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.todos.create(payload);
      });

      this.post('/api/update', (schema, request) => {
        const id = JSON.parse(request.requestBody);
        const current = schema.todos.find(id);
        current.update({ isDone: !current.isDone });
      });
    },
  });
};

export { setupServer };
