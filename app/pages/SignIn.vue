<template>
  <StackLayout>
    <FLexboxLayout
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="100%"
    >
      <Label text="LOGIN" marginBottom="30" class="caption-1"/>
      <TextField v-model="email" hint="E-mail:" class="input" marginBottom="20" width="80%"/>
      <TextField
        v-model="password"
        :secure="true"
        hint="Password:"
        class="input"
        marginBottom="20"
        width="80%"
      />
      <Button text="Login" @tap="login" class="button" width="80%"/>

      <Label text="Sign up" class="link" @tap="$router.push('/signup')" marginTop="20">Sign up</Label>
    </FLexboxLayout>
  </StackLayout>
</template>

<script>
import { SIGN_IN } from "../graphql/queries/signIn";
import localStorage from "nativescript-localstorage";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const res = await this.$apollo.query({
        query: SIGN_IN,
        variables: {
          email: this.email,
          password: this.password
        }
      });
      localStorage.setItem("uid", res.data.login.userId);
      localStorage.setItem("access_token", res.data.login.token);
      this.email = "";
      this.password = "";
      this.$router.push("/profile");
    }
  }
};
</script>
