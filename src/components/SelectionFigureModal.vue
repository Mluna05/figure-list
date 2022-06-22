<template>
  <v-card>
    <v-dialog
      v-model="showModal"
      transition="dialog-top-transition"
      max-width="400"
      height="400"
      @click:outside="closeDialog"
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
  @Prop({ default: () => undefined }) showModal!: boolean | undefined;

  closeDialog() {
    this.$emit("input", false);
  }
}
</script>

<style scoped lang="scss"></style>
