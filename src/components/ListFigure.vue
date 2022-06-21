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
              <!-- icon actions hover -->
              <template v-slot:hover-options>
                <v-btn
                  color="green lighten-2"
                  @click="showSelectedFigure(index, item)"
                >
                  <v-icon color="green darken-2"> mdi-arrow-left </v-icon>
                </v-btn>
                <v-btn
                  color="red lighten-2"
                  @click="showSelectedFigure(index, item)"
                >
                  <v-icon color="red darken-2"> mdi-arrow-down </v-icon>
                </v-btn>
                <v-btn
                  color="blue lighten-2"
                  @click="showSelectedFigure(index, item)"
                >
                  <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
                </v-btn>
              </template>
            </Figure>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- Inital List -->
    <v-row class="text-center" v-if="figureList.isEmpty()">
      <v-col cols="12">
        <div>
          <v-btn color="primary" @click="showModal = !showModal"
            >Select Figure</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <!-- modals -->
    <v-row class="text-center">
      <v-col cols="12">
        <div class="modal-container">
          <selection-figure-modal :showModal="showModal">
            <template v-slot:modal-content>
              <template v-if="figureList.isEmpty()">
                <v-card max-width="400" height="400">
                  <!-- content modal first element -->
                  <div>
                    <v-btn color="blue lighten-2" @click="addAt(0, 'circulo')">
                      <v-icon color="blue darken-2"> mdi-circle </v-icon>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn color="red lighten-2" @click="addAt(0, 'triangulo')">
                      <v-icon color="red darken-2"> mdi-triangle </v-icon>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
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
              <template v-else>
                <v-card max-width="400" height="400">
                  <!-- content modal -->
                  <div>
                    <div>
                      <v-btn
                        color="blue lighten-2"
                        @click="addAt(selectedFigure['index'], 'circulo')"
                      >
                        <v-icon color="blue darken-2"> mdi-circle </v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="red lighten-2"
                        @click="addAt(selectedFigure['index'], 'triangulo')"
                      >
                        <v-icon color="red darken-2"> mdi-triangle </v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="green lighten-2"
                        @click="addAt(selectedFigure['index'], 'cuadrado')"
                      >
                        <v-icon color="green darken-2"> mdi-square </v-icon>
                      </v-btn>
                    </div>
                    {{ selectedFigure }}
                  </div>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="showModal = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
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
export default class ListFigure extends Vue {
  public figureList = new LinkedList();
  public showModal = false;
  public selectedFigure: any = {}; // eslint-disable-line

  public addAt(index: number, item: string) {
    this.showModal = false;
    this.figureList.addAt(index, item);
  }

  public removeAt(index: number) {
    this.figureList.removeAt(index);
  }

  public showSelectedFigure<LinkedList>(index: number, item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    this.showModal = true;
    this.selectedFigure = { index, figureItem };
  }

  public isEmpty() {
    return this.figureList.isEmpty();
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
    min-height: 10%;
  }
}

.modal-container {
  min-width: 35%;
}
</style>

function mounted() { throw new Error("Function not implemented."); }
