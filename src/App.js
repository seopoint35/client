import Login from "./Components/Login/Login";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreatePostPage from "./AdminComponents/CreatePost/CreatePostPage";
import MainConatiner from "./AdminComponents/AdminContainer/MainConatiner";
import Private from './PrivateRoutes/Private';
import UnPrivate from './PrivateRoutes/UnPrivate';
import PageNotFount from "./Components/PageNotFount/PageNotFount";


function App() {
  return (
    <>
      <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={Home} />
        <UnPrivate exact path="/Login" component={Login} />
        <Route exact path="/admin-dashboard" component={MainConatiner} />
        <Private exact path="/admin-dashboard/create-post" component={CreatePostPage} />
        <Route component={PageNotFount} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
