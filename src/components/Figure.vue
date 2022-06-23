<template>
  <v-hover v-slot="{ hover }">
    <v-card>
      <div class="figure-position" v-if="isCircle(item)" style="height: 6em">
        <v-icon color="blue darken-2"> mdi-circle </v-icon>
      </div>
      <div
        class="figure-position"
        v-else-if="isTriangle(item)"
        style="height: 6em"
      >
        <v-icon color="red darken-2"> mdi-triangle </v-icon>
      </div>
      <div
        class="figure-position"
        v-else-if="isCuadrado(item)"
        style="height: 6em"
      >
        <v-icon color="green darken-2"> mdi-square </v-icon>
      </div>
      <v-expand-transition mode="out-in">
        <div v-if="hover" class="v-card--reveal" style="height: 100%">
          <slot name="hover-options"></slot>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Figure extends Vue {
  @Prop({ default: () => undefined }) item!: string | undefined;
  @Prop({ default: () => undefined }) index!: number | undefined;

  public figure: string | undefined = "";
  mounted() {
    this.figure = this.item;
  }
  public isTriangle<LinkedList>(item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    if (figureItem === "triangle") {
      return true;
    }
  }
  public isCircle<LinkedList>(item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    if (figureItem === "circle") {
      return true;
    }
  }
  public isCuadrado<LinkedList>(item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    if (figureItem === "cuadrado") {
      return true;
    }
  }
}
</script>

<style scoped lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.figure-position {
  display: flex;
  justify-content: center;
}
</style>
