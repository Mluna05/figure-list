<template>
  <list-figure />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListFigure from "../components/ListFigure.vue";
@Component({
  components: {
    ListFigure,
  },
})
export default class PraticeDoublyLinkedList extends Vue {}
</script>
