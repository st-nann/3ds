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

@Component({
  components: {
    Card
  }
})

export default class Lists extends Vue {
  private lists: object[] = [];

  @Getter("api/lists")
  public response!: {
    etag: string,
    items: object[],
    kind: string,
    nextPageToken: string,
    pageInfo: object,
    regionCode: string
  };

  @Action("api/getLists")
  public getLists!: () => void;

  async created () {
    await this.getLists();
    this.lists = this.response.items;
  }
}
</script>
