<template>
  <Modal
    :modal="modal"
    :title="title"
    :buttonName="buttonName"
    :item="item"
    :disabled="disabled"
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
            label="Number of Members (exclude you)"
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

  public functionAction!: void;
  public modal: boolean = false;
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
      _.includes(["create", "edit"], this.actionTypeHandler) && (
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
    return _.includes(["create", "edit"], this.actionTypeHandler);
  }

  @Action("api/jionPartyAndEvent")
  public postJoin!: (payload: { params: { id: string } }) => void;

  @Action("api/unJionParrtAndEvent")
  public postUnjoin!: (payload: { params: { id: string } }) => void;

  @Action("api/createPartyAndEvent")
  public postCreate!: (payload: { data: object }) => void;

  @Action("api/editPartyAndEvent")
  public postEdit!: (payload: { params: { id: string }, data: object }) => void;

  @Action("api/deleteParrtAndEvent")
  public postDelete!: (params: { params: { id: string } }) => void;

  @Action("api/getLists")
  public getLists!: () => Promise<void>;

  @Action("components/loading")
  public dosetLoading!: (status: boolean) => void;

  @Action("components/modalHandler")
  public doModalHandler!: (status: boolean) => void;

  @Action("components/actionHandler")
  public doActionHandler!: (status: boolean) => void;

  @Action("components/actionTypeHandler")
  public doSetActionTypeHandler!: (type: string) => void;

  @Getter("components/modalHandler")
  public modalHandler!: boolean;

  @Getter("components/actionHandler")
  public actionHandler!: boolean;

  @Getter("components/actionTypeHandler")
  public actionTypeHandler!: string;

  @Watch("modalHandler")
  public doCloaseModal() {
    if (!this.modalHandler) {
      this.modal = false;
    }
  }

  @Watch("actionTypeHandler")
  public doOpenModal() {
    if (this.modalHandler) {
      this.modal = true;
      switch (this.actionTypeHandler) {
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
          if (this.item) {
            this.name = this.item.name;
            this.members = this.item.members;
          }
          break;
        case "delete":
          this.title = "Do you want to delete this party / event ?";
          this.buttonName = "Confirm";
          break;
        default:
          this.title = "";
          this.buttonName = "Confirm";
          break;
      }
    }
  }

  @Watch("actionHandler")
  public async doGetDataRequest() {
    this.dosetLoading(true);
    if (this.actionTypeHandler !== "" && this.actionHandler) {
      switch (this.actionTypeHandler) {
        case "join":
          await this.postJoin({ params: { id: this.item.id } });
          break;
        case "unjoin":
          await this.postUnjoin({ params: { id: this.item.id } });
          break;
        case "create":
          await this.postCreate(
            { data: { name: this.name, members: this.members } }
          );
          break;
        case "edit":
          await this.postEdit({
            params: { id: this.item.id },
            data: { name: this.name, members: this.members }
          });
          break;
        case "delete":
          await this.postDelete({ params: { id: this.item.id } });
          break;
        default:
          this.title = "";
          this.buttonName = "Confirm";
          break;
      }
      await this.doGetLists();
      this.doModalHandler(false);
      this.doActionHandler(false);
      this.dosetLoading(false);
      this.doSetActionTypeHandler("");
    }
  }
  
  async doGetLists () {
    await this.getLists();
  }
}
</script>
