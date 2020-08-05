<template>
  <v-app>
    <div v-if="snackbar" class="snackbar">
      <Snackbar
        v-for="(items, index) in snackbar"
        :key="index"
        :snackbar="items"
      ></Snackbar>
    </div>
    <template v-if="!isLayout">
      <router-view />
    </template>
    <template v-else>
      <Sidebar></Sidebar>
      <Toolbar class="hidden-lg-and-up"></Toolbar>
      <v-content class="fourth">
        <v-container fluid>
          <router-view v-if="!loading" />
        </v-container>
      </v-content>
    </template>
  </v-app>
</template>

<script lang="ts">
import _ from "lodash";
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Snackbar from "@/components/base/Snackbar.vue";
import Toolbar from "@/components/base/Toolbar.vue";

@Component({
  components: {
    Snackbar,
    Toolbar
  },
})
export default class App extends Vue {
  get isLayout () {
    return this.$route.meta.layout;
  }

  @Getter("components/snackbar")
  private snackbar!: [{
    id: string;
    txt: string;
    status: string;
  }];

  @Getter("components/loading")
  public loading!: object[];

}
</script>

<style lang="stylus">
#app
  font-family: 'Dosis', sans-serif

.bg
  background-image: linear-gradient(to bottom, #160f38, #583d7f)

.snackbar
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9999;
  margin: 0px auto;
  width: fit-content;
</style>
