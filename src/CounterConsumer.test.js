import React from "react";
import ReactDOM from "react-dom";
import toJSON from "enzyme-to-json";
import { mount } from "enzyme";
import "./enzymeSetup";
import CounterConsumer from "./CounterConsumer";

it("accepts an initial value", () => {
  const wrapper = mount(<CounterConsumer initial={1999} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("increments counter", () => {
  const wrapper = mount(<CounterConsumer />);
  wrapper
    .find("button")
    .at(0)
    .simulate("click");

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("decrements counter", () => {
  const wrapper = mount(<CounterConsumer />);
  wrapper
    .find("button")
    .at(1)
    .simulate("click");

  expect(toJSON(wrapper)).toMatchSnapshot();
});
