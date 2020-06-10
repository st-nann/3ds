<template>
  <v-card class="elevation-8 pa-5" color="white">
    <v-row justify="center" align="center" class="text-center">
      <v-col
        :cols="$vuetify.breakpoint.xs ? '6' : '3'"
        v-for="(item, index) in quantity"
        :key="index"
      >
        <div class="display-1">{{ item.value }}</div>
        <div>{{ item.text }}</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component

export default class Profile extends Vue {
  private quantity: object[] = [
    { text: "Your Party and Event", value: 4 },
    { text: "Join Party and Event", value: 4 },
    { text: "Follower", value: 4 },
    { text: "Following", value: 4 }
  ];
}
</script>
