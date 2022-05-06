import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/flexWrapper.css";
import "../styles/navbar.css";
import "../styles/navlist.css";
import "../styles/navitem.css";
import "../styles/Home/home.css";
import "../styles/Contact/contact.css";
import "../styles/AboutUs/aboutUs.css";
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

        <meta
          name="facebook-domain-verification"
          content="ovu285fcwwo9zhobehpogko39i19is"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2852894871678075');
        fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2852894871678075&ev=PageView&noscript=1"
        />`,
          }}
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
