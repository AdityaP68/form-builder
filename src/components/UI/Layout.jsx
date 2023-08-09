import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-200">
      <header className="h-30 w-full bg-black text-white px-6 py-5 flex items-center space-x-3">
        <img src="/public/images/logo.png" className="w-9 h-9 border border-white rounded-lg" />

        <h1>Turing+</h1>
      </header>
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
