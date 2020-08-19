import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import FruitList from "@/components/FruitList.vue";
import Vuex from "vuex";
import { GENERIC_ERROR_MESSAGE, NO_MATCHING_FRUIT } from "../../src/constants";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("FruitList.vue", () => {
  describe("Happy Path", () => {
    let store;
    let getters;

    beforeEach(() => {
      let fruitList = [
        {
          image: "/pear.jpg",
          name: "Pear",
          weight: 2.2
        },
        {
          image: "/orange.jpg",
          name: "Orange",
          weight: 4.5
        }
      ];
      getters = {
        fruitList: () => fruitList,
        fruitNotFound: () => false,
        fruitListError: () => false
      };
      store = new Vuex.Store({
        getters
      });
    });
    it("renders multiple fruit", () => {
      const wrapper = shallowMount(FruitList, { store, localVue });
      const items = wrapper.findAll({ name: "FruitItem" });
      expect(items.length).to.equal(2);
    });
  });

  describe("Sad Path", () => {
    let store;
    let getters;

    beforeEach(() => {
      getters = {
        fruitList: () => [],
        fruitNotFound: () => false,
        fruitListError: () => true
      };
      store = new Vuex.Store({
        getters
      });
    });

    it("renders an error when input is invalid", () => {
      const wrapper = shallowMount(FruitList, { store, localVue });
      const items = wrapper.findAll({ name: "FruitItem" });
      expect(items.length).to.equal(0);
      expect(wrapper.text()).to.contain(GENERIC_ERROR_MESSAGE);
    });
  });

  describe("No Fruit", () => {
    let store;
    let getters;

    beforeEach(() => {
      getters = {
        fruitList: () => [],
        fruitNotFound: () => true,
        fruitListError: () => false
      };
      store = new Vuex.Store({
        getters
      });
    });

    it("renders a message when no matching fruit are found", () => {
      const wrapper = shallowMount(FruitList, { store, localVue });
      const items = wrapper.findAll({ name: "FruitItem" });
      expect(items.length).to.equal(0);
      expect(wrapper.text()).to.contain(NO_MATCHING_FRUIT);
    });
  });
});
