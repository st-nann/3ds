<template>
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { filterLists } from "@/services/Function.ts";
import PartyAndEvent from "@/views/home/management/PartyAndEvent.vue";
import Join from "@/views/home/management/Join.vue";

@Component({
  components: {
    PartyAndEvent,
    Join
  }
})

export default class Management extends Vue {
  @Prop({ default: [] }) public ownerList!: object[];
  @Prop({ default: [] }) public joinList!: object[];

  public active: number = 0;
  public buttons: object[] = [
    { text: "Create", icon: "view-grid-plus" },
    { text: "Join", icon: "account-group" }
  ];
}
</script>
