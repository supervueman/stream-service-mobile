<template>
  <Page class="page">
    <ActionBar title="Example" class="toolbar"></ActionBar>
    <StackLayout>
      <Label class="toolbar-shadow" height="15"></Label>
      <Label
        class="caption-1"
        :text="`${profile.firstname} ${profile.lastname}`"
        marginBottom="20"
      />
      <Carousel
        height="200px"
        width="100%"
        pageChanged="myChangeEvent"
        pageTapped="mySelectedEvent"
        indicatorColor="#000"
        finite="true"
        bounce="false"
        :showIndicator="false"
        verticalAlignment="top"
        android:indicatorAnimation="swap"
        color="white"
      >
        <CarouselItem id="slide1" backgroundColor="#b3cde0" verticalAlignment="middle">
          <Label text="Slide 1" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
        <CarouselItem id="slide2" backgroundColor="#6497b1" verticalAlignment="middle">
          <Label text="Slide 2" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
        <CarouselItem id="slide3" backgroundColor="#005b96" verticalAlignment="middle">
          <Label text="Slide 3" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
        <CarouselItem id="slide4" backgroundColor="#03396c" verticalAlignment="middle">
          <Label text="Slide 4" backgroundColor="#50000000" horizontalAlignment="center"/>
        </CarouselItem>
      </Carousel>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    profile() {
      console.log(this.$store.getters["authenticate/getProfile"]);
      return this.$store.getters["authenticate/getProfile"];
    }
  }
};
</script>
