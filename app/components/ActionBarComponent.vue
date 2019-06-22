<template>
  <ActionBar :title="title"></ActionBar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Welcome!"
    }
  }
};
</script>
