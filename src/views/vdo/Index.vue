<template>
  <v-row>
    <v-col cols="12">
      <Card :lists="lists" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Card from "@/components/vdo/Card.vue";
import { IVdoResponse } from "@/interface/response/IApi";

@Component({
  components: {
    Card
  }
})

export default class Lists extends Vue {
  private lists: object[] = [];

  @Getter("api/lists")
  public response!: IVdoResponse;

  @Action("api/getLists")
  public getLists!: () => void;

  async created () {
    await this.getLists();
    this.lists = this.response.message.items;
  }
}
</script>
