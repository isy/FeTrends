<template lang="pug">
  section.container
    div
      app-trend-item
</template>

<script>
import AppTrendItem from "~/components/molecules/AppTrendItem";

export default {
  components: {
    AppTrendItem
  }
};
</script>

<style lang="postcss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
