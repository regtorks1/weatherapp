import Login from './Login';
import './Login.css';
import {useSelector} from "react-redux";
import {selectUser} from './userSlice';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ForgotPassword } from './Forgot Password/forgotPassword';
import { Main } from './main/main';


  const App = () => {

    const user = useSelector(selectUser);
  return(
    <div>
    {/* {user ? <Main /> : <Login /> } */}
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App