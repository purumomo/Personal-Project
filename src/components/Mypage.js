import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {BuilderPage} from "./pages/BuilderPage";
import {DashboardPage} from "./pages/DashboardPage";
import GoogleMaterialPage from "./google-material/GoogleMaterialPage";
import {MyPage} from "./pages/MyPage";

export default function HomePage() {
    return (
        <Switch>
            {
                <Redirect exact={true} from="/" to="/dashboard" />
            }
                  
            <ContentRoute path="/builder" component={Builder} />
            <ContentRoute path="/dashboard" component={Dashboard} />
            <Route path="/google-material" component={GoogleMaterialPage} />
            +    <ContentRoute path="/my-page" component={MyPage} />
        </Switch>
    );
}    