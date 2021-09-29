import React, { Component } from "react";
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import {get_anamnesePin,post_anamnesePin} from "../api";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';




export default class WizAnamnesisPin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:1,
            steps:  ['Praxisdaten', ' Praxislogo', ' App-Einstellungen' , " Sperrpasswort"],
           InputLabels  : ["Name der Praxis *","Adresszeile 1","Adresszeile 2", "Postleitzahl" ,"Stadt","Telefon","E-Mail","Website"], 
           array : "",
           DangerZonePassword:"",
           LastUrlIndex :"",
        }
        this.handleChange=this.handleChange.bind(this);
        this.SaveDangerZonePassword=this.SaveDangerZonePassword.bind(this);
    
    }
  
    componentDidMount(){
        const UrlParameter=this.props.match.path.replace("/external/","");
       
        this.setState({
            LastUrlIndex:UrlParameter
        })
        get_anamnesePin(this);
      
      }
     
      handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        });
      }
    SaveDangerZonePassword(){
        post_anamnesePin(this.state);  
        if(this.state.LastUrlIndex==="welcome_wizard/anamnesis_pin")
        { 
            this.props.history.push('/external/welcome'); 
        }
    }
    render(props) {
        const options = {
            filterType: 'checkbox',
        };
        const columns = ["Titel des Dokuments	", "Art des Dokuments	", "Erstellt am	", "State"];
        return (
            <div>
            <div className="mb-3">
           {this.state.LastUrlIndex === "welcome_wizard/anamnesis_pin" ?  
                <div className="mb-3">
                <Stepper activeStep={3 } alternativeLabel>
                        {this.state.steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </div>:null
    }
                
                <Card>
                    <CardContent>
                        <div className="w-75 mb-3 mediaQueryXS">
                            <Typography variant="h5" className="mb-3 font-weight-bold" bold align="left" >
                            Sperrpasswort bearbeiten

                    </Typography>
                            <p>
                            Nachdem Patientinnen und Patienten in Ihrem Wartezimmer einen Anamnesebogen ausgefüllt haben, erscheint ein Sperrbildschirm und die App kann nur mit der Eingabe des Sperrpassworts wieder freigegeben werden. So können Patient*innen nicht auf vertrauliche Informationen anderer zugreifen. Dieses Sperrpasswort legen Sie hier fest.
                    </p>
                           
                        </div>
                        <div className=" border w-75 p-3 mediaQueryXS">
                            <Typography variant="h6" className="mb-3 font-weight-bold" bold align="left" >
                            Danger Zone


                        </Typography>
                        <Alert variant="filled" severity="error">
                        Merken Sie sich Ihr neues Sperrpasswort gut.

                           </Alert>
                            <div className="row mt-3">
                            <div className="col-md-8 col-lg-8 col-xs-12 mb-3 ">  
                                    <div>        
                                          <TextField className="w-100 mb-2 mediaQueryXS"   type="text"  onChange={this.handleChange} name="DangerZonePassword"     size="small"          id="outlined-basic" label={"Sperrpasswort"} variant="outlined" />      
                                          <p style={{fontSize:"11px"}}>Nach dem erfolgreichen Ausfüllen eines Anamnesebogens muss ein Sperrpasswort eingegeben werden, um die Patientendaten vor unberechtigtem Zugriff zu schützen.</p>
                                              </div>   
                                                 </div>
                            </div>

                        </div>
                        {this.state.LastUrlIndex === "practice/anamnesis_pin_card" ? 
                        <div className="text-right">
                        <Button variant="contained" color="primary" onClick={this.SaveDangerZonePassword} >Save</Button>
                        </div>:null
    }
                    </CardContent>
                </Card>

            </div>
             {this.state.LastUrlIndex === "welcome_wizard/anamnesis_pin" ?
             <div className="d-flex justify-content-between align-items-center">
             <a
               disabled={this.state.activeStep === 0}
               // onClick={this.handleBack}
               style={{marginRight:"8px"}}
               href="/external/welcome_wizard/app_options"
             >
               Zurück
             </a>
              
             <Button variant="contained" color="primary" onClick={this.SaveDangerZonePassword}>
               Weiter
             </Button>
           </div>:null
                                        }
                                        </div>
        )

    }
}