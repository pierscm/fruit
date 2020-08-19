<template>
  <v-card class="mx-auto" max-width="400">
    <v-img height="200px" :src="`${BASE_URL}/images${image}`" />
    <v-card-title class="fruit-name">
      {{ this.name ? this.name : "--" }}
    </v-card-title>
    <v-card-text class="text--primary">
      <div class="text-left">
        {{ WEIGHT }}: {{ this.weight ? `${this.weight} ${this.OZ}` : "--" }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { BASE_URL, OZ, WEIGHT } from "../constants";

export default {
  name: "FruitItem",
  data() {
    return {
      BASE_URL,
      OZ,
      WEIGHT
    };
  },
  props: {
    image: String,
    name: String,
    weight: Number
  }
};
</script>

<style scoped>
.fruit-name {
  text-transform: capitalize;
}
</style>
