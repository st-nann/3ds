<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="text-right">
      <v-btn
        color="secondary"
        outlined
        @click.stop="doCreate()"
      >
        <v-icon :size="16">mdi-plus</v-icon>
        Create
      </v-btn>
    </v-col>
    <v-col xs="10" md="11">
      <Card
        :edit="true"
        :remove="true"
        :lists="lists"
      ></Card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Card from "@/components/party-and-event/Card.vue";

@Component({
  components: {
    Card
  }
})

export default class PartyAndEvent extends Vue {
  @Prop({ default: [] }) public lists!: object[];

  @Action("components/modalHandler")
  public doModalHandler!: (status: boolean) => void;

  @Action("components/actionTypeHandler")
  public doSetActionTypeHandler!: (type: string) => void;

  public doCreate() {
    this.doModalHandler(true);
    this.doSetActionTypeHandler("create");
  }
}
</script>
