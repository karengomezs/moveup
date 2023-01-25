import styles from "./styles.module.scss";

export default function Avatar(props) {
  return (
    <span className={styles.container}>
      {props.nameProp.at(0).toUpperCase()}
      {props.lastNameProp.at(0).toUpperCase()}
    </span>
  );
}
