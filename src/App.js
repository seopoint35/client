import Login from "./Components/Login/Login";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreatePostPage from "./AdminComponents/CreatePost/CreatePostPage";
import MainConatiner from "./AdminComponents/AdminContainer/MainConatiner";
import Private from './PrivateRoutes/Private';
import UnPrivate from './PrivateRoutes/UnPrivate';


function App() {
  return (
    <>
      <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Home} />
        <UnPrivate exact path="/Login" component={Login} />
        <Private exact path="/admin-dashboard" component={MainConatiner} />
        <Route exact path="/admin-dashboard/create-post" component={CreatePostPage} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
