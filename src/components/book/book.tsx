import * as React from "react";
import styles from "./book.module.scss";
import { IBook } from "../../reducers/bookReducer";

export interface IProps {
  book: IBook;
}

export interface IState {}

class Book extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <article className={styles.book}>
        <p>{this.props.book.title}</p>
        <p>{this.props.book.author}</p>
        <p>{this.props.book.description}</p>
        <p>{this.props.book.pages}</p>
      </article>
    );
  }
}

export default Book;
