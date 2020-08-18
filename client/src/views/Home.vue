<template>
  <div>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mt-10">
          Fruit Search
        </h1>
      </v-col>
    </v-row>
    <TheSearchbar />
    <FruitList />
  </div>
</template>

<script>
import FruitList from "../components/FruitList";
import TheSearchbar from "../components/TheSearchbar";

export default {
  name: "Home",

  components: {
    FruitList,
    TheSearchbar
  }
};
</script>
