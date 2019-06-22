<template>
  <StackLayout>
    <Label class="message" :text="msg" col="0" row="0"/>
    <TextField v-model="email" hint="E-mail:"/>
    <TextField v-model="password" :secure="true" hint="Password:"/>
    <Button text="Login" @tap="signUp"/>
  </StackLayout>
</template>

<script>
import { SIGN_UP } from "../graphql/mutations/signUp";
export default {
  data() {
    return {
      msg: "Sign Up",
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      this.$apollo
        .mutate({
          mutation: SIGN_UP,
          variables: {
            email: this.email,
            password: this.password,
            isStream: false
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
