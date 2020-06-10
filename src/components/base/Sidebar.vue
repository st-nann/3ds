<template>
  <v-card>
    <v-navigation-drawer
      :value="toggleSidabar"
      class="bg"
      mobile-break-point="1264"
      width="300"
      enable-resize-watcher
      app
      fixed
      touchless
      dark
    >
      <v-row justify="center" align="center" class="pa-5 elevation-15">
        <img :src="logo" width="50px" />
        <span class="display-1 white--text font-weight-bold ml-3">Party Haan</span>
      </v-row>
      <v-list class="ma-5" :height="10" shaped>
        <v-list-item-group v-model="selected" color="white">
          <v-list-item
            v-for="item in menu"
            :key="item.title"
            append
            :to="{ path: `/${ item.path }` }"
          >
            <v-list-item-icon>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="py-0">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-3">
          <v-btn
            color="third"
            rounded
            block
            @click="doLogout()"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { getImage } from "@/services/Function.ts";
import { getSidebarMenu } from "@/services/menu/Sidebar.ts";
import { clearToken } from "@/services/Authentication.ts";

@Component
export default class Sidebar extends Vue {
  private selected: string = "Home";

  get logo() {
    return getImage(process.env.VUE_APP_LOGO);
  }

  get menu() {
    return getSidebarMenu().menu;
  }

  @Getter("components/toggleSidebar")
  private toggleSidabar!: boolean;

  private doLogout() {
    clearToken();
  }
}
</script>
