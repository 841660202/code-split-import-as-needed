import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from "./kind_of_router/basic";
import ParamsExample from "./kind_of_router/url_router";
import AuthExample from "./kind_of_router/auth";
import CustomLinkExample from "./kind_of_router/customLinkExample";
import PreventingTransitionsExample from "./kind_of_router/PreventingTransitionsExample";
import NoMatchExample from "./kind_of_router/noMatchExample";
import SidebarExample from "./kind_of_router/SidebarExample";
import AnimationExample from "./kind_of_router/animationExample";
import AmbiguousExample from "./kind_of_router/AmbiguousExample";
import RouteConfigExample from "./kind_of_router/RouteConfigExample";
import ModalGallery from "./kind_of_router/ModalGallery";

class App extends Component {
  render() {
    return (
      <div>
          <ModalGallery />
      </div>
    );
  }
}

export default App;
