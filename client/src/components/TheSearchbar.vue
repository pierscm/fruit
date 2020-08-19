<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="8" class="mx-auto">
        <v-form v-model="validForm" data-test="fruit-form">
          <v-text-field
            data-test="search-field"
            v-model.trim="fruitName"
            :rules="fruitNameRules"
            hint="Fruit Name"
            class="my-6"
            type="string"
          />
          <v-btn
            data-test="fruit-search-button"
            rounded
            color="primary"
            dark
            @click.prevent="searchFruit"
            type="submit"
          >
            {{ FIND_FRUIT }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { FIND_FRUIT } from "../constants";

export default {
  name: "TheSearchbar",
  data() {
    return {
      FIND_FRUIT,
      fruitName: "",
      fruitNameRules: [
        v => /^[a-zA-Z0-9 ]+$/.test(v) || "Enter a valid fruit to search for."
      ],
      validForm: false
    };
  },
  methods: {
    ...mapActions(["getFruit"]),
    searchFruit() {
      if (this.fruitName) {
        this.getFruit(this.fruitName);
      }
    }
  }
};
</script>
