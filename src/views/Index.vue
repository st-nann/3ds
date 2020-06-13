<template>
  <v-row>
    <v-col cols="12">
      <Profile
        :ownerQuantity="ownerList.length"
        :joinQuantity="joinList.length"
      >
      </Profile>
    </v-col>
    <v-col cols="12">
      <Home
        v-if="route === 'home'"
        :ownerList="ownerList"
        :joinList="joinList"
      ></Home>
      <PartyAndEvent
        v-if="route === 'lists'"
        :allList="allList"
      ></PartyAndEvent>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import _ from "lodash";
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { filterLists } from "@/services/Function.ts";
import Profile from "@/components/base/Profile.vue";
import Home from "@/views/home/Index.vue";
import PartyAndEvent from "@/views/party-event/Lists.vue";

@Component({
  components: {
    Profile,
    Home,
    PartyAndEvent
  }
})

export default class Index extends Vue {
  public lists: object[] = [];

  get route() {
    return _.split(this.$route.path, "/")[1];
  }

  get allList() {
    return this.lists;
  }

  get ownerList() {
    return filterLists(this.lists, "owner");
  }

  get joinList() {
    return filterLists(this.lists, "join");
  }
  
  @Getter("api/lists")
  public response!: {
    status: number,
    message: any
  };

  @Action("api/getLists")
  public getLists!: () => Promise<void>;

  created () {
    this.doGetLists();
  }

  async doGetLists () {
    await this.getLists().then(() => { this.lists = this.response.message; });
  }
}
</script>
