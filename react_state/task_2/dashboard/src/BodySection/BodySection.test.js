import { shallow, mount } from "enzyme";
import React from "react";
import BodySection from "./BodySection";

describe("<BodySection />", () => {
  it("BodySection renders without crashing", () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("BodySection renders without crashing", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    const h2 = wrapper.find("h2");
    const p = wrapper.find("p");

    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("test title");
  });
});