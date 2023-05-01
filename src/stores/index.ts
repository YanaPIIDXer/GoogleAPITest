import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import type { Form } from "./states/Form";

export { Form };

export interface StoreState {
  forms: Form[];
}

export default createStore<StoreState>({
  state: {
    forms: [],
  },
  mutations: {
    /**
     * フォーム追加
     */
    addForm: (state: StoreState, payload: string) => {
      state.forms.push({ id: payload });
    },
  },
  plugins: [createPersistedState({ storage: window.localStorage })],
});
