import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import FruitItem from "@/components/FruitItem.vue";

describe("FruitItem.vue", () => {
  it("renders the fruit name, image and weight", () => {
    const wrapper = shallowMount(FruitItem, {
      propsData: {
        image: "/kiwi.jpg",
        name: "Kiwi",
        weight: 12.3
      }
    });
    expect(wrapper.text()).to.contain("Kiwi");
    expect(wrapper.html()).to.contain("/images/kiwi.jpg");
    expect(wrapper.text()).to.contain("12.3 oz");
  });
});
