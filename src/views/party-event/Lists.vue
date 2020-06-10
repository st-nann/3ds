<template>
  <v-row>
    <v-col cols="12">
      <Profile></Profile>
    </v-col>
    <v-col cols="12">
      <v-card class="elevation-8 pa-5" color="white" height="100vh">
        <v-row>
          <v-col cols="12">
            <Card
              :lists="allList"
              :action="true"
            ></Card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Profile from "@/views/home/Profile.vue";
import Card from "@/components/party-and-event/Card.vue";
import { getMockdata } from "@/services/mockdata.ts";

@Component({
  components: {
    Profile,
    Card
  }
})

export default class Lists extends Vue {
  get allList() {
    return getMockdata().data;
  }
}
</script>
