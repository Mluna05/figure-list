<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4">
        <v-btn class="mx-2" color="blue lighten-2" @click="addCirculo">
          <v-icon color="blue darken-2"> mdi-circle </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn class="mx-2" color="red lighten-2" @click="addTriangulo">
          <v-icon color="red darken-2"> mdi-triangle </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn class="mx-2" color="green lighten-2" @click="addCuadrado">
          <v-icon color="green darken-2"> mdi-square </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <div class="figure-list-container">
          <div v-for="(item, index) in FigureList" :key="item + '_' + index">
            <div class="item">
              <div v-if="isCirculo(item)">
                <v-icon color="blue darken-2"> mdi-circle </v-icon>
              </div>
              <div v-else-if="isTriangulo(item)">
                <v-icon color="red darken-2"> mdi-triangle </v-icon>
              </div>
              <div v-else-if="isCuadrado(item)">
                <v-icon color="green darken-2"> mdi-square </v-icon>
              </div>

              <div>{{ item }}</div>
              <div>{{ index }}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LinkedList from "./../model/linked-list";
import Figure from "./Figure.vue";
@Component({
  components: { Figure },
})
export default class ListFigure extends Vue {
  public FigureList = new LinkedList();

  public addTriangulo() {
    this.FigureList.addFront("triangulo");
  }
  public addCirculo() {
    this.FigureList.addFront("circulo");
  }
  public addCuadrado() {
    this.FigureList.addFront("cuadrado");
  }
  public isTriangulo<LinkedList>(item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    if (figureItem === "triangulo") {
      return true;
    }
  }
  public isCirculo<LinkedList>(item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    if (figureItem === "circulo") {
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
.figure-list-container {
  display: flex;
  overflow-x: auto;
  .item {
    margin-right: 15px;
    margin-bottom: 5px;
  }
}
</style>
