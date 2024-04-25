import Footer from "../../../components/shared/Footer";

const Dashboardlayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Dashboardlayout;
