const Navbar = () => {
  return (
    <nav className="h-screen bg-[#202225] flex flex-col items-center gap-4 py-3 w-[72px]">
      <a href="#" className="block w-12 h-12 rounded-full bg-[#36393f] "></a>
      <hr className="block w-8 h-[2px] bg-[#36393f] rounded-full border-none" />

      <a
        href="#"
        className="block w-12 h-12 rounded-full bg-[#36393f] transition-[border-radius] duration-150 ease-out hover:rounded-lg "
      ></a>
      <a
        href="#"
        className="block w-12 h-12 rounded-full bg-[#36393f] transition-[border-radius] duration-150 ease-out hover:rounded-lg "
      ></a>
    </nav>
  );
};

export default Navbar;
