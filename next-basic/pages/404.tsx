import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-notfound">Ooops....</h1>
      <h1 className="title-notfound">Halaman yang anda cari tidak ditemukan</h1>
      <h2 className="title-notfound">Seperti Dia yang kamu cari tidak ada</h2>
    </div>
  );
}
