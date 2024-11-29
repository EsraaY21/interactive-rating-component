import MainCard from "./components/MainCard";
import ThankYouCard from "./components/ThankYouCard";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

function App() {
  const { submitted } = useContext(AppContext);

  return <>{submitted === false ? <MainCard /> : <ThankYouCard />}</>;
}

export default App;
