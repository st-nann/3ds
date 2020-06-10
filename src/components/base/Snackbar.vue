<template>
  <v-snackbar :value="snackbar.type" :timeout="0" top>
    {{ snackbar.txt }}
    <v-btn
      class="ml-0 pl-3"
      :class="snackbar.type === 'error' ? 'red--text' : 'green--text'"
      @click="doClose()"
      flat
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component

export default class Snackbar extends Vue {
  @Prop({ default: {} }) public snackbar!: {
    id: string;
    txt: string;
    status: string;
  };

  @Action("components/closeSnackbar")
  public closeSnackbar!: (id: string) => void;
  
  private doClose() {
    this.closeSnackbar(this.snackbar.id);
  }
}
</script>

<style lang="stylus">
.v-snack.v-snack--active.v-snack--top
  position: relative
  margin-bottom: 5px
.v-snack-transition-leave-active
  transition: none !important
</style>
