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
          <v-card
            :height="180"
            color="purple darken-4"
            class="white--text d-flex justify-center align-center title"
            flat
          >
            image
          </v-card>
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
                  {{ item.join_members }} / {{ item.members }}
                </div>
              </v-col>
              <v-col class="text-right" cols="6">
                <v-btn
                  v-if="action && item.status !== 'owner'"
                  color="primary"
                  :class="{ 'elevation-1 white--text': item.status === 'unjoin' }"
                  :outlined="item.status === 'join'"
                  small
                  rounded
                  @click.stop="doJoin(item)"
                >
                  {{ item.status === 'join' ? 'Unjion' : 'Join' }}
                </v-btn>
                <v-icon
                  v-if="edit && item.join_members <= 1"
                  class="mx-1"
                  color="grey"
                  :size="14"
                  @click.stop="doEdit(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  v-if="remove && item.join_members <= 1"
                  class="mx-1"
                  color="red lighten-1"
                  :size="14"
                  @click.stop="doDelete(item)"
                >
                  mdi-close
                </v-icon>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <CRUD :item="item"></CRUD>
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

  public item: any = {};
  
  @Action("components/modalHandler")
  public doModalHandler!: (status: boolean) => void;

  @Action("components/actionTypeHandler")
  public doSetActionTypeHandler!: (type: string) => void;

  public doJoin(item: any) {
    this.doModalHandler(true);
    this.doSetActionTypeHandler(item.status === "join" ? "unjoin" : "join");
    this.item = item;
  }

  public doEdit(item: any) {
    this.doModalHandler(true);
    this.doSetActionTypeHandler("edit");
    this.item = item;
  }

  public doDelete(item: any) {
    this.doModalHandler(true);
    this.doSetActionTypeHandler("delete");
    this.item = item;
  }
}
</script>
