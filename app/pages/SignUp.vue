<template>
  <StackLayout>
    <FLexboxLayout
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="100%"
    >
      <Label text="REGISTRATION" marginBottom="30" class="caption-1"/>
      <TextField v-model="email" hint="E-mail:" class="input" marginBottom="20" width="80%"/>
      <TextField
        v-model="password"
        :secure="true"
        hint="Password:"
        class="input"
        marginBottom="20"
        width="80%"
      />
      <TextField
        v-model="passwordConfirm"
        :secure="true"
        hint="Cinfirm password:"
        class="input"
        marginBottom="20"
        width="80%"
      />

      <Button text="Registration" @tap="signUp" class="button" width="80%"/>

      <Label text="Sign in" class="link" @tap="$router.push('/')" marginTop="20"></Label>
    </FLexboxLayout>
  </StackLayout>
</template>

<script>
import { SIGN_UP } from "../graphql/mutations/signUp";
export default {
  data() {
    return {
      msg: "Sign Up",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    async signUp() {
      await this.$apollo.mutate({
        mutation: SIGN_UP,
        variables: {
          email: this.email,
          password: this.password,
          isStream: false
        }
      });
    }
  }
};
</script>
