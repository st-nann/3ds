<template>
  <div>
    <v-row justify-xs="center">
      <v-col
        xs="12"
        sm="4"
        lg="2"
        v-for="(item, index) in lists" :key="index"
      >
        <v-card
          class="mx-auto my-3"
          max-width="300"
          :height="280"
        >
          <v-img height="180" :src="item.image"></v-img>
          <v-card-text class="pb-1">
            <div class="text-truncate font-weight-bold">
              {{ item.name }}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="pt-0 px-1 pb-1">
            <v-row align="center" class="mx-0" >
              <v-col cols="6">
                <div class="caption">
                  <v-icon
                    :size="16"
                    class="mr-1"
                    style="vertical-align: text-bottom !important;"
                  >
                    mdi-account
                  </v-icon>
                  {{ item.members }} / {{ item.total_member }}
                </div>
              </v-col>
              <v-col class="text-right" cols="6">
                <v-btn
                  v-if="action && item.status !== 'owner'"
                  color="primary"
                  :class="{ 'elevation-1 white--text': item.status === 'join' }"
                  :outlined="item.status === 'unjoin'"
                  small
                  rounded
                  @click="doJoin(item)"
                >
                  {{ item.status === 'join' ? 'Join' : 'Unjion' }}
                </v-btn>
                <v-icon
                  v-if="edit && item.members <= 1"
                  class="mx-1"
                  color="grey"
                  :size="14"
                  @click="doEdit(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  v-if="remove && item.members <= 1"
                  class="mx-1"
                  color="red lighten-1"
                  :size="14"
                  @click="doDelete(item)"
                >
                  mdi-close
                </v-icon>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <CRUD ref="crud" :item="item" :actionType="actionType"></CRUD>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import CRUD from "@/components/base/Crud.vue";

@Component({
  components: {
    CRUD
  }
})

export default class Card extends Vue {
  @Prop({ default: [] }) public lists!: object[];
  @Prop({ default: false }) public action!: boolean;
  @Prop({ default: false }) public edit!: boolean;
  @Prop({ default: false }) public remove!: boolean;

  public actionType: string = "";
  public item: any = {};

  @Getter("components/actionHandler")
  public actionHandler!: boolean;

  @Watch("actionHandler")
  private doResetActionType() {
    if (!this.actionHandler) {
      this.actionType = "";
    }
  }

  private doJoin(item: any) {
    this.actionType = item.status === "join" ? "unjoin" : "join";
    this.item = item;
  }

  private doEdit(item: any) {
    this.actionType = "edit";
    this.item = item;
  }

  private doDelete(item: any) {
    this.actionType = "delete";
    this.item = item;
  }
}
</script>
