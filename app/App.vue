<template>
  <Page class="page">
    <ActionBar title="Profile" class="toolbar"></ActionBar>>
    <GridLayout rows="*, auto">
      <StackLayout row="0">
        <router-view></router-view>
      </StackLayout>

      <BottomNavigation
        activeColor="#ff32b0"
        inactiveColor="#3a5bff"
        backgroundColor="#030823"
        row="1"
        titleVisibility="never"
        @tabPressed="tabPressed"
        @tabSelected="onBottomNavigationTabSelected"
        v-if="profile._id !== ''"
      >
        <BottomNavigationTab title="Profile" icon="earth"/>
        <BottomNavigationTab title="Profile" icon="groupprofileusers"/>
        <BottomNavigationTab title="Profile" icon="product"/>
        <BottomNavigationTab title="Profile" icon="profile"/>
      </BottomNavigation>
    </GridLayout>
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
  computed: {
    profile() {
      return this.$store.getters["authenticate/getProfile"];
    }
  },
  methods: {
    tabPressed(args) {
      console.log(args);
    },
    onBottomNavigationTabSelected({ newIndex }) {
      switch (newIndex) {
        case 0:
          this.$router.push("/streams");
          break;
        case 1:
          this.$router.push("/users");
          break;
        case 2:
          this.$router.push("/products");
          break;
        case 3:
          this.$router.push("/profile");
          break;
        default:
          break;
      }
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

