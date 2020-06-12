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
            v-model="email"
            label="Email"
            color="white"
            hint="ex. example@domain.com"
            :rules="[emailRules.required, emailRules.match]"
            dark
          />
          <v-text-field
            v-model="password"
            label="Password"
            color="white"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.match]"
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
import { validateName, validateEmail, validPassword } from "@/services/Validate.ts";
import Layout from "@/components/base/Layout.vue";
import { Action } from "vuex-class";

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
  public email: string = "";
  public emailRules: object = {
    required: value => !!value || "Email is required.",
    match: value => validateEmail(value) || "Email is invalid."
  };
  public password: string = "";
  public passwordRules: object = {
    required: value => !!value || "Password is required.",
    match: value => validPassword(value) ||
      "Password should be contain at least 8 characters, one uppercase, one lowercase and one special character.",
  };
  public show: boolean = false;
  public policy: boolean = false;
  public news: boolean = false;

  get disabled () {
    return (
      _.includes([this.username, this.email, this.password], "") ||
      _.includes([this.policy, this.news], false) ||
      !validateName(this.username) ||
      !validateEmail(this.email) ||
      !validPassword(this.password) ||
      this.password.length < 8
    );
  }

  @Action("components/updateSnackbar")
  public updateSnackbar!: (
    data: {
      txt: string,
      type: string
    }
  ) => void; 

  @Action("authentication/signup")
  public signup!: (
    data: {
      data: {
        username: string,
        email: string,
        password: string
      }
    }
  ) => Promise<void>;

  async doSignup () {
    await this.signup({
      data: {
        username: this.username,
        email: this.email,
        password: this.password
      }
    }).then((res: any) => {
      if (res.status === 200) {
        this.$router.push("/");
        this.updateSnackbar({
          txt: res.message,
          type: "success"
        });
      }
    });
  }
}
</script>
