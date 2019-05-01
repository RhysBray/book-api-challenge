import * as React from "react";
import styles from "./bookContainer.module.scss";
import Book from "../../components/book/book";
import { connect } from "react-redux";
import { IBook } from "../../reducers/bookReducer";
import { IStore } from "../../reducers";
import { fetchBooks } from "../../reducers/bookReducer";

export interface IOwnProps {}

export interface IStateProps {
  books: IBook[];
  fetchBooks: (authorName: string) => void;
}

export interface IState {}

class BookContainer extends React.Component<IOwnProps & IStateProps, IState> {
  // public book: IBook = {
  //   title: "The Book of books",
  //   author: "Mr B Writer",
  //   description: "So many words, this is definitely a book",
  //   pages: 1001.1
  // };

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
