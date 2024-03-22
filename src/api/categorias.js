import axios from "axios";
export default class CategoriasApi {
  constructor() {
    this.baseUrl = "http://127.0.0.1:8000";
  }

  async buscarTodasAsCategorias() {
    const { data } = await axios.get(`${this.baseUrl}/categorias/`);
    return data.results;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post(
      `${this.baseUrl}/categorias/`,
      this.baseUrlcategoria
    );
    return data.results;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(
      `${this.baseUrl}/categorias/${categoria.id}/`,
      categoria
    );
    return data.results;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`${this.baseUrl}/categorias/${id}/`);
    return data.results;
  }
}
