import * as React from "react";
import styles from "./seven.module.scss";

export interface IProps {}

export interface IState {}

class Seven extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles["seven-box"]}>
        <h1 className={styles.seven}>7</h1>
      </div>
    );
  }
}

export default Seven;
