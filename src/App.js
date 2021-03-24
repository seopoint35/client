import Login from "./Components/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreatePostPage from "./AdminComponents/CreatePost/CreatePostPage";
import MainConatiner from "./AdminComponents/AdminContainer/MainConatiner";

function App () {
  return (
     <>
     <BrowserRouter>
     <Route exact  path="/" component={Home} />
     <Route exact  path="/Login" component={Login} />
     <Route exact  path="/admin-dashboard" component={MainConatiner} />
     <Route exact  path="/admin-dashboard/create-post" component={CreatePostPage} />
     </BrowserRouter>
  
     </>
  );
}

export default App;
