import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App () {
  return (
     <>
     <BrowserRouter>
     <Route exact  path="/Login" component={Login} />
     </BrowserRouter>
  
     </>
  );
}

export default App;
