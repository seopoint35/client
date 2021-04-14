import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreatePostPage from "./AdminComponents/CreatePost/CreatePostPage";
import MainConatiner from "./AdminComponents/AdminContainer/MainConatiner";
import Private from './PrivateRoutes/Private';
import UnPrivate from './PrivateRoutes/UnPrivate';
import PageNotFount from "./Components/PageNotFount/PageNotFount";
import Comments from "./Components/Comments/Comments";
import MyPostPage from "./AdminComponents/MyPosts/MyPostPage";
import MyPostEditPage from "./AdminComponents/MyPostEdit/MyPostEditPage";
import AdminLogin from "./AdminComponents/Login/AdminLogin";
import SuperAdminLogin from './SuperAdminComponents/SUperAdminLogin/SuperAdminLogin'
import SuperDashBoard from "./SuperAdminComponents/SuperDashBoard/SuperDashBoard";
import AdminDashBoard from "./AdminComponents/AdminDashBoard/AdminDashBoard";
import AdminPrivate from './PrivateRoutes/AdminPrivate';
import UnPrivateAdmin from './PrivateRoutes/UnPrivateAdmin'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <UnPrivate exact path="/Login" component={Login} />
          <Route exact path="/admin-dashboard" component={MainConatiner} />
          <Private exact path="/admin-dashboard/create-post" component={CreatePostPage} />
          <Private exact path="/admin-dashboard/my-posts" component={MyPostPage} />
          <Private exact path="/admin-dashboard/my-posts/:PostId" component={MyPostEditPage} />
          <Route exact path="/post-comments/:PostId" component={Comments} />
          {/* Admin Routes */}
          <UnPrivateAdmin exact path="/admin-Login" roles={['admin']} component={AdminLogin} />
          <AdminPrivate exact path="/admin" roles={['admin', 'super-admin']} component={AdminDashBoard} />


         {/* super Admin Routes */}
         <UnPrivateAdmin exact path="/super-admin-Login" roles={['super-admin']}   component={SuperAdminLogin} />
         <AdminPrivate exact path="/super-admin" roles={['super-admin']}  component={SuperDashBoard} />
          {/* page Note found */}
          <Route component={PageNotFount} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
