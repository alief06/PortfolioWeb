import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-grid p-6 pl-64">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
