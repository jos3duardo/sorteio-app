import React from "react";
import {Route, Switch} from 'react-router-dom';

import Layout from "../components/Layout";
import Numero from "../pages/Numero";
import Nome from "../pages/Nome";
import Amigo from "../pages/Amigo";
import Resultado from "../pages/Resultado";

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Numero} />
            <Route path="/numero" exact component={Numero} />
            <Route path="/nome" exact component={Nome} />
            <Route path="/resultado/:tipo/:id" exact component={Resultado} />
            <Route path="/amigo" exact component={Amigo} />
        </Switch>
    </Layout>
)

export default AppRoutes