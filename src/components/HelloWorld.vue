<template>
  <p>Mi nombre es: {{ nombre }}</p>
</template>

<script lang="ts">
import { computed } from "node_modules/vue/dist/vue";
import { Options, Vue } from "vue-class-component";
import store from "../store/index";


export default class HelloWorld extends Vue {
  get nombre(): string {
    return store.getters.getNombre;
  } 
}
</script>
<style>

</style>

