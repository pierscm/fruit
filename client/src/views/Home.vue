<template>
  <div>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mt-10">
          {{ APP_TITLE }}
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
import { APP_TITLE } from "../constants";

export default {
  name: "Home",
  data() {
    return {
      APP_TITLE
    };
  },
  components: {
    FruitList,
    TheSearchbar
  }
};
</script>
