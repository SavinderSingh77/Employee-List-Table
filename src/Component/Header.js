import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className=" w-full flex justify-between items-center gap-6 px-2 flex-wrap md:flex-nowrap">
      <SearchBar />
    </div>
  );
};

export default Header;
