import "../styles/global.css";
import Layout from "./Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
};

export default MyApp;
