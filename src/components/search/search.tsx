import * as React from "react";

export interface IProps {}

export interface IState {}

class Search extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return <input type="search" placeholder="Search books here..." />;
  }
}

export default Search;
