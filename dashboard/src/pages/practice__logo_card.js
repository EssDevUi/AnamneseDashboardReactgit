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





export default class external__practice__logo_card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Logo:[],

          }

          this.SaveLogo_PracticeLogo=this.SaveLogo_PracticeLogo.bind(this);
          this.handledropzone=this.handledropzone.bind(this);
          this.onDropHandler=this.onDropHandler.bind(this);
    }
    componentDidMount(){
      
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
           this.props.history.push("/external/practice")
        }
  
    render(props) {
          return (
            <div>
           <div className="mb-3">
         
                <Card>
                    <CardContent>
                        <div className="w-75 mb-3 ">
                            <Typography variant="h5" className="mb-3 font-weight-bold" bold align="left" >
                            Logo bearbeiten


                    </Typography>
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
                        <br/>
                        <div className="text-left">
                        <Button variant="contained" style={{borderRadius:"15px"}} color="primary" onClick={this.SaveLogo_PracticeLogo} >Praxis aktualisieren</Button>
                        </div>
                    </CardContent>
                </Card>

            </div>
            
         </div> 
        )

    }
}