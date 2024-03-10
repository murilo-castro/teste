"use client";

import Nav from "./nav";
import Title from "./title";
import NavButton from "./navButton";
import SearchForm from "../searchForm/searchForm";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="flex flex-col justify-between mx-auto">
      <div className=" flex flex-wrap items-center justify-between p-4 mb-5">
        <Title />
        <NavButton />
        <Nav />
      </div>
      {/* {pathname === "/pgErro" && <SearchForm />} */}
    </header>
  );
};

export default Header;
