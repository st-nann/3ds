<template>
  <v-row justify="center">
    <v-dialog :value="modal" persistent max-width="400px">
      <v-card>
        <v-card-title class="title">{{ title }}</v-card-title>
        <v-card-text>
          <slot name="form"></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            @click="doCancel()"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            :disabled="disabled"
            @click="doAction"
          >
            {{ buttonName }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Modal extends Vue {
  @Prop({ default: false }) public modal!: boolean;
  @Prop({ default: "" }) public title!: string;
  @Prop({ default: "Confirm" }) public buttonName!: string;
  @Prop({ default: () => null }) public doAction!: void;
  @Prop({ default: false }) public disabled!: boolean;

  public loading: boolean = false;

  @Action("components/updateSnackbar")
  public updateSnackbar!: (
    data: {
      txt: string,
      type: string
    }
  ) => void; 

  private doCancel() {
    this.$emit("doCancel", false);
    this.loading = false;
  }
}
</script>
