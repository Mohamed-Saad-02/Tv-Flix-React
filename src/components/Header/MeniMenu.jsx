import { useState } from "react";
import Icon from "../../ui/Icon";
import Input from "../../ui/Input";
import { useMovie } from "../../context/moviContext";

export default function MeniMenu() {
  const { isActiveList, searchQuery, dispatch } = useMovie();
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const handleChange = (e) => {
    dispatch({ type: "changeSearchQuery", payload: e.target.value });
  };

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input value={searchQuery} onChange={handleChange} />
          <span className="absolute top-3 left-2 hidden md:flex pointer-events-none">
            <Icon kind="search" type="second" />
          </span>
        </div>
        {isActiveSearch && (
          <div className="absolute left-[10px] w-[80%]">
            <Input type="second" value={searchQuery} onChange={handleChange} />
            <span className="absolute top-3 left-2 flex md:hidden pointer-events-none">
              <Icon kind="search" type="second" />
            </span>
          </div>
        )}
        <span
          className={`${
            isActiveSearch ? "hidden" : "flex"
          } md:hidden cursor-pointer`}
        >
          <Icon kind="search" onClick={() => setIsActiveSearch(true)} />
        </span>

        {isActiveSearch ? (
          <span
            onClick={() => setIsActiveSearch(false)}
            className="cursor-pointer xl:hidden"
          >
            <Icon kind="close" />
          </span>
        ) : (
          <span
            onClick={() => dispatch({ type: "activeSidbar" })}
            className="cursor-pointer xl:hidden"
          >
            {isActiveList ? <Icon kind="menu_open" /> : <Icon kind="menu" />}
          </span>
        )}
      </div>
    </div>
  );
}
