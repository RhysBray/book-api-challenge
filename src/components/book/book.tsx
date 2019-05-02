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
        <h2>{this.props.book.volumeInfo.title}</h2>
        <h3>{this.props.book.volumeInfo.subtitle}</h3>
        <div className={styles["main-container"]}>
          <img
            className={styles.image}
            src={this.props.book.volumeInfo.imageLinks.smallThumbnail}
            alt={"image here"}
          />
          <p className={styles.description}>
            {this.props.book.volumeInfo.description}
          </p>
        </div>
        <p>{this.props.book.volumeInfo.authors}</p>
        <p>{this.props.book.volumeInfo.categories}</p>
        <p className={styles["page-number"]}>
          {this.props.book.volumeInfo.pageCount + " pages"}
        </p>
      </article>
    );
  }
}

export default Book;
