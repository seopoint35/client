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
import B2BRegistrationPage from "./B2BComponents/B2BRegistraion/B2BRegistrationPage";
import B2BHOME from "./B2BComponents/B2BHome/B2BHOME";
import SingUp from "./Components/SingUp/SingUp";
 
function App() {
  return ( 
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/b2b/B2B-all-Posts" component={B2BHOME} />
          <UnPrivate exact path="/Login" component={Login} />
          <UnPrivate exact path="/sing-up" component={SingUp} />
          <Route exact path="/post-comments/:PostId" component={Comments} />

          {/* B2B Routes start */}
          <Private exact path="/user-dashboard/B2B-Registration" component={B2BRegistrationPage} />
         
          {/* B2B Routes End */}

          {/* Admin Routes */}
          <UnPrivateAdmin exact path="/admin-Login" roles={['admin']} component={AdminLogin} />
          <AdminPrivate exact path="/admin" roles={['admin', 'super-admin']} component={AdminDashBoard} />
          <AdminPrivate exact path="/admin-dashboard" roles={['admin', 'super-admin']} component={MainConatiner} />
          <AdminPrivate exact path="/admin-dashboard/create-post" roles={['admin']} component={CreatePostPage} />
          <AdminPrivate exact path="/admin-dashboard/my-posts"  roles={['admin']} component={MyPostPage} />
          <AdminPrivate exact path="/admin-dashboard/my-posts/:PostId"  roles={['admin']} component={MyPostEditPage} />

          {/* super Admin Routes */}
          <UnPrivateAdmin exact path="/super-admin-Login" roles={['super-admin']} component={SuperAdminLogin} />
          <AdminPrivate exact path="/super-admin" roles={['super-admin']} component={SuperDashBoard} />
          {/* page Note found */}
          <Route component={PageNotFount} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
