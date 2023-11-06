import Navbars from "./nav";
import Create from "./create";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Alldata from "./alldata";
import './bank.css';


export default function Badbank() {
  return (
    <>
      <HashRouter>
        
          <Navbars />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
        {/* </userContext.Provider> */}
      </HashRouter>
    </>
  );
}