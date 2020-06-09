<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
}
</script>

<style lang="stylus">
#app
  font-family 'Dosis', sans-serif
</style>
