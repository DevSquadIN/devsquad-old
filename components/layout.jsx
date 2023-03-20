import Navbar from "./navbar";

const Layout = ({ children, home }) => {
  return (
    <div className={`h-full ${home && "bg-gray-100"}  px-4 sm:px-6`}>
      {home ? <Navbar home /> : <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
