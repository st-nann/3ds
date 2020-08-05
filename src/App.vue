<template>
  <v-app class="bg">
    <template>
      <Toolbar>
        <div slot="content">
          <v-content>
            <v-container fluid>
              <router-view v-if="!loading" />
            </v-container>
          </v-content>
        </div>
      </Toolbar>
    </template>
  </v-app>
</template>

<script lang="ts">
import _ from "lodash";
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Toolbar from "@/components/base/Toolbar.vue";

@Component({
  components: {
    Toolbar
  },
})
export default class App extends Vue {
  @Getter("components/loading")
  public loading!: object[];

}
</script>

<style lang="stylus">
#app
  font-family: 'Dosis', sans-serif

.bg
  background-image: #202020;

.snackbar
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9999;
  margin: 0px auto;
  width: fit-content;
</style>
