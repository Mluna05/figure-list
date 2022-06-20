<template>
  <div class="item">
    <v-icon color="red darken-2"> mdi-triangle </v-icon>
    <div>{{ figure }}</div>
    <div>{{ key }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Figure extends Vue {
  @Prop({ default: () => undefined }) item!: string | undefined;

  public figure: string | undefined = "";
  mounted() {
    this.figure = this.item;
  }

  public simon<LinkedList>(item: LinkedList) {
    const figureItem = JSON.stringify(item);
    if (figureItem === "triangle") {
      return true;
    }
  }
}
</script>

<style scoped lang="scss"></style>
