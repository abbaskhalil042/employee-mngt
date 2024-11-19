const Header = () => {
  return (
    <div className=" flex items-end justify-between p-2">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold"> Abbas👋🏻</span>
      </h1>
      <button className="rounded-md py-2 px-4 bg-red-500 text-lg font-medium">
        Log out
      </button>
    </div>
  );
};

export default Header;
