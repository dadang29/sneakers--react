import {AnimatedSwitch} from "react-router-transition";
import {Redirect, Route, Switch} from "react-router-dom";
import {PublicRoute} from "../component/PublicRoute";
import {Login} from "../pages/Login/Login";
import {App} from "../pages/App/App";
import {Home} from "../pages/Home/Home";
import {Barang} from "../pages/Barang/Barang";
import {Profil} from "../pages/User/Profile";
import {DetailBarang} from "../pages/Barang/Barang_detail";
import {User} from "../pages/User/User";

export const AppRoute = () => {
    return <Switch>
        <Route path={"/app/home"}>
            <Home/>
        </Route>
        <Route path={"/app/barang"}>
            <Barang/>
        </Route>
        <Route path={"/app/detail_barang"}>
            <DetailBarang/>
        </Route>
        <Route path={"/app/user"}>
            <User/>
        </Route>
        <Route path={"/app/profil"}>
            <Profil/>
        </Route>
        <Route path="/app" exact>
            <Redirect to={'/app/home'} />
        </Route>
    </Switch>
    // <About/>
}
