import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import BookContainer from "./containers/bookContainer/bookContainer";
import Seven from "./components/seven/seven";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="search-box">
            <input type="search" placeholder="Search books here..." />
          </div>
          <div className="book-box">
            <BookContainer />
            <Seven />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
