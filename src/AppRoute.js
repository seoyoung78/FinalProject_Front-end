import { Redirect, Route, Switch } from "react-router-dom";
import Patient from "views/Patient";
import Register from "views/Register";
import Treatment from "views/Treatment";
import Inspection from "views/Inspection";
import Help from "views/Help";
import Login from "views/Login";
import Auth from "views/Auth";

function AppRoute() {
    return(
        <Switch>
            {/* <Route path="/" exact component={Login}/> */}
            <Route path="/Patient" component={Patient}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Treatment" component={Treatment}/>
            <Route path="/Inspection" component={Inspection}/>
            <Route path="/Auth" component={Auth}/>
            <Route path="/Help" component={Help}/>
            <Route path="/" component={Login}/>
            <Redirect to="/"/>
        </Switch>
    );
}
export default AppRoute;