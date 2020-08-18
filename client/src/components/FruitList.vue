<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <FruitItem />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FruitItem from "../components/FruitItem";

export default {
  name: "Fruit",

  data: () => ({}),
  components: {
    FruitItem
  }
};
</script>
