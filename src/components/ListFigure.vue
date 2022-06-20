<template>
  <v-container>
    <!-- figure-list -->
    <v-row class="text-center">
      <v-col cols="12">
        <div class="figure-list-container">
          <div
            class="figure-node"
            v-for="(item, index) in figureList"
            :key="item + '_' + index"
          >
            <Figure :item="item" :index="index">
              <!-- show icons actions -->
              <template v-slot:icons-actions>
                <v-btn
                  color="green lighten-2"
                  @click="addAt(index, 'cuadrado')"
                >
                  <v-icon color="green darken-2"> mdi-square </v-icon>
                </v-btn>
                <v-btn color="red lighten-2" @click="addAt(index, 'triangulo')">
                  <v-icon color="red darken-2"> mdi-triangle </v-icon>
                </v-btn>
                <v-btn color="blue lighten-2" @click="addAt(index, 'circulo')">
                  <v-icon color="blue darken-2"> mdi-circle </v-icon>
                </v-btn>
              </template>
              <!-- show icons -->
              <template v-slot:figure>
                <div v-if="isCirculo(item)">
                  <v-icon color="blue darken-2"> mdi-circle </v-icon>
                </div>
                <div v-else-if="isTriangulo(item)">
                  <v-icon color="red darken-2"> mdi-triangle </v-icon>
                </div>
                <div v-else-if="isCuadrado(item)">
                  <v-icon color="green darken-2"> mdi-square </v-icon>
                </div>
              </template>
            </Figure>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="text-center" v-if="figureList.isEmpty()">
      <v-col cols="12">
        <!-- Inital List -->
        <div>
          <v-btn color="primary" @click="showModal = !showModal"
            >Select Figure</v-btn
          >
        </div>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <div class="modal-container">
          <!-- modal -->
          <selection-figure-modal :showModal="showModal">
            <template v-slot:modal-content>
              <v-card max-width="400" height="400">
                <!-- content modal -->
                <div>
                  <v-btn
                    class="mx-2"
                    color="blue lighten-2"
                    @click="addAt(0, 'circulo')"
                  >
                    <v-icon color="blue darken-2"> mdi-circle </v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn
                    class="mx-2"
                    color="red lighten-2"
                    @click="addAt(0, 'triangulo')"
                  >
                    <v-icon color="red darken-2"> mdi-triangle </v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn
                    class="mx-2"
                    color="green lighten-2"
                    @click="addAt(0, 'cuadrado')"
                  >
                    <v-icon color="green darken-2"> mdi-square </v-icon>
                  </v-btn>
                </div>
                <v-card-actions class="justify-end">
                  <v-btn text @click="showModal = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </selection-figure-modal>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LinkedList from "./../model/linked-list";
import Figure from "./Figure.vue";
import SelectionFigureModal from "./SelectionFigureModal.vue";
@Component({
  components: { Figure, SelectionFigureModal },
})
export default class ListFigure extends Vue { // eslint-disable-line
  public figureList = new LinkedList();
  public showModal = false;

  public addAt(index: number, item: string) {
    this.showModal = false;
    this.figureList.addAt(index, item);
  }

  public removeAt(index: number) {
    this.figureList.removeAt(index);
  }

  public isEmpty() {
    return this.figureList.isEmpty();
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
  .figure-node {
    margin-right: 15px;
    margin-bottom: 5px;
    min-width: 10%;
  }
}

.modal-container {
  min-width: 35%;
}
</style>

function mounted() { throw new Error("Function not implemented."); }
