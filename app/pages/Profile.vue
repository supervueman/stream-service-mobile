<template>
  <ScrollView>
    <StackLayout>
      <FlexboxLayout
        marginBottom="20"
        justiContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Label
          class="caption-1"
          :text="`${profile.firstname} ${profile.lastname}`"
          marginBottom="20"
          marginTop="20"
        />
        <TextField
          v-model="profile.firstname"
          hint="Firstname:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.lastname"
          hint="Lastname:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.avatar"
          hint="Avatar:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.email"
          hint="E-mail:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.phone"
          hint="Phone:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.website"
          hint="Website:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.facebook"
          hint="Facebook:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.vkontakte"
          hint="Vkontakte:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.instagram"
          hint="Instagram:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <TextField
          v-model="profile.content"
          hint="Content:"
          class="input"
          marginBottom="20"
          width="90%"
        />
        <Button text="Save" @tap="save" class="button" width="80%" marginBottom="50"/>

        <Label text="Logout" class="link" @tap="logout">Sign up</Label>
      </FlexboxLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.getters["authenticate/getProfile"];
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch("profile/updateProfile", this.profile);
    },
    logout() {
      this.$store.dispatch("authenticate/logout");
      this.$router.push("/");
    }
  },
  async mounted() {
    if (this.profile._id === "") {
      await this.$store.dispatch("authenticate/fetchProfile");
    }
  }
};
</script>

<style scoped>
FlexboxLayout {
  width: 100%;
}
</style>
