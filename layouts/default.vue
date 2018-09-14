<template lang="pug">
  .wrapper
    app-header
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AppHeader from "~/components/organisms/AppHeader.vue";

@Component({
  components: {
    AppHeader
  }
})
export default class extends Vue {}
</script>
