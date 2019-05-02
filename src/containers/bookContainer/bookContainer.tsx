import * as React from "react";
import styles from "./bookContainer.module.scss";
import Book from "../../components/book/book";
import { connect } from "react-redux";
import { IBook, fetchBooks } from "../../reducers/bookReducer";
import { IStore } from "../../reducers";

export interface IOwnProps {}

export interface IStateProps {
  books: IBook[];
  fetchBooks: (authorName: string) => void;
}

export interface IState {}

class BookContainer extends React.Component<IOwnProps & IStateProps, IState> {
  public author = "jane";

  public componentDidMount = () => {
    this.props.fetchBooks(this.author);
  };
  // state = { :  }
  public render() {
    return (
      <div className={styles["book-container"]}>
        {this.props.books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return { books: state.books.books };
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);