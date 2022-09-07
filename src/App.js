import Hompage from "./pages/homepage/hompage";
import { Route, Routes } from "react-router-dom";
import Stake from "./pages/stake/stake";
import Mint from "./pages/mint/mint";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Hompage />} />
        <Route path="/mint" exact element={<Mint />} />
        <Route path="/stake" exact element={<Stake />} />
        <Route path="/gadmin" exact element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
