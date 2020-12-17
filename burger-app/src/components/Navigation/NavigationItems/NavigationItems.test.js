import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import React from "react";
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("navigation items", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render 2 navigation item elements if not auth", () => {
    expect(wrapper.find("li")).toHaveLength(2);
  });
  it("should render 3 navigation item elements if not auth", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it("should contain logout if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.contains(<li className="NavigationItem"><NavLink to="/logout" >Logout</NavLink></li>)).toEqual(true);
  });
});
