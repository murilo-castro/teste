"use client";

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import MenuButtons from "./MenuButtons";

export default function Navbar() {
  return (
    <div className="fixed w-full z-10  bg-white ">
      <div className=" py-4 ">
        <Container>
          <div
            className="
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <MenuButtons />
          </div>
        </Container>
      </div>
      {/* <Categories /> */}
    </div>
  );
}
