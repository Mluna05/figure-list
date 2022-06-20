<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LinkedList from "./../model/linked-list";
@Component({
  components: {},
})
export default class HelloWorld extends Vue {
  mounted() {
    let List = new LinkedList();
    List.addFront("square");
    List.addFront("triangle");
    console.log(List.size());
    for (const listNode of List) {
      console.log(listNode);
    }
    List.removeFront();
    console.log(List.size());
    for (const listNode of List) {
      console.log(listNode);
    }
  }
}
</script>
