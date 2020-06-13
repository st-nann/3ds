<template>
  <v-row justify="center">
    <v-dialog :value="modal" persistent max-width="450px">
      <v-card>
        <v-card-text class="pa-5 subtitle-1 font-weight-bold">{{ title }}</v-card-text>
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
            @click="doAction()"
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
import { Action, Getter } from "vuex-class";

@Component
export default class Modal extends Vue {
  @Prop({ default: "" }) public title!: string;
  @Prop({ default: "Confirm" }) public buttonName!: string;
  @Prop({ default: false }) public disabled!: boolean;
  @Prop({ default: false }) public modal!: boolean;

  @Action("components/updateSnackbar")
  public updateSnackbar!: (
    data: {
      txt: string,
      type: string
    }
  ) => void;

  @Action("components/modalHandler")
  public doModalHandler!: (status: boolean) => void;

  @Action("components/actionHandler")
  public doActionHandler!: (status: boolean) => void;

  private doCancel() {
    this.doModalHandler(false);
  }

  private doAction() {
    this.doActionHandler(true);
  }
}
</script>
