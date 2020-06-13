<template>
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "@/components/party-and-event/Card.vue";

@Component({
  components: {
    Card
  }
})

export default class Lists extends Vue {
  @Prop({ default: [] }) public allList!: object[];
}
</script>
