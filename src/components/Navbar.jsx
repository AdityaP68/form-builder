function Navbar() {
  return (
    <header className="h-30 w-full bg-black text-white px-6 py-5 flex items-center relative">
      <div className="flex items-center space-x-3">
        <img
          src="/public/images/logo.png"
          className="w-9 h-9 border border-white rounded-lg"
        />
        <h1>Turing+</h1>
      </div>
      <div className="bg-white  h-8 rounded-lg mx-auto flex items-center p-1 space-x-1 text-xs">
        <button className="h-6 w-20 rounded-md bg-black ">build</button>
        <button className="h-6 w-20 rounded-md bg-gray-100 text-black">preview</button>
      </div>
    </header>
  );
}

export default Navbar;
