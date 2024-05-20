const style = {
  primary:
    "bg-[#db0028] px-6 py-2 text-white rounded-md transition-all duration-200 hover:text-zinc-500",
  second:
    "bg-[#201f1e] px-8 text-lg py-2.5 text-white rounded-md transition-all duration-200 hover:text-zinc-500",
  three: "",
  four: "bg-[#db0028] px-2 py-1 text-white rounded-md transition-all duration-200 hover:text-zinc-500",
};

export default function Button({ children, onClick, type = "primary" }) {
  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
}
