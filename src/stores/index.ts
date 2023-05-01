import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import type { Form } from "./states/Forms";

export interface StoreState {
  forms: Form[];
}

export default new Vuex.Store<StoreState>({
  state: {
    forms: [],
  },
  plugins: [createPersistedState({ storage: window.localStorage })],
});
