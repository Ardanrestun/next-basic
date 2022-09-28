import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.container}>
        <ul className={styles.listh}>
          <li>
            <p className={styles.h3}>NextJS Basic</p>
          </li>
          <li>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.item}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={styles.item}>
                <Link href="/users">User</Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </div>
  );
}
