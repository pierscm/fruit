<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-if="!fruitNotFound" class="mb-4">
        <div v-for="fruit in fruitList" class="mb-5" :key="fruit._id">
          <FruitItem
            :name="fruit.name"
            :weight="fruit.weight"
            :image="fruit.image"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col v-if="fruitNotFound" class="mb-4">
        {{ NO_MATCHING_FRUIT }}
      </v-col>
      <v-col v-if="fruitListError" class="mb-4">
        {{ GENERIC_ERROR_MESSAGE }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FruitItem from "../components/FruitItem";
import { mapGetters } from "vuex";
import { NO_MATCHING_FRUIT, GENERIC_ERROR_MESSAGE } from "../constants";

export default {
  name: "Fruit",
  data() {
    return {
      NO_MATCHING_FRUIT,
      GENERIC_ERROR_MESSAGE
    };
  },
  components: {
    FruitItem
  },
  computed: {
    ...mapGetters(["fruitList", "fruitNotFound", "fruitListError"])
  }
};
</script>
