import * as React from "react";
import styles from "./bookContainer.module.scss";
import Book from "../../components/book/book";
import { connect } from "react-redux";
import { IBook } from "../../reducers/bookReducer";
import { IStore } from "../../reducers";
import { fetchBooks } from "../../reducers/bookReducer";

export interface IProps {}

export interface IStateProps {}

export interface IState {}

class BookContainer extends React.Component<IProps, IState> {
  public book: IBook = {
    title: "The Book of books",
    author: "Mr B Writer",
    description: "So many words, this is definitely a book",
    pages: 1001.1
  };
  // state = { :  }
  public render() {
    return (
      <div className={styles["book-container"]}>
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
        <Book book={this.book} />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IProps) => {
  return {};
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
