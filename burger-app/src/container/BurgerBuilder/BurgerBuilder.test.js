import { BurgerBuilder } from "./BurgerBuilder";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() });

describe("Testing the burger builder container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngre={() => {}} />);
  });
  it("should render build controls when having ingr ", () => {
    wrapper.setProps({ ings: { salad: 1 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
