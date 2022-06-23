import { mount } from "@vue/test-utils";
import ListFigure from "@/components/ListFigure.vue";

describe("Figure.vue", () => {
  it("Figure list shoud be empty", () => {
    const wrapper = mount(ListFigure);
    expect(wrapper.findAll('[data-test="figure-list"]')).toHaveLength(0);
  });

  it("Should add new figure", () => {
    const wrapper = mount(ListFigure);
    expect(wrapper.findAll('[data-test="figure-list"]')).toHaveLength(0);
  });

  test("increments counter value on click", async () => {
    const wrapper = mount(ListFigure);
    const button = wrapper.find(".btn-sie");
    const showModal = jest.fn();

    wrapper.setMethods({ showModal: showModal });

    expect(wrapper.findAll('[data-test="figure-list"]')).toHaveLength(0);

    await button.trigger("click");
  });
});
