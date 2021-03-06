import { shallowMount } from "@vue/test-utils";
import SfCallToAction from "./SfCallToAction.vue";

describe("SfCallToAction.vue", () => {
  // DOM Element render check
  it("renders a section", () => {
     const component = shallowMount(SfCallToAction);
     expect(component.contains("section")).toBe(true);
  });

  // default slot check
  it("renders default slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfCallToAction, {
      slots: {
        default: msg
      }
    });
    expect(component.find(".sf-call-to-action").text()).toMatch(msg);
  });

  // title message check from prop
  it("renders message prop on h1 when passed", () => {
    const msg = "H1Title";
    const component = shallowMount(SfCallToAction, {
      propsData: {
        message: msg
      }
    });
    const wrapper = component.find(".sf-call-to-action__message");
    expect(wrapper.text()).toMatch(msg);
    expect(wrapper.is('h1')).toBe(true);
  });

  // button text check from prop
  it("renders button text from prop when passed", () => {
    const msg = "ButtonText";
    const component = shallowMount(SfCallToAction, {
      propsData: {
        buttonText: msg
      }
    });
    const wrapper = component.find(".sf-call-to-action__button");
    expect(wrapper.text()).toMatch(msg);
  });
});
