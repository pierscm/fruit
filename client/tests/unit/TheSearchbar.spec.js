import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import TheSearchbar from "@/components/TheSearchbar.vue";

describe("TheSearchbar.vue", () => {
  it("renders a search field", () => {
    const wrapper = shallowMount(TheSearchbar, {});
    expect(wrapper.html()).to.contain(`data-test="search-field"`);
  });

  it("renders a submit button", () => {
    const wrapper = shallowMount(TheSearchbar, {});
    expect(wrapper.html()).to.contain(`data-test="fruit-search-button"`);
  });
});
