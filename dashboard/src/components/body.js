import React from 'react';
import Layout from "./layout";
import WelcomePage from "../pages/Welcomepage";
import AFlows from "../pages/AFlows";
import AFlowsEdit from "../pages/AFlowsEdit"
import WizPractice from "../pages/WizPractice"
import Templates from "../pages/Templates";
import Documents from "../pages/Documents";
import ASubmissions from "../pages/ASubmissions";
import Profile from "../pages/profile";
import WizPracticeData from "../pages/WizPracticeData";
import WizPracticeLogo from  "../pages/WizPracticeLogo";
import WizAppOptions from "../pages/WizAppOptions";
import WizAnamnesisPin from "../pages/WizAnamnesisPin";
import external__practice__anamnesis_pin_card from "../pages/anamnesis_pin_card";
import external__practice__logo_card from "../pages/practice__logo_card";
import external__practice__options_card from "../pages/practice__options_card";
import externalePractice from "../pages/external_practice";
import external_practice_edit from "../pages/external_practice_edit";
import anamnesis_at_home_flow_new from "../pages/anamnesis_at_home_flows_New";
import ASubmissionsDetail from "../pages/ASubmissionsDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const Body = () =>{
    return(
        <Layout>
            <Router>
            <Switch>
                 <Route exact path="/">
                 <Redirect to="/external/welcome" />
                </Route>
                <Route exact path="/external/welcome" component={WelcomePage}>
                </Route>
                <Route exact path="/external/anamnesis_at_home_flows" component={AFlows}>
                </Route>
                <Route exact path="/external/anamnesis_at_home_flows/new" component={anamnesis_at_home_flow_new}>
                </Route>
                <Route exact path="/external/anamnesis_at_home_flows/:id/edit" component={AFlowsEdit}>
                </Route>
                <Route exact path="/external/document_templates" component={Templates}>
                </Route>
                <Route exact path="/external/welcome_wizard/practice" component={WizPractice} >
                </Route>
                <Route exact path="/external/welcome_wizard/practice_data" component={WizPracticeData} >
                </Route>
                <Route exact path="/external/welcome_wizard/practice_logo" component={WizPracticeLogo} >
                </Route>
                <Route exact path="/external/welcome_wizard/app_options" component={WizAppOptions} >
                </Route>
                <Route exact path="/external/welcome_wizard/anamnesis_pin" component={WizAnamnesisPin} >
                </Route>
                <Route exact path="/external/documents" component={Documents}>
                </Route>
                <Route exact path="/external/anamnesis_at_home_submissions" component={ASubmissions}>
                </Route>
                <Route exact path="/external/anamnesis_at_home_submissions/:id" component={ASubmissionsDetail}>
                </Route>
                <Route exact path="/external/profile" component={Profile}>
                </Route>
                <Route exact path="/external/practice/edit" component={external_practice_edit}>
                </Route>
                <Route exact path="/external/practice"  component={externalePractice}>
                </Route>
                <Route exact path="/external/practice/logo_card"  component={external__practice__logo_card}>
                </Route>
                <Route exact path="/external/practice/options_card"  component={external__practice__options_card}>
                </Route>
                <Route exact path="/external/practice/anamnesis_pin_card"  component={external__practice__anamnesis_pin_card}>
                </Route>
             </Switch>
            </Router>
          
        </Layout>
        
    )
}

export default Body;