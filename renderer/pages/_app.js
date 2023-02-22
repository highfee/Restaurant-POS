import "../styles/global.css";
import Layout from "./Layout";

import { Provider } from "react-redux";
import { store } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  );
};

export default MyApp;
