import Image from "next/image";
import AuthForm from "../_components/auth-form";

import styles from "./register.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={170}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </Link>
      <div className={styles.wrapper}>
        <AuthForm />
      </div>
    </div>
  );
}
