import { memo, useState } from "react";
import Logo from "./Logo";
import MeniMenu from "./MeniMenu";

function Header() {
  const [isActiveList, setIsActiveList] = useState();

  return (
    <header className="flex items-center justify-between px-4 py-6 xl:py-7 xl:px-14 relative">
      <Logo />
      <MeniMenu isActiveList={isActiveList} setIsActiveList={setIsActiveList} />
    </header>
  );
}

export default memo(Header);
