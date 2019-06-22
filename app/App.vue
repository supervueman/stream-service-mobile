<template>
  <Page class="page">
    <ActionBar title="Profile" class="toolbar"></ActionBar>
    <router-view></router-view>
  </Page>
</template>

<script>
import localStorage from "nativescript-localstorage";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    selectedTab(args) {
      console.log(args.value);
    }
  },
  async mounted() {
    if (localStorage.getItem("access_token") !== null) {
      await this.$store.dispatch("authenticate/fetchProfile");
      this.$router.push("/profile");
    } else {
      this.$router.push("/");
    }
  }
};
</script>

