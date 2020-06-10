<template>
  <v-row>
    <v-col cols="12">
      <Profile></Profile>
    </v-col>
    <v-col cols="12">
      <v-card class="elevation-8 pa-5" color="white" height="100vh">
        <v-row>
          <v-col cols="12">
            <v-bottom-navigation
              :value="active"
              class="elevation-0"
              color="primary"
              horizontal
            >
              <v-btn
                v-for="(item, index) in buttons"
                :key="index"
                @click.stop="active = index"
              >
                <span>{{ item.text }}</span>
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-col>
          <v-col cols="12">
            <PartyAndEvent
              v-if="active === 0"
              :lists="ownerList"
            ></PartyAndEvent>
            <Join
              v-else-if="active === 1"
              :lists="joinList"
            ></Join>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { filterLists } from "@/services/Function.ts";
import Profile from "@/views/home/Profile.vue";
import PartyAndEvent from "@/views/home/management/PartyAndEvent.vue";
import Join from "@/views/home/management/Join.vue";
import { getMockdata } from "@/services/mockdata.ts";

@Component({
  components: {
    Profile,
    PartyAndEvent,
    Join
  }
})

export default class Management extends Vue {
  private active: number = 0;
  private buttons: object[] = [
    { text: "Create", icon: "view-grid-plus" },
    { text: "Join", icon: "account-group" }
  ];

  get ownerList() {
    return filterLists(getMockdata().data, "owner");
  }

  get joinList() {
    return filterLists(getMockdata().data, "unjoin");
  }
}
</script>
