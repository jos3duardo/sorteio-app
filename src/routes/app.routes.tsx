import React from "react";
import {Route, Switch} from 'react-router-dom';

import Layout from "../components/Layout";
import Numero from "../pages/Numero";
import Nome from "../pages/Nome";
import Amigo from "../pages/Amigo";

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/numero" exact component={Numero} />
            <Route path="/nome" exact component={Nome} />
            <Route path="/amigo" exact component={Amigo} />
        </Switch>
    </Layout>
)

export default AppRoutes