import { render } from "@testing-library/react";
import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {ServerUrl} from '../Config';
import {getUser_profile,handleSubmit_profile} from "../api";
import Loader from "react-loader-spinner";

export default class Profile extends React.Component {
    
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);

            // this.handleSubmit = this.handleSubmit.bind(this);
            
            this.state = {
            loader:false,
             array :"",
             id:1,
             Salutation:"",
             firstName:"",
             LastName:"",
             Email:"",
             Password:""
            };
        }
        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
          }
        
         
        componentDidMount(){
          getUser_profile(this);
        }
    render(props){
     
        return(
            <div>
            <Loader
            type="TailSpin"
            color="#015270"
            height={100}
            width={100}
            visible={this.state.loader}
            className="ourloader"
          />
            <Card className="mb-3">
                <CardContent>
                <form onSubmit={((e)=> handleSubmit_profile(e,this.state))}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="pb-0">
                            <Typography variant="h4" bold align="left" >
                            Mein Profil
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="row mb-3">
                               
                                    <div className="col-sm-6">
                                    <TextField
                                        label="Anrede"
                                        id="outlined-basic"
                                        value={this.state.Salutation}
                                        onChange={this.handleChange}
                                        className="w-100"
                                        variant="outlined"
                                        name="Salutation"
                                        />
                                    </div>
                                  
                            </div>
                            <div className="row mb-3">
                               
                                    <div className="col-sm-6">
                                    <TextField className="w-100"  name="firstName" onChange={this.handleChange} value={this.state.firstName}  size="small"    label="Vorname *"      id="outlined-basic"  variant="outlined" />  
                                    </div>
                                  
                            </div>
                            <div className="row mb-3">
                               
                                    <div className="col-sm-6">
                                    <TextField className="w-100" name="LastName" onChange={this.handleChange} value={this.state.LastName}  size="small"    label="Nachname *"      id="outlined-basic"  variant="outlined" />  
                                    </div>
                                  
                            </div>
                            <div className="row mb-3">
                               
                                    <div className="col-sm-6">
                                    <TextField className="w-100" name="Email" onChange={this.handleChange} value={this.state.Email}  size="small"    label="Email *"      id="outlined-basic"  variant="outlined" />  
                                    </div>
                                  
                            </div>
                            <div className="row mb-3">
                               
                                    <div className="col-sm-6">
                                    <TextField className="w-100" name="Password" onChange={this.handleChange} value={this.state.Password} size="small"    label="Passwort"      id="outlined-basic"  variant="outlined" />  
                                    </div>
                                  
                            </div>
                            <div className="row mb-3">
                               
                                    <div className="col-sm-6">
                                    <TextField className="w-100"  value={this.state.Password}  size="small"    label="Passwort bestätigen"      id="outlined-basic"  variant="outlined" />  
                                    </div>
                                  
                            </div>
                            <div>
                            <Button variant="contained" color="primary" type="submit">
                            Profil aktualisieren
                                </Button>
                            </div>
                            
                        </Grid>
                        

                    </Grid>
                    </form>
            </CardContent>
            </Card>
            </div>
        )

    }
}