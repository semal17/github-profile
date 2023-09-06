"use client";

import { Header, Search } from "components";
import { useState } from "react";

const BASE_URL = "https://api.github.com/users/semal17";

export default function Home() {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    const url = BASE_URL;

    const res = await fetch(url);
    const user = await res.json();

    setUser(user);
  };

  console.log("semal17", user);
  return (
    <main className="mt-10 bg-black">
      <Header />
      <Search hasError onSubmit={() => console.log("subbmit")} />
      <div className="h-10 w-10 bg-slate-600" onClick={fetchUser}>
        клик
      </div>
    </main>
  );
}
