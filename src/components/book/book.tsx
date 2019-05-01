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
        <p>{this.props.book.volumeInfo.title}</p>
        <p>{this.props.book.volumeInfo.subtitle}</p>
        <p>{this.props.book.volumeInfo.authors}</p>
        <p>{this.props.book.volumeInfo.categories}</p>
        <p>{this.props.book.volumeInfo.pageCount}</p>
      </article>
    );
  }
}

export default Book;
