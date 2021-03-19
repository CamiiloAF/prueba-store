import { createStore } from "vuex";

export default createStore({
  state: {
    nombre: 'Mi nombre'
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getNombre(state) {
      return state.nombre;
    }
  }
});
