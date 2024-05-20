const style = {
  primary:
    "bg-[#201f1e] px-4 text-lg py-3 flex items-center text-white rounded-md transition-all duration-200 hover:text-zinc-500",
  second: "flex items-center justify-center",
};

export default function Icon({ kind, type = "primary", onClick }) {
  return (
    <span className={style[type]} onClick={onClick}>
      <span className="material-symbols-outlined">{kind}</span>
    </span>
  );
}
