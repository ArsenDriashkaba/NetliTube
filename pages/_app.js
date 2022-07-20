import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
