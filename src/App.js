// import React, { Component , useState , useMemo, useLayoutEffect} from "react";   
// import { HashRouter , Switch , Redirect } from 'react-router-dom';
// import Home from './components/website/Home';
// import Company from './components/website/Company';
// import User from './components/website/User';
// import Login from './components/website/Login';
// import Logout from './components/website/Logout';
// import Profile from './components/website/Profile'
// import ProfileEdit from './components/website/ProfileEdit'
// import SignUp from './components/website/SignUp'
// import TermsCondition from './components/website/TermsCondition'
// import UpgradeProVersion  from './components/website/UpgradeProVersion '
// import GoPremium from './components/website/GoPremium'
// import UploadFile from './components/website/UploadFile'
// import ViewJob from './components/website/ViewJob'
// import Imageview from './components/website/Imageview'
// import PaymentMethod from './components/website/PaymentMethod'
// import HiringDroners from './components/website/GetJobs';
// import ForgotPassword from './components/website/ForgotPassword';
// import EndUserProfile from './components/website/EndUserProfile';
// import HiringDorners from './components/website/HiringDorners';
// import BlogDetail from './components/website/BlogDetail';
// import BlogCategory from './components/website/BlogCategory';
// import Blog from './components/website/Blog';
// import NoPageFound from "./components/website/NoPageFound.js"; 
// import Services from './components/website/Services.js'
// import Header from '../src/components/header/Header' 
// import GetJobs from '../src/components/website/GetJobs'
// import Search from '../src/components/website/Search'
// import FooterBar from '../src/components/footer/FooterBar'
// import OfficeProfileEdit from '../src/components/website/OfficeProfileEdit'
// import Member from '../src/components/website/Member'
// import Industry from '../src/components/website/Industry' 
// // import Dashboard from '../src/components/website/Dashboard'
// import OfficeProfile from '../src/components/website/OfficeProfile'
// import SearchFilter from '../src/components/SearchFilter'
// import Cart from '../src/components/website/Cart'
// import './components/website/All.module.css' 
// // import Navbar from '../src/components/Navbar'
// import axios from 'axios'
// import { render } from "@testing-library/react"; 
// import { UserContext } from "../src/hooks/UserContext";
// import JobPostEdit from '../src/components/website/JobPostEdit'
// import PublicRoute from '../src/hooks/PublicRoute'
// import PrivateRoute from '../src/hooks/PrivateRoute'
// import searchresult from '../src/components/website/Searchresult'
// import PostEdit from '../src/components/website/PostEdit'
// import Razypay from '../src/components/website/Razypay'
// import JobAppliedDroners from '../src/components/website/JobAppliedDroners'
// // import Alert from "../src/components/alert/Alert.component";
// import { logout, isLogin ,login ,getRefreshToken } from '../src/middleware/auth'; 

 
//   function App(props) { 
//     const [user, setUsers] = useState(null); 
//     const value = useMemo(() => ({ user, setUsers }), [user, setUsers]); 

//     const [userState, setUser] = useState([]);
//     const [admin, setAdmin] = useState([]);
//     const [authState, setAuth] = useState(false);
//     const [checked_auth, setchecked_auth] = useState(false);
//     const [checked_auth_user, setchecked_auth_user] = useState(false);
    
  
//   useLayoutEffect(() => {
//     const token = localStorage.getItem('role_type');  
//     setAdmin(token);  
 
//     const config={
//       headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('access_token')
//       }
//     }
//     axios.get('http://localhost:1080/auth-app/public/api/auth/user', config) 
//     .then(res=>
//       {   
//         setAuth(true); 
//         setUser(res.data.role_id);   
//         if (token == res.data.role_id) { 
//           setchecked_auth(true);  
//         }else{
//           setchecked_auth_user(true); 
//         }
//       },
//       err => { 
//         setAuth(false); 
//       }) 
   
//   }, []);  
    
//     return( 
 
// <HashRouter>
// <UserContext.Provider value={value}> 
//   <Switch>
//     <PublicRoute restricted={true} path="/login" component={Login}exact />
//     <PublicRoute restricted={true} path='/User' component={User} exact/>
//     <PublicRoute restricted={true} path='/Company' component={Company} exact/>
//     <PublicRoute restricted={true} exact path='/ForgotPassword' component={ForgotPassword}/> 
//     <PublicRoute component={Home} path="/" exact /> 
//     <PrivateRoute exact path="/profile" component={Profile} /> 
//     <PrivateRoute exact path='/ProfileEdit' component={ProfileEdit} />
//     <PrivateRoute exact path='/Cart/:slug/download/:userId' component={Cart} />  
//     <PrivateRoute exact path={"/Imageview/:id/:user_id"} component={Imageview} />
//     {checked_auth === true &&   
//     <PrivateRoute exact path='/GetJobs' component={GetJobs} />    } 
//     <PrivateRoute exact path='/Razypay' component={Razypay} />  
//     <PrivateRoute exact path='/TermsCondition' component={TermsCondition} />  
//     <PrivateRoute exact path='/UpgradeProVersion' component={UpgradeProVersion }/> 
//     <PrivateRoute exact path='/GoPremium' component={GoPremium}/> 
//     {checked_auth_user === true &&        
//     <PrivateRoute exact path='/UploadFile' component={UploadFile} />  }
//     <PrivateRoute exact path={"/ViewJob/:id"} component={ViewJob} />
//     <PrivateRoute exact path='/PaymentMethod' component={PaymentMethod} />
//     <PrivateRoute exact path='/HiringDroners' component={HiringDroners} />  
//     <PrivateRoute exact path={"/ProfileSingle/:id"} component={EndUserProfile} />
//     <PrivateRoute exact path='/HiringDorners' component={HiringDorners} />
//     <PrivateRoute exact path={"/PostJobEdit/:id"} component={JobPostEdit} /> 
//     <PrivateRoute exact path='/BlogDetail' component={BlogDetail} /> 
//     <PrivateRoute exact path='/BlogCategory' component={BlogCategory} />  
//     <PrivateRoute exact path='/OfficeProfileEdit' component={OfficeProfileEdit} />
//     <PrivateRoute exact path='/Blog' component={Blog}/>  
//     <PrivateRoute exact path='/Services' component={Services} />  
//     <PrivateRoute exact path='/search' component={Search}/>  
//     <PrivateRoute exact path='/search/Shots' component={Search}/>  
//     <PrivateRoute exact path='/search/Member' component={Member}/>  
//     <PrivateRoute exact path='/searchresult' component={searchresult}/>  
//     <PrivateRoute exact path='/ViewJob' component={ViewJob} />
//     <PrivateRoute exact path='/search/Industry' component={Industry}/> 
//     <PrivateRoute exact path='/OfficeProfile' component={OfficeProfile} />
//     <PrivateRoute exact path='/SearchFilter' component={SearchFilter} />
//     <PrivateRoute exact path='/JobAppliedDroners/:id' component={JobAppliedDroners} /> 
//     <PrivateRoute exact path='/PostEdit/:id/:user_id' component={PostEdit} />
//     <PrivateRoute exact path='*' component={NoPageFound} />   
//   </Switch>
// </UserContext.Provider>

// </HashRouter>


// )
// };
 

// export default App;
 








import React, { Component , useState , useMemo, useLayoutEffect} from "react";   
import { HashRouter , Switch , Redirect } from 'react-router-dom';
import Home from './components/website/Home';
import Company from './components/website/Company';
import User from './components/website/User';
import Login from './components/website/Login';
import Logout from './components/website/Logout';
import Profile from './components/website/Profile'
import ProfileEdit from './components/website/ProfileEdit'
import SignUp from './components/website/SignUp'
import TermsCondition from './components/website/TermsCondition'
import UpgradeProVersion  from './components/website/UpgradeProVersion '
import GoPremium from './components/website/GoPremium'
import UploadFile from './components/website/UploadFile'
import ViewJob from './components/website/ViewJob'
import Imageview from './components/website/Imageview'
import PaymentMethod from './components/website/PaymentMethod'
import HiringDroners from './components/website/GetJobs';
import ForgotPassword from './components/website/ForgotPassword';
import EndUserProfile from './components/website/EndUserProfile';
import HiringDorners from './components/website/HiringDorners';
import BlogDetail from './components/website/BlogDetail';
import BlogCategory from './components/website/BlogCategory';
import Blog from './components/website/Blog';
import NoPageFound from "./components/website/NoPageFound.js"; 
import Services from './components/website/Services.js'
import Header from '../src/components/header/Header' 
import GetJobs from '../src/components/website/GetJobs'
import Search from '../src/components/website/Search'
import FooterBar from '../src/components/footer/FooterBar'
import OfficeProfileEdit from '../src/components/website/OfficeProfileEdit'
import Member from '../src/components/website/Member'
import Industry from '../src/components/website/Industry' 
// import Dashboard from '../src/components/website/Dashboard'
import OfficeProfile from '../src/components/website/OfficeProfile'
import SearchFilter from '../src/components/SearchFilter'
import Cart from '../src/components/website/Cart'
import './components/website/All.module.css' 
// import Navbar from '../src/components/Navbar'
import axios from 'axios'
import { render } from "@testing-library/react"; 
import { UserContext } from "../src/hooks/UserContext";
import JobPostEdit from '../src/components/website/JobPostEdit'
import PublicRoute from '../src/hooks/PublicRoute'
import PrivateRoute from '../src/hooks/PrivateRoute'
import AdminRoute from '../src/hooks/AdminRoute'
import UserRoute from '../src/hooks/UserRoute' 
import searchresult from '../src/components/website/Searchresult'
import PostEdit from '../src/components/website/PostEdit'
import Razypay from '../src/components/website/Razypay'
import JobAppliedDroners from '../src/components/website/JobAppliedDroners'
// import Alert from "../src/components/alert/Alert.component";
import { logout, isLogin ,login ,getRefreshToken } from '../src/middleware/auth'; 
import Role from '../src/components/_helpers/role';
import { authenticationService } from '../src/middleware/auth'; 


 
class App extends React.Component {
 
    constructor(props) {
      super(props);

      this.state = {
          currentUser: null,
          isAdmin: false,
          authState: false,
          checked_auth: false,
          checked_auth_user: false,
          isAdmin: false,
          user: null,
          userState : '',
          admin : '',
          currentUser : '', 
      };
  }

    // const [user, setUsers] = useState(null); 
    // const value = useMemo(() => ({ user, setUsers }), [user, setUsers]); 

    // const [userState, setUser] = useState([]);
    // const [admin, setAdmin] = useState([]);
    // const [authState, setAuth] = useState(false);
    // const [checked_auth, setchecked_auth] = useState(false);
    // const [checked_auth_user, setchecked_auth_user] = useState(false);

    // const [currentUser, setcurrentUser] = useState(null); 
    // const [isAdmin, setisAdmin] = useState(false);
  
    
    componentDidMount() {
      authenticationService.currentUser.subscribe(x => this.setState({
          currentUser: x,
          isAdmin: x && x.role === Role.Admin
      })); 

} 
    
  render() {
    const { currentUser, isAdmin } = this.state;

    return( 
 
<BrowserRouter>
<UserContext.Provider > 
  <Switch>
    <PublicRoute restricted={true} path="/login" component={Login}exact />
    <PublicRoute restricted={true} path='/User' component={User} exact/>
    <PublicRoute restricted={true} path='/Company' component={Company} exact/>
    <PublicRoute restricted={true} exact path='/ForgotPassword' component={ForgotPassword}/> 
    <PublicRoute component={Home} path="/" exact /> 
    <PrivateRoute exact path="/profile" component={Profile} /> 
    <PrivateRoute exact path='/ProfileEdit' component={ProfileEdit} />
    <PrivateRoute exact path='/Cart/:slug/download/:userId' component={Cart} />  
    <PrivateRoute exact path={"/Imageview/:id/:user_id"} component={Imageview} /> 
    <AdminRoute exact path="/GetJobs" roles={[Role.Admin]} component={GetJobs} />
    <PrivateRoute exact path='/Razypay' component={Razypay} />  
    <PrivateRoute exact path='/TermsCondition' component={TermsCondition} />  
    <PrivateRoute exact path='/UpgradeProVersion' component={UpgradeProVersion }/> 
    <PrivateRoute exact path='/GoPremium' component={GoPremium}/>    
    <UserRoute exact path="/UploadFile" roles={[Role.Admin]} component={UploadFile} /> 
    <PrivateRoute exact path={"/ViewJob/:id"} component={ViewJob} />
    <PrivateRoute exact path='/PaymentMethod' component={PaymentMethod} />
    <PrivateRoute exact path='/HiringDroners' component={HiringDroners} />  
    <PrivateRoute exact path={"/ProfileSingle/:id"} component={EndUserProfile} />
    <PrivateRoute exact path='/HiringDorners' component={HiringDorners} />
    <AdminRoute exact path="/PostJobEdit/:id" roles={[Role.Admin]} component={JobPostEdit} /> 
    <PrivateRoute exact path='/BlogDetail' component={BlogDetail} /> 
    <PrivateRoute exact path='/BlogCategory' component={BlogCategory} />  
    <PrivateRoute exact path='/OfficeProfileEdit' component={OfficeProfileEdit} />
    <PrivateRoute exact path='/Blog' component={Blog}/>  
    <PrivateRoute exact path='/Services' component={Services} />  
    <PrivateRoute exact path='/search' component={Search}/>  
    <PrivateRoute exact path='/search/Shots' component={Search}/>  
    <PrivateRoute exact path='/search/Member' component={Member}/>  
    <PrivateRoute exact path='/searchresult' component={searchresult}/>  
    <PrivateRoute exact path='/ViewJob' component={ViewJob} />
    <PrivateRoute exact path='/search/Industry' component={Industry}/> 
    <PrivateRoute exact path='/OfficeProfile' component={OfficeProfile} />
    <PrivateRoute exact path='/SearchFilter' component={SearchFilter} />
    <PrivateRoute exact path='/JobAppliedDroners/:id' component={JobAppliedDroners} />  
    <UserRoute exact path='/PostEdit/:id/:user_id' roles={[Role.Admin]} component={PostEdit} /> 
    <PrivateRoute exact path='*' component={NoPageFound} />   
  </Switch>
</UserContext.Provider>

</BrowserRouter>


);
}
}
 

export default App;
 