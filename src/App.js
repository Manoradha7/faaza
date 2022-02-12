import "./App.css";
import { Switch, Route, Redirect} from "react-router-dom";

//components
import { Header } from "./components/Header.js";
import { Slider } from "./components/Slider.js";
import { SecBanner } from "./components/SecBanner.js";
import { Products } from "./components/Products.js";
import { ProductDetail } from "./components/ProductDetail.js";
import { Shop } from "./components/Shop.js";
import { Cart } from "./components/Cart.js";

//users
import { Signup } from "./users/Signup.js";
import { Signin } from "./users/Signin.js";
import { ForgotPassword } from "./users/ForgotPassword.js";
import { ResetPassword } from "./users/ResetPassword.js";
import { Message } from "./users/Message.js";



function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/resetpassword/:id">
          <ResetPassword />
        </Route>
        <Route path="/activationmessage">
          <Message msg="Account Activated" />
        </Route>

        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        {/* Dashboard */}
        <Route path="/dashboard">
          <Header />
          <Dashboard />
        </Route>
        <Route path="/product/:id">
          <Header />
          <ProductDetail />
        </Route>
        <Route path="/shop">
          <Header />
          <Shop />
        </Route>
        <Route path="/cart">
          <Header />
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

function Dashboard() {
    
  return (
    <div>
      <Slider />
      <SecBanner />
      <Products />
    </div>
  );
}

export default App;
