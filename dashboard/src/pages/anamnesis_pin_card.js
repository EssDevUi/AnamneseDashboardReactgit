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




export default class external__practice__anamnesis_pin_card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:1,
           array : "",
           DangerZonePassword:"",
        }
        this.handleChange=this.handleChange.bind(this);
        this.SaveDangerZonePassword=this.SaveDangerZonePassword.bind(this);
    
    }
  
    componentDidMount(){
       
        get_anamnesePin(this);
      
      }
     
      handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        });
      }
    SaveDangerZonePassword(){
        post_anamnesePin(this.state);  
       this.props.history.push("/external/practice")
    }
    render(props) {
      
        return (
            <div>
            <div className="mb-3">
                
                <Card>
                    <CardContent>
                        <div className="w-75 mb-3 mediaQueryXS">
                            <Typography variant="h5" className="mb-3 font-weight-bold" bold align="left" >
                            Sperrpasswort bearbeiten

                    </Typography>
                         
                        </div>
                        <div className=" border w-75 p-3 mediaQueryXS">
                            <Typography variant="h6" className="mb-3 font-weight-bold" bold align="left" >
                            Danger Zone


                        </Typography>
                        <Alert variant="filled" severity="error">
                        Merken Sie sich Ihr neues Sperrpasswort gut.

                           </Alert>
                            <div className="row mt-3 ">
                            <div className="col-lg-8 col-md-8 col-xs-12 mb-3 ">  
                                    <div className="mediaQueryXS">        
                                          <TextField className="w-100 mb-2"   type="text" value={this.state.DangerZonePassword}  onChange={this.handleChange} name="DangerZonePassword"     size="small"          id="outlined-basic" label={"Sperrpasswort"} variant="outlined" />      
                                          <p style={{fontSize:"11px"}}>Nach dem erfolgreichen Ausfüllen eines Anamnesebogens muss ein Sperrpasswort eingegeben werden, um die Patientendaten vor unberechtigtem Zugriff zu schützen.</p>
                                              </div>   
                                                 </div>
                            </div>

                        </div>
                        <br/>
                        <div className="text-left">
                        <Button variant="contained" style={{borderRadius:"15px"}} color="primary" onClick={this.SaveDangerZonePassword} >Praxis aktualisieren</Button>
                        </div>
                    </CardContent>
                </Card>

            </div>
            
                                        </div>
        )

    }
}