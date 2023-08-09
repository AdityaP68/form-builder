function Navbar() {
  return (
    <header className="h-30 w-full bg-black text-white px-6 py-5 flex">
      <div className="flex items-center space-x-3">
        <img
          src="/public/images/logo.png"
          className="w-9 h-9 border border-white rounded-lg"
        />
        <h1>Turing+</h1>
      </div>
      
    </header>
  );
}

export default Navbar;
