import Hompage from "./pages/homepage/hompage";
import { Route, Routes } from "react-router-dom";
import Stake from "./pages/stake/stake";
import Mint from "./pages/mint/mint";
import Admin from "./pages/admin/admin";
import PrivateRoutes from "./helpers/privateRoute";
import Verify from "./pages/verify/verify";
import AdminRoute from "./helpers/adminRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Hompage />} />
        <Route path="/verify/:id" exact element={<Verify />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/mint" exact element={<Mint />} />
          <Route path="/stake" exact element={<Stake />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/gadmin" exact element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
