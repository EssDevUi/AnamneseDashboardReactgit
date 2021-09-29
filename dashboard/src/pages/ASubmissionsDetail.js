import React from "react";
import {get_ASubmissionsDetailByID} from '../api';
import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';

export default class ASubmissionsDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           dataById:props.match.params.id,
           loader:false,
           data: "",
           patients:[]
           }
    }
    componentDidMount(){
        get_ASubmissionsDetailByID(this);
    }
   
    render(){
        
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
                <h4 style={{fontWeight:'bolder'}}>Anamnese #{this.state.data.id}</h4>
                <p>
                    eingegangen am Samstag, {this.state.data !=="" && this.state.data.created_at}
                </p>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h5 style={{fontWeight:'bolder'}}>Übermittelete Stammdaten</h5>
                        <p>von Anamnese@Home</p>
                        <p>Vorname: <b>{this.state.data !== "" && this.state.data.patient_payload.first_name}</b></p>
                        <p>Nachname: <b>{this.state.data !== "" && this.state.data.patient_payload.last_name}</b></p>
                        <p>Geburtsdatum: <b>{this.state.data !== "" && this.state.data.patient_payload.date_of_birth}</b></p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <h5 style={{fontWeight:'bolder'}}>Hinterlegte Stammdaten</h5>
                    <p>in Athena</p>
                    <p>Bitte wählen Sie zunachst in der Suchleiste einen Patienten aus, dem Sie die eingegangene Anamnese zuweisen mochten.</p>
                    </div>

                </div>
              <div className="row">
                  <div className="col-md-12">
                      <select className="col-md-12">
                            <option value="">
                              Bitte auswahlen...
                              </option>
                          {
                              this.state.patients.map((data,index)=>{
                                  return(
                                    <option value={data.id}>
                                       {data.patient_name}
                                    </option>
  
                                  )
                              })
                          }
                          
                      </select>

                  </div>
              </div>
              <br/>
              <div className="row">
                  <div className="col-md-6">
                      <a href="/external/anamnesis_at_home_submissions">Zurück zur Übersicht</a>

                  </div>
                  <div className="col-md-6" style={{textAlign:"right"}}>

                      <Button variant="contained" color="primary" >Zuweisen</Button>

                  </div>

              </div>
            </div>

        )
    }
}