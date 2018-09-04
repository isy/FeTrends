<template lang='pug'>
  .app-card
    at-card
      h4(slot='title') タイトル
      div
        p カードコンテンツ
</template>


<script>
import { Card } from "at-ui";
export default {
  components: {
    "at-card": Card
  }
};
</script>


<style lang='postcss' scoped>
</style>
