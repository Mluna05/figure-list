<template>
  <v-container>
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
    <!-- figure-list -->
    <v-row class="text-center">
      <v-col cols="12">
        <div class="figure-list-container">
          <div
            class="figure-node"
            v-for="(item, index) in figureList"
            :key="item + '_' + index"
            data-test="figure-list"
          >
            <Figure :item="item" :index="index">
              <!-- icon actions hover -->
              <template v-slot:hover-options>
                <div class="buttons-container">
                  <div class="button-left-postion">
                    <v-btn
                      plain
                      color="white"
                      @click="showSelectedFigure(getindex(index), item)"
                    >
                      <v-icon color="blue darken-2"> mdi-arrow-left </v-icon>
                    </v-btn>
                  </div>
                  <div class="button-right-postion">
                    <v-btn
                      plain
                      color="white"
                      @click="showSelectedFigure(index + 1, item)"
                    >
                      <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
                    </v-btn>
                  </div>
                  <div class="button-delete-postion">
                    <v-btn plain color="white" @click="removeAt(index)">
                      <v-icon color="red darken-2"> mdi-trash-can </v-icon>
                    </v-btn>
                  </div>
                </div>
              </template>
            </Figure>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- modals -->
    <v-row class="text-center">
      <v-col cols="12">
        <div class="modal-container">
          <selection-figure-modal
            :showModal="showModal"
            @input="setModal"
            data-test="modal"
          >
            <template v-slot:modal-content>
              <template>
                <v-card max-width="400" height="400" class="modal-content">
                  <!-- content modal first element -->
                  <div class="buttons-container">
                    <div>
                      <v-btn
                        color="blue lighten-2"
                        @click="addAt(selectedFigure.index, 'circle')"
                      >
                        <v-icon color="blue darken-2"> mdi-circle </v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="red lighten-2"
                        @click="addAt(selectedFigure.index, 'triangle')"
                      >
                        <v-icon color="red darken-2"> mdi-triangle </v-icon>
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        color="green lighten-2"
                        @click="addAt(selectedFigure.index, 'cuadrado')"
                      >
                        <v-icon color="green darken-2"> mdi-square </v-icon>
                      </v-btn>
                    </div>
                  </div>
                  <div class="close-container">
                    <div class="button-close-position">
                      <v-btn text @click="showModal = false">Close</v-btn>
                    </div>
                  </div>
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
  public selectedFigure: any = { index: 0, item: ''}; // eslint-disable-line

  public addAt(index: number, item: string) {
    this.showModal = false;
    this.figureList.addAt(index, item);
  }

  public removeAt(index: number) {
    this.figureList.removeAt(index);
  }

  public getindex(index: number): number {
    return index === this.figureList.size()
      ? index - 1
      : index === 0
      ? -1
      : index;
  }

  public showSelectedFigure<LinkedList>(index: number, item: LinkedList) {
    const figureItem = JSON.parse(JSON.stringify(item));
    this.showModal = true;
    this.selectedFigure = { index, figureItem };
  }

  public isEmpty() {
    return this.figureList.isEmpty();
  }
  public setModal() {
    this.showModal = !this.showModal;
  }
}
</script>

<style scoped lang="scss">
.figure-list-container {
  display: flex;
  overflow-x: auto;
  .figure-node {
    max-width: 33%;
    min-width: 10%;
    min-height: 10%;
    margin: 22px 19px;
  }
}

.modal-container {
  min-width: 35%;
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .button-left-postion {
    position: absolute;
    top: 30%;
    left: 0;
  }
  .button-delete-postion {
    position: absolute;
    top: 0;
  }
  .button-right-postion {
    position: absolute;
    top: 30%;
    right: 0;
  }
}

.close-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .button-close-position {
    position: absolute;
    bottom: 10%;
  }
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
  .figure-list-container {
    .figure-node {
      max-width: 33%;
      min-width: 25%;
    }
  }
}

@media only screen and (min-width: 480px) and (max-width: 580px) {
  .figure-list-container {
    .figure-node {
      max-width: 33%;
      min-width: 18%;
    }
  }
}
@media only screen and (min-width: 581px) and (max-width: 767px) {
  .figure-list-container {
    .figure-node {
      max-width: 33%;
      min-width: 20%;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 979px) {
  .figure-list-container {
    .figure-node {
      max-width: 33%;
      min-width: 10%;
    }
  }
}

@media only screen and (min-width: 980px) and (max-width: 1023px) {
  .figure-list-container {
    .figure-node {
      max-width: 33%;
      min-width: 10%;
    }
  }
}
</style>
