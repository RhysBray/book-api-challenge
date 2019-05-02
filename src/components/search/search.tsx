import * as React from "react";
import styles from "./search.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { fetchBooks } from "../../reducers/bookReducer";

export interface IOwnProps {}

export interface IStateProps {
  fetchBooks: (author: string) => void;
}

export interface IState {}

class Search extends React.Component<IOwnProps & IStateProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section>
        <select
          className={styles.author}
          onChange={event => this.props.fetchBooks(event.target.value)}
        >
          {/* onChange={event => this.props.fetchBooks(event.target.value)} */}
          <option value="a">Select an Author</option>
          <option value="jane austen">Jane Austen</option>
          <option value="isaac asimov">Isaac Asimov</option>
          <option value="dan brown">Dan Brown</option>
        </select>
        <input
          className={styles.search}
          type="search"
          placeholder="Search books here..."
        />
      </section>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {};
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
