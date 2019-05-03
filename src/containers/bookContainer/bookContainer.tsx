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
  author: string;
}

export interface IState {
  // books: IBook[];
}

class BookContainer extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { books: [] };
  public componentDidMount = () => {
    this.props.fetchBooks(this.props.author);
  };
  // public componentDidUpdate = () => {
  //   this.props.fetchBooks(this.props.author);
  // console.log(this.props.author);
  // };
  public render() {
    return (
      <>
        {/* <input type="text" onChange={this.filterBooks} /> */}
        <div className={styles["book-container"]}>
          {this.props.books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </>
    );
  }
  // private filterBooks = (event: any) => {
  //   let filterBooks: IBook[] = [];
  //   filterBooks = this.props.books.filter(book =>
  //     book.volumeInfo.description.includes(event.target.value)
  //   );
  //   console.log(filterBooks);
  // };
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return { books: state.books.books, author: state.books.author };
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
