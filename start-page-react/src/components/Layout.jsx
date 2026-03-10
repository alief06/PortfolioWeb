import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-grid-soft p-6 pl-64 overflow-hidden">
      
      {/* AI Ambient Animated Background */}
      <div className="ai-ambient"></div>

      <Sidebar />
      
      <main className="relative z-10">
        {children}
      </main>
      
    </div>
  );
};

export default Layout;