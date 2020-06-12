<template>
  <Layout>
    <div slot="content" class="pa-3">
      <v-row justify="center" align="center">
        <v-col cols="12" xs="12" lg="8">
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
            :rules="[passwordRules.required, passwordRules.length]"
            @click:append="show = !show"
            dark
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
            @click="doLogin()"
          >
            Login
          </v-btn>
          <div class="ma-4 white--text">
            Do not have an account?
            <v-btn
              append
              :to="{ path: 'signup' }"
              :ripple="false"
              class="font-weight-bold purple--text text--ligthen-4 ma-0 pa-0"
              text
              dark
              large
            >
              Create an account
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
import { validateEmail } from "@/services/Validate.ts";
import Layout from "@/components/base/Layout.vue";
import { Action } from "vuex-class";

@Component({
  components: {
    Layout
  },
})

export default class Login extends Vue {
  public email: string = "";
  public emailRules: object = {
    required: value => !!value || "Email is required.",
    match: value => validateEmail(value) || "Email is invalid."
  };
  public password: string = "";
  public show: boolean = false;
  public passwordRules: object = {
    required: value => !!value || "Password is required.",
    length: value => value.length >= 8 || "Password must be contain at least 8 characters."
  };

  get disabled () {
    return (
      _.includes([this.email, this.password], "") ||
      this.password.length < 8 ||
      !validateEmail(this.email)
    );
  }

  @Action("components/updateSnackbar")
  public updateSnackbar!: (
    data: {
      txt: string,
      type: string
    }
  ) => void; 

  @Action("authentication/login")
  public login!: (
    data: {
      data: {
        email: string,
        password: string
      }
    }
  ) => Promise<void>;

  async doLogin () {
    await this.login({
      data: {
        email: this.email,
        password: this.password
      }
    }).then((res: any) => {
      if (res.status === 200) {
        this.$router.push("/home");
        localStorage.token = res.token;
        this.updateSnackbar({
          txt: "Login Success",
          type: "success"
        });
      } else {
        this.$router.push("/");
      }
    });
  }
}
</script>
