import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="bg-teal-50 pt-10">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
