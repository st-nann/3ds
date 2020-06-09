<template>
    <v-row class="bg" align="stretch">
      <v-row class="pa-10" justify="center" align="center">
        <v-col cols="12" xs="12" sm="7" md="6" lg="4" class="text-center">
          <img :src="logo" width="140px" />
          <slot name="content"></slot>
        </v-col>
      </v-row>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getImage } from "@/services/Function.ts";

@Component
export default class Layout extends Vue {
  get logo() {
    return getImage(process.env.VUE_APP_LOGO);
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    background-image: linear-gradient(to bottom, #160f38, #583d7f)
    background-position: center bottom;
    background-size: cover;
    top: 0;
    left: 0;
</style>
