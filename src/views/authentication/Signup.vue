<template>
  <Layout>
    <div slot="content" class="pa-3">
      <v-row justify="center" align="center">
        <v-col cols="12" xs="12" lg="8">
          <v-text-field
            v-model="username"
            label="Username"
            color="white"
            maxlength="50"
            counter
            :rules="[usernameRules.required, usernameRules.match, usernameRules.length]"
            dark
          />
          <v-text-field
            v-model="password"
            label="Password"
            color="white"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            dark
          />
          <v-checkbox
            v-model="policy"
            label="ฉันยอมรับเงื่อนไข และข้อตกลงเกี่ยวกับการใช้งาน PartyHaan รวมถึงนโยบายความเป็นส่วนตัว"
            color="white"
            dense
            dark
            hide-details
          />
          <v-checkbox
            v-model="news"
            label="ฉันต้องการรับข่าวสารที่เกี่ยวกับโปรโมชั่นจาก PartyHaan"
            color="white"
            dense
            dark
            hide-details
          />
          <v-btn
            class="my-7"
            :class="{ 'primary--text': !disabled }"
            color="white"
            :width="150"
            :disabled="disabled"
            rounded
            large
            dark
            @click="doSignup()"
          >
            Signup
          </v-btn>
          <div class="ma-4 white--text">
            Already have an account?
            <v-btn
              append
              :to="{ path: '/' }"
              :ripple="false"
              class="font-weight-bold purple--text text--ligthen-4 ma-0 pa-0"
              text
              dark
            >
              Login
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </Layout>
</template>

<script lang="ts">
import _ from "lodash";
import { Vue, Component } from "vue-property-decorator";
import { validateName } from "@/services/Validate.ts";
import Layout from "@/components/base/Layout.vue";

@Component({
  components: {
    Layout
  },
})

export default class Signup extends Vue {
  public username: string = "";
  public usernameRules: object = {
    required: value => !!value || "Username is required.",
    match: value => validateName(value) || "Username is invalid.",
    length: value => value.length <= 50 || "Username should be contain less than or equal 50 characters."
  };
  public password: string = "";
  public show: boolean = false;
  public policy: boolean = false;
  public news: boolean = false;

  get disabled () {
    return (
      _.includes([this.username, this.password], "") ||
      _.includes([this.policy, this.news], false) ||
      this.password.length < 8 ||
      !validateName(this.username)
    );
  }

  doSignup () {
    // doSignup
  }
}
</script>
