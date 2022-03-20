import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";
import "../styles/flexWrapper.css";
import "../styles/navbar.css";
import "../styles/navlist.css";
import "../styles/navitem.css";
import "../styles/Home/home.css";
import "../styles/Contact/contact.css"
import "../styles/AboutUs/aboutUs.css"
import "../styles/footer.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Iteration</title>
        <meta name="description" content="Iterate your way to success" />
        <link rel="icon" href="/logos/browser-logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
