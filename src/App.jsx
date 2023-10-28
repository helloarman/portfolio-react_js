import "./App.css";
import { FaApple } from "react-icons/fa6"; // React Icons
import { WebRoutes } from "./WebRoutes";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <WebRoutes />
    </>
  );
}

export default App;
