function Sidebar() {
  return (
    <aside className="w-3/12 bg-white flex">
      <div className="border border-gray-200 px-4 py-8 h-full flex flex-col space-y-8 items-center">
        <div className="h-10 w-10 bg-gray-300 rounded-md p-1"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-md p-1"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-md p-1"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-md p-1"></div>
      </div>
      <div className="w-full py-8 px-6 flex flex-col space-y-5">
        <div className="w-full h-10 rounded-md bg-gray-300"></div>
        <div className="w-full h-10 rounded-md bg-gray-300"></div>
        <div className="w-full h-10 rounded-md bg-gray-300"></div>
      </div>
    </aside>
  );
}

export default Sidebar;
