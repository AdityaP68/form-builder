import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-200">
      <Navbar/>
      <div className="flex h-full overflow-y-hidden">
        <Sidebar/>
        <main className="flex-1 overflow-y-auto p-5 flex flex-col space-y-5 items-center">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
