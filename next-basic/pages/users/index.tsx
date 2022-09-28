import React from "react";
import Layout from "../../components/layout";
import Styles from "../../styles/Users.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface User {
  users: Array<any>;
  id: number;
  image: string;
  maidenName: string;
  email: string;
  address: {
    city: string;
    state: string;
  };
  department: string;
}

interface userProps {
  dataUser: User;
}

export default function index(props: userProps) {
  const { dataUser } = props;
  const router = useRouter();
  console.log({ dataUser });
  return (
    <Layout title="User Page">
      {dataUser.users.map((user) => {
        return (
          <div
            onClick={() => router.push(`/users/${user.id}`)}
            key={user.id}
            className={Styles.column}>
            <div className={Styles.card}>
              <img
                src={user.image}
                alt={user.maidenName}
                className={Styles.img}
              />
              <p className={Styles.a}>{user.maidenName}</p>
              <p className={Styles.b}>{user.company.department}</p>
              <p>{user.company.name}</p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/users");
  const dataUser = await res.json();
  return {
    props: {
      dataUser: dataUser,
    },
  };
}
