import TodoService from "./TodoService.js";

class TodoController {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body);
      res.json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const todo = await TodoService.getOne(req.params.id);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const updatedTodo = await TodoService.update(req.body);
      return res.json(updatedTodo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const todo = await TodoService.delete(req.params.id);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new TodoController();
