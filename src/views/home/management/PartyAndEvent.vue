<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-right">
        <v-btn
          color="secondary"
          outlined
          @click="doCreate()"
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
    <CRUD ref="crud" :actionType="actionType"></CRUD>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Card from "@/components/party-and-event/Card.vue";
import CRUD from "@/components/base/Crud.vue";

@Component({
  components: {
    Card,
    CRUD
  }
})

export default class PartyAndEvent extends Vue {
  @Prop({ default: [] }) public lists!: object[];

  public actionType: string = "";

  @Watch("$refs.crud.modal")
  private doResetActionType() {
    this.actionType = "";
  }

   private doCreate() {
    this.actionType = "create";
  }
}
</script>
