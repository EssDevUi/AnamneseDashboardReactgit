import React from "react";
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import {get_PracticeData,Post_PracticeData} from "../api";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



export default class WizPracticeData extends React.Component {
 
    
    constructor(props) {
        super(props);
        this.state = {
            InputLabels  : ["Name der Praxis *","Adresszeile 1","Adresszeile 2", "Postleitzahl" ,"Stadt","Telefon","E-Mail","Website"] ,
           steps:  ['Praxisdaten', ' Praxislogo', ' App-Einstellungen' , " Sperrpasswort"],
           array : "",
           LastUrlIndex :"",
           Id:1,
            Name:"",
            Adress1:"",
            Adress2:"",
            City:"",
            Email:"",
            Phone:"",
            PostCode:"",
            Website:"",
        }
        this.handleChange=this.handleChange.bind(this);
        this.onSave=this.onSave.bind(this);

    }
    componentDidMount(){
        const UrlParameter=this.props.match.path.replace("/external/","");
        this.setState({
            LastUrlIndex:UrlParameter
        })
      
        get_PracticeData(this);
      
      }
        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
        onSave(){
            debugger

            Post_PracticeData(this.state);
            if(this.state.LastUrlIndex==="welcome_wizard/practice_data")
            {
                this.props.history.push('/external/welcome_wizard/practice_logo');
            }
           
        }
    inputFields(n) {
        var labels = this.state.InputLabels;
        var Names = ["Name","Adress1","Adress2","PostCode","City","Phone","Email","Website"];
        var elements = [];
        var type = "text";
        
        for (var i = 0; i <= labels.length - 1 ; i++) {
            if(labels[i] === "Postleitzahl"){
                type = "number"
            } else{
                type = "text"
            }
          elements.push(  <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> <div>    <TextField className="w-100"  type={type}   onChange={(e)=>this.handleChange(e)} name={Names[i]}   size="small"         id="outlined-basic" label={labels[i]} variant="outlined" />          </div>      </div>);
    
        }
        return elements;
      }

    render(props) {
        // const options = {
        //     filterType: 'checkbox',
        // };
        // const columns = ["Titel des Dokuments	", "Art des Dokuments	", "Erstellt am	", "State"];
        return (
         <div>
            <div className="mb-3" style={{width:"100%"}}>
            {this.state.LastUrlIndex === "welcome_wizard/practice_data" ?
             <div className="mb-3">
                   <Stepper activeStep={0} alternativeLabel>
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
                        <div className="w-75 mediaQueryXS mb-3">
                            <Typography variant="h5" className="mb-3 font-weight-bold"  align="left" >
                                Praxis-Stammdaten bearbeiten

                    </Typography>
                            <p>
                                Herzlich willkommen bei Athena. Schön, dass Sie den Weg zum Athena Dashboard gefunden haben. Hier können Sie Ihre Praxisdaten und Vorlagen einsehen und bearbeiten. Bevor Sie richtig durchstarten können, überprüfen wir nochmal gemeinsam Ihre Praxis-Einstellungen.
                    </p>
                            <p>
                                Zuerst zu den Praxis-Stammdaten. Haben wir Ihre Website korrekt erfasst? Ist dies die E-Mail-Adresse, unter der Sie erreicht werden wollen? Wenn Sie mit den Einträgen zufrieden sind, klicken Sie auf "Weiter".
                          </p>
                        </div>
                        <div className=" border w-75 mediaQueryXS p-3 ">
                            <Typography variant="h6" className="mb-3 font-weight-bold"  align="left" >
                                Praxis-Stammdaten

                        </Typography>
                            <div className="row">
                              {/* {this.inputFields()} */}
                              <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.Name}  onChange={(e)=>this.handleChange(e)} name="Name"   size="small"         id="outlined-basic" label="Name" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.Adress1}  onChange={(e)=>this.handleChange(e)} name="Adress1"   size="small"         id="outlined-basic" label="Adress1" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.Adress2}  onChange={(e)=>this.handleChange(e)} name="Adress2"   size="small"         id="outlined-basic" label="Adress2" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.PostCode}  onChange={(e)=>this.handleChange(e)} name="PostCode"   size="small"         id="outlined-basic" label="PostCode" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.City}  onChange={(e)=>this.handleChange(e)} name="City"   size="small"         id="outlined-basic" label="City" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.Phone}  onChange={(e)=>this.handleChange(e)} name="Phone"   size="small"         id="outlined-basic" label="Phone" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.Email}  onChange={(e)=>this.handleChange(e)} name="Adress1"   size="small"         id="outlined-basic" label="Adress1" variant="outlined" />     
                                 </div> 
                                 </div>
                                 <div className="col-md-6 col-xs-12 col-lg-6 mb-3"> 
                              <div>   
                                   <TextField className="w-100"  type="text" value={this.state.Website}  onChange={(e)=>this.handleChange(e)} name="Adress1"   size="small"         id="outlined-basic" label="Adress1" variant="outlined" />     
                                 </div> 
                                 </div>
                            </div>

                        </div>
                        {this.state.LastUrlIndex === "practice" ? 
                        <div className="text-right">

                        <Button variant="contained" color="primary" onClick={this.onSave} >Save</Button>
                        </div>:null
                        }

                    </CardContent>

                </Card>

            </div>
            {this.state.LastUrlIndex === "welcome_wizard/practice_data" ?
               <div className="d-flex justify-content-between align-items-center">
               <a
                 disabled={this.state.activeStep === 0}
                 // onClick={this.handleBack}
                 style={{marginRight:"8px"}}
                 href="/external/welcome"
               >
                 Zurück
               </a>
                {/* <a href="/external/welcome_wizard/practice/practice_logo"> */}
               <Button variant="contained" color="primary" onClick={this.onSave}>
                 Weiter
               </Button>
               {/* </a> */}
             </div>:null
    }
           </div> 
        )

    }
}