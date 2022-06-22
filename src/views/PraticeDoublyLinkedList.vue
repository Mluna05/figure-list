<template>
  <div class="list-figure-position">
    <list-figure />
  </div>
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

<style scoped lang="scss">
.list-figure-position {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
