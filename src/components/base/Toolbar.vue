<template>
  <v-toolbar :elevation="0" dense>
    <v-app-bar-nav-icon
      class="hidden-lg-and-up grey--text text--darken-3"
      @click.stop="updateSidebar()"
      ripple
      light
    ></v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

@Component
export default class Toolbar extends Vue {
  @Getter("components/toggleSidebar")
  private toggleSidabar!: boolean;

  @Action("components/toggleSidebar")
  private updateSidebar!: () => void; 
}
</script>