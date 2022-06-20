<template>
  <v-card>
    <slot name="figure"></slot>
    <slot name="icons-actions"></slot>
    <div>{{ figure }}</div>
    <div>{{ index }}</div>
  </v-card>
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
}
</script>

<style scoped lang="scss"></style>
