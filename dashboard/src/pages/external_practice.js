import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {getPracticeData_Practice} from '../api';

export default class externalePractice extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            AllowPriviousEntry:false,
            BlockingPassword:false,
            BugReports:false,
            BugReportTime:"1976-05-04T00:00:00.000Z",
            NavigateTo:"Detailpatients",
            Sendanalyticsdata:false,
            day:"",
            Month:"",
            Year:"",
            Hour:"",
            Minute:"",
            Logo:[],
            Name:"",
            Adress1:"",
            Adress2:"",
            City:"",
            Email:"",
            Phone:"",
            PostCode:"",
            Website:"",
            DangerZonePassword:""
        }
    }
    componentDidMount(){
       
        getPracticeData_Practice(this);
      
      }
render(){
    return (

        <Card>
            <CardContent>
        
           
                <div className="col-12">
        
        
        <br />
        <h2>Zahnarztpraxis Dr. Sven Markus Gallenbach</h2>
        <br />
        <address>
        Friedrichstraße 25
        <br />
        69412
        Eberbach
        <br />
        <br />
        <i aria-hidden="true" className="fa fa-phone"></i>
        +49 6271 1040
        <br />
        <i aria-hidden="true" className="fa fa-envelope"></i>
        <a href="mailto:info@dr-gallenbach.de">info@dr-gallenbach.de</a>
        <br />
        <i aria-hidden="true" className="fa fa-globe"></i>
        <a href="https://www.gallenbach-zaehne.de/" target="_blank">https://www.gallenbach-zaehne.de/</a>
        </address>
        Kundennummer: 7729
        <h4 className="mt-5">Technische Daten</h4>
        Sperrpasswort: 69412
        <br />
        <h4 className="mt-5 col-12">Optionen</h4>
        <ul className="w-50 list-group mediaQueryXS">
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Sperrpasswort für Aufklärungsbögen
        <span className="text-muted"><i className="fa fa-check text-primary"></i></span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Zustimmung zum Senden von Fehlerberichten
        <span className="text-muted"><i className="fa fa-check text-primary"></i></span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Zustimmung zum Senden von Analysedaten
        <span className="text-muted"><i className="fa fa-minus text-muted"></i></span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Laden von früheren Anamnese-Eingaben erlauben
        <span className="text-muted"><i className="fa fa-check text-primary"></i></span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Nach dem Speichern eines Anamnesebogens navigieren zurück zur
        <span className="text-muted">
        Liste mit allen Patienten
        </span>
        </li>
        </ul>
        <br />
        <h4 className="mt-5">Zugehörige Nutzer</h4>
        <ul className="w-50 list-group mediaQueryXS">
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Zahnarztpraxis Dr. Sven Markus Gallenbach
        <span className="text-muted">info@dr-gallenbach.de</span>
        </li>
        </ul>
        <h4 className="mt-5">Daten für die DGSVO-Formulare</h4>
        <br />
        <h5>Datenschutzbeauftragter der Praxis</h5>
        Name: 
        <br />
        Anschrift: 
        <br />
        Telefon / E-Mail: 
        <br />
        <br />
        <h5>Externes Abrechnungsunternehmen</h5>
        
        <br />
        <div className="mt-3">
        <a href="/external/practice/edit"><i aria-hidden="true" className="fa fa-pencil"></i>
        Praxis bearbeiten
        </a>|
        <a href="/external/welcome">Zurück zur Übersicht</a>
        </div>
        
        </div>
        </CardContent>
        </Card>
            )
    }
   
}