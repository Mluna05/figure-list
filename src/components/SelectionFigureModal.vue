<template>
  <v-card>
    <v-dialog
      v-model="showModal"
      transition="dialog-top-transition"
      max-width="400"
      height="400"
    >
      <template v-slot:default>
        <slot name="modal-content"></slot>
      </template>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class SelectionFigureModal extends Vue {
  @Prop({ default: () => undefined }) item!: string | undefined;
  @Prop({ default: () => undefined }) index!: number | undefined;
  @Prop({ default: () => undefined }) showModal!: boolean | undefined;

  public figure: string | undefined = "";
  mounted() {
    this.figure = this.item;
  }
}
</script>

<style scoped lang="scss"></style>
