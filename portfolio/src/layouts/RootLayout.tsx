import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.spacer} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
