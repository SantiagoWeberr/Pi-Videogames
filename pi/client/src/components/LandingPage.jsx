import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"
export default function LandingPage() {
  return (
    <div className={styles.bkg}>
      <Link to = "/home">
      <button className={styles.button} >Start</button>
      </Link>
    </div>
  );
}
