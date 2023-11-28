import Dashboard from "./views/dashboard";
import Cadastro from "./views/cadastro";
import { BrowserRouter,Routes,Route} from "react-router-dom";

const Paths = () => {
  return (
    <BrowserRouter >
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;