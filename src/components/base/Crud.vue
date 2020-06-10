<template>
  <Modal
    ref="modal"
    :modal="modal"
    :title="title"
    :buttonName="buttonName"
    :item="item"
    :disabled="disabled"
    v-on:doCancel="eventChildDoCancel"
  >
    <div slot="form" v-if="display">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Party / Event Name"
            color="primary"
            :rules="[nameRules.required, nameRules.match, nameRules.length]"
            maxlength="50"
            counter
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model.number="members"
            label="Number of Members"
            color="primary"
            :rules="[memberRules.required, memberRules.match, memberRules.max]"
            maxlength="10"
            counter
          />
        </v-col>
      </v-row>
    </div>
  </Modal>
</template>

<script lang="ts">
import _ from "lodash";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { validateName, validateNumber } from "@/services/Validate.ts";
import { Action, Getter } from "vuex-class";
import Modal from "@/components/base/Modal.vue";

@Component({
  components: {
    Modal
  }
})

export default class Card extends Vue {
  @Prop({ default: () => {} }) public item!: any;
  @Prop({ default: "" }) public actionType!: string;

  public modal: boolean = false;
  public functionAction!: void;
  public title: string = "";
  public buttonName: string = "";
  public name: string = "";
  public nameRules: object = {
    required: value => !!value || "Name is required.",
    match: value => validateName(value) || "Name is invalid.",
    length: value => value.length <= 50 || "Name should be contain less than or equal 50 characters."
  };
  public members: number = 0;
  public memberRules: object = {
    required: value => !!value || "Members is required.",
    match: value => validateNumber(value) || "Members is invalid.",
    max: value => value > 0 && value <= 10 || "Members should be contain less than or equal 10 members."
  };

  get disabled() {
    return (
      _.includes(["create", "edit"], this.actionType) && (
        _.includes([this.name, this.members], "") ||
        this.name.length > 50 ||
        this.members < 1 ||
        this.members > 10 ||
        !validateName(this.name) ||
        !validateNumber(_.toString(this.members))
      )
    );
  }

  get display() {
    return _.includes(["create", "edit"], this.actionType);
  }

  @Action("api/jionPartyAndEvent")
  public postJoin!: (data: { partyId: string }) => void;

  @Action("api/unJionParrtAndEvent")
  public postUnjoin!: (data: { partyId: string }) => void;

  @Action("api/createPartyAndEvent")
  public postCreate!: (data: { data: object }) => void;

  @Action("api/editPartyAndEvent")
  public postEdit!: (params: { id: string }, data: { data: object }) => void;

  @Action("api/deleteParrtAndEvent")
  public postDelete!: (data: { id: string }) => void;

  @Action("components/actionHandler")
  public doActionHandler!: (status: boolean) => void;

  @Getter("components/actionHandler")
  public actionHandler!: boolean;

  @Watch("actionType")
  public doOpenModal() {
    this.modal = true;
    if (this.actionType !== "") {
      switch (this.actionType) {
        case "join":
          this.title = "Do you want to join this party / event ?";
          this.buttonName = "Join";
          break;
        case "unjoin":
          this.title = "Do you want to unjoin this party / event ?";
          this.buttonName = "Unjoin";
          break;
        case "create":
          this.title = "Create";
          this.buttonName = "Confirm";
          break;
        case "edit":
          this.title = "Edit";
          this.buttonName = "Confirm";
          this.name = this.item.name;
          this.members = this.item.members;
          break;
        case "delete":
          this.title = "Do you want to delete this party / event ?";
          this.buttonName = "Confirm";
          break;
        default:
          this.modal = false;
      }
    }
  }

  @Watch("actionHandler")
  public async doGetDataRequest() {
    this.modal = false;
    if (this.actionType !== "" && this.actionHandler) {
      this.doActionHandler(false);
      switch (this.actionType) {
        case "join":
          await this.postJoin({ partyId: this.item.id});
          break;
        case "unjoin":
          await this.postUnjoin({ partyId: this.item.id });
          break;
        case "create":
          await this.postCreate(
            { data: { name: this.name, members: this.members } }
          );
          break;
        case "edit":
          await this.postEdit(
            { id: this.item.id },
            { data: { name: this.name, members: this.members } }
          );
          break;
        case "delete":
          await this.postDelete(this.item.id);
          break;
        default:
          this.modal = false;
      }
    }
  }

  public eventChildDoCancel(cancel: boolean) {
    this.modal = cancel;
    this.name = "";
    this.members = 0;
  }
}
</script>
