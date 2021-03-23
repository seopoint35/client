import Login from "./Components/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App () {
  return (
     <>
     <BrowserRouter>
     <Route exact  path="/" component={Home} />
     <Route exact  path="/Login" component={Login} />
     </BrowserRouter>
  
     </>
  );
}

export default App;
