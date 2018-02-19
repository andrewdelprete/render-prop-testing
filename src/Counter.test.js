import React from "react";
import ReactDOM from "react-dom";
import toJSON from "enzyme-to-json";
import { mount } from "enzyme";
import "./enzymeSetup";
import Counter from "./Counter";

it("Calls the Render Prop function", () => {
  let renderFn = jest.fn().mockReturnValue(null);
  const wrapper = mount(<Counter>{renderFn}</Counter>);

  expect(renderFn.mock.calls.length).toBe(1);
  expect(wrapper.state("counter")).toBe(0);
});

it("Accepts an initial value", () => {
  let renderFn = jest.fn().mockReturnValue(null);
  const wrapper = mount(<Counter initial={2012}>{renderFn}</Counter>);

  expect(wrapper.state("counter")).toBe(2012);
});

it("Increments", () => {
  let renderFn = jest.fn().mockReturnValue(null);
  const wrapper = mount(<Counter>{renderFn}</Counter>);

  wrapper.instance().increment();

  expect(wrapper.state("counter")).toBe(1);
});

it("Decrements", () => {
  let renderFn = jest.fn().mockReturnValue(null);
  const wrapper = mount(<Counter>{renderFn}</Counter>);

  wrapper.instance().decrement();

  expect(wrapper.state("counter")).toBe(-1);
});
