import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WizPracticeData from "./WizPracticeData";
import WizPracticeLogo from "./WizPracticeLogo";
import WizAppOptions from "./WizAppOptions";
import WizAnamnesisPin from "./WizAnamnesisPin";
import axios from 'axios';
import ReactFileReader from 'react-file-reader';
import {ServerUrl} from '../Config';
import {getPracticeData_Practice,PostPracticeData_Practice} from "../api";




 

function getStepContent(stepIndex,state,handleChange,handleFile,handledropzone) {
  switch (stepIndex) {
    case 0:
      return  <WizPracticeData state={state} onhandle={handleChange} />;
    case 1:
      return <WizPracticeLogo onhandle={handledropzone}  />;
    case 2:
      return <WizAppOptions state={state} onhandle={handleChange} />;
    case 3:
      return <WizAnamnesisPin onhandle={handleChange}  />;
    default:
      return 'Unknown stepIndex';
  }
}
class WizPractice extends React.Component {
  constructor(props){
    
    super(props);
    this.state = {
      activeStep: 0,
      steps:  ['Praxisdaten', ' Praxislogo', ' App-Einstellungen' , " Sperrpasswort"],
      array : "",
      Name:"",
      Adress1:"",
      Adress2:"",
      AllowPriviousEntry:false,
      BlockingPassword:false,
      BugReports:false,
      BugReportTime:"1976-05-04T00:00:00.000Z",
      City:"",
      DangerZonePassword:"",
      Email:"",
      Logo:[],
      NavigateTo:"Detailpatients",
      Phone:"",
      PostCode:"",
      Sendanalyticsdata:false,
      Website:"",
      day:"",
      Month:"",
      Year:"",
      Hour:"",
      Minute:"",
    }
    this.handleChange=this.handleChange.bind(this);
    this.UploadFile=this.UploadFile.bind(this);
    this.handledropzone=this.handledropzone.bind(this);

  }
componentDidMount(props){
 
  getPracticeData_Practice(this);

}
 UploadFile(file){
   this.setState({
     Logo:file,

   })
 }
   handleNext = () => {
     let currentStep = this.state.activeStep;
     let newStep = currentStep + 1;
     this.setState({
      activeStep: newStep
     })
      if(newStep === this.state.steps.length) {
        PostPracticeData_Practice(this.state);
      // PostPracticeData(this.state);
      this.setState({
        activeStep:0
      })
    }
  };

   handleBack = () => {
    let currentStep = this.state.activeStep;
    let newStep = currentStep - 1;
    this.setState({
      activeStep:newStep 
     })
  };

   handleReset = () => {
    this.setState({
      activeStep: 0,
     })
  };
  handleChange(event) {
    if(event.target.type=="checkbox"){
      this.setState({
        [event.target.name]: event.target.checked
    });
    }else{
    this.setState({
        [event.target.name]: event.target.value
    });
  }
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
render(props){
  const { classes } = this.props;
  return (
    <div  style={{width:"100%"}}>
     {this.state.LastUrlIndex !== "practice" ? <Stepper activeStep={this.state.activeStep} alternativeLabel>
        {this.state.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>:null
     } 

      <div>
         
          <div>
            <Typography  style={{marginTop:"8px",marginBottom:"8px"}}>{getStepContent(this.state.activeStep,this.state,this.handleChange,this.UploadFile,this.handledropzone)}</Typography>
           
          </div>
        
      </div>
    </div>
  );
        }
}
export default WizPractice;