const style = {
  primary:
    "hidden md:flex md:w-[280px] lg:w-[360px] pl-11 py-2.5 rounded-md bg-[#313036] placeholder:text-zinc-500 text-lg focus:outline-white text-white transition-all duration-150 hover:outline hover:outline-zinc-400 hover:outline-1",
  second:
    "flex md:hidden w-[80%] sm:w-[100%] pl-11 py-2.5 rounded-md bg-[#313036] placeholder:text-zinc-500 text-lg focus:outline-white text-white transition-all duration-150 hover:outline hover:outline-zinc-400 hover:outline-1",
};

export default function Input({ type = "primary", onChange, value }) {
  return (
    <input
      className={style[type]}
      type="text"
      placeholder="Search any movie..."
      value={value}
      onChange={onChange}
    />
  );
}
