import Trending from "./components/Trending";
import Navbar from "./components/nav/Navbar";
import { Provider } from "react-redux";
import store from "./store/index.js";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        {/*ROUTES ARE RENDERED INSIDE TRENDING COMPONENT*/}
        <Trending />
      </div>
    </Provider>
  );
};

export default App;
