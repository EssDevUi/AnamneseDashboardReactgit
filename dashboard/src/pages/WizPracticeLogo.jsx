import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import {DropzoneArea} from 'material-ui-dropzone'
import ReactFileReader from 'react-file-reader';
import {POST_PRACTICElOGO,get_oracticeLogo} from "../api";
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';





export default class WizPracticeLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LastUrlIndex :"",
            activeStep: 1,
            Logo:[],
            steps:  ['Praxisdaten', ' Praxislogo', ' App-Einstellungen' , " Sperrpasswort"],

          }

          this.SaveLogo_PracticeLogo=this.SaveLogo_PracticeLogo.bind(this);
          this.handledropzone=this.handledropzone.bind(this);
          this.onDropHandler=this.onDropHandler.bind(this);
    }
    componentDidMount(){
        const UrlParameter=this.props.match.path.replace("/external/","");
       
        this.setState({
            LastUrlIndex:UrlParameter
        })
      
        get_oracticeLogo(this.state);
    }
    handledropzone(files){
        if(files.length > 0){
            this.onDropHandler(files);
        }
      }
    
      onDropHandler(files) {
        var file = files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          this.setState({
            Logo : event.target.result
          })
        };
        reader.readAsDataURL(file)
    
      }
        SaveLogo_PracticeLogo(){
            POST_PRACTICElOGO(this.state);
            if(this.state.LastUrlIndex==="welcome_wizard/practice_logo")
            {
                this.props.history.push('/external/welcome_wizard/app_options');
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
           {this.state.LastUrlIndex === "welcome_wizard/practice_logo" ?  
                <div className="mb-3">
                <Stepper activeStep={1} alternativeLabel>
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
                            Praxislogo bearbeiten


                    </Typography>
                            <p>
                            Als nächstes kommen wir zum Praxislogo. Das Praxislogo erscheint oben auf Ihren Anamnese- und Beratungsbögen. Auch später kann jederzeit ein neues Logo hochgeladen werden, indem Sie in der Navigationsbar den Punkt "Stammdaten" auswählen oder direkt auf der Willkommensseite die Kachel "Praxislogo" klicken.                    </p>
                            <p>
                            <span className="font-weight-bold">    Bitte beachten Sie, es werden nur die Bildformate .png, .jpg und .jpeg akzeptiert.</span>
                            Wenn Sie Ihr Logo ausgewählt haben, klicken Sie auf "Weiter".                          </p>
                        </div>
                        <div className=" border w-75 p-3 mediaQueryXS">
                            <Typography variant="h6" className="mb-3 font-weight-bold" bold align="left" >
                            Logo bearbeiten

                        </Typography>
                           <div className="w-50 mx-auto mediaQueryXS">

                           <DropzoneArea
                             onChange={this.handledropzone}
                             />
                             {/* <ReactFileReader>
                                 <input type="hidden" value={this.state.files} />
                            </ReactFileReader> */}
                           </div>

                        </div>
                        {this.state.LastUrlIndex === "practice/logo_card" ? 
                        <div className="text-right">
                        <Button variant="contained" color="primary" onClick={this.SaveLogo_PracticeLogo} >Save</Button>
                        </div>:null
                         }
                    </CardContent>
                </Card>

            </div>
             {this.state.LastUrlIndex === "welcome_wizard/practice_logo" ?
             <div className="d-flex justify-content-between align-items-center">
             <a
               disabled={this.state.activeStep === 0}
               // onClick={this.handleBack}
               style={{marginRight:"8px"}}
               href="/external/welcome_wizard/practice_data"
             >
               Zurück
             </a>
             <Button variant="contained" color="primary" onClick={this.SaveLogo_PracticeLogo}>
               Weiter
             </Button>
           </div>:null
  }
         </div> 
        )

    }
}