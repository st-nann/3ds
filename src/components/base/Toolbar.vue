<template>
  <v-card flat>
    <v-toolbar
      color="primary"
      dark
      extended
      flat
    >
    </v-toolbar>
    <v-card
      class="mx-auto"
      max-width="80%"
      style="margin-top: -64px;"
    >
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="mb-4">
        <slot name="content" />
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {
  get title () {
    return this.$route.meta.title ? this.$route.meta.title : "";
  }
}
</script>