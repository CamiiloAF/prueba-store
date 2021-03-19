<template>
  <p>Veces que fallamos con la Store: {{ counter }}</p>

  <button @click="updateCounter(counter + 1)">Botón</button>
</template>

<script lang="ts">
import { computed } from "node_modules/vue/dist/vue";
import { Options, Vue } from "vue-class-component";
import store  from "../store/index";

import { namespace } from 'vuex-class'

const LoginModule = namespace('LoginModule')

export default class HelloWorld extends Vue {
  @LoginModule.State
  public counter!: number;

  // @LoginModule.Getter
  // public nameUpperCase!: string

  @LoginModule.Action
  public updateCounter!: (newCounter: number) => void

  // get counter(): string {
  //   return `${store.getters.getCounter}`;
  // }

  // incrementCounter() {
  //   return store.commit('incrementCounter', 1);
  // }
}
</script>
<style>
</style>

