import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import BookContainer from "./containers/bookContainer/bookContainer";
// import Seven from "./components/seven/seven";
import Search from ".//components/search/search";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <section className="search-box">
            <Search />
          </section>
          <section className="book-box">
            <BookContainer />
            {/* <Seven /> */}
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
