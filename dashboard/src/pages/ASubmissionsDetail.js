import React from "react";
import {get_ASubmissionsDetailByID,patch_ASubmissionsPatient} from '../api';
import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';
export default class ASubmissionsDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           dataById:props.match.params.id,
           loader:false,
           data: "",
           patients:[],
           SelectedPatient:"",
           showingP:true,
           showingData:false
           }
    }
    componentDidMount(){
        get_ASubmissionsDetailByID(this);
    }
    SetSelectedPatient(e){
        this.setState({
            SelectedPatient:this.state.patients.find(i=>i.ds_patid===e.currentTarget.value),
            showingP:true,
            showingData:false
        })

    }
    btnZuweisenClick(){
        patch_ASubmissionsPatient(this,this.state.SelectedPatient.ds_patid);
        this.setState({
            showingP:false,
           showingData:true
        })
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
                    {
                        this.state.showingP?
                            <div>
                            <p>Bitte wählen Sie zunachst in der Suchleiste einen Patienten aus, dem Sie die eingegangene Anamnese zuweisen mochten.</p>
                        </div>:null

                    }
                    {
                        this.state.showingData?
                        <div>
                        <p>Vorname: <b>{this.state.SelectedPatient!== "" && this.state.SelectedPatient.first_name}</b></p>
                       <p>Nachname: <b>{this.state.SelectedPatient !== ""  && this.state.SelectedPatient.last_name}</b></p>
                       <p>Geburtsdatum: <b>{this.state.SelectedPatient !== ""  && this.state.SelectedPatient.date_of_birth}</b></p>
                        </div>:null
                    }
                  
                    </div>

                </div>
              <div className="row">
                  <div className="col-md-12">
                      <select className="col-md-12" defaultValue="" onChange={(e)=>this.SetSelectedPatient(e)}>
                            <option value="" disabled={true}>
                              Bitte auswahlen...
                              </option>
                          {
                              this.state.patients.map((data,index)=>{
                                  return(
                                    <option value={data.ds_patid}>
                                      {data.ds_patid} {data.first_name} {data.last_name} (*{data.date_of_birth})
                                    </option>
  
                                  )
                              })
                          }
                          
                      </select>

                  </div>
              </div>
              {
                  this.state.showingData?
                  <div className="my-2 alert alert-success" role="alert">
                  <button aria-label="Close" className="close" data-dismiss="alert" type="button"  >
                        <span aria-hidden="true">×</span>
                        </button>
                        Die Anamnesedaten wurden erfolgreich {this.state.SelectedPatient!== "" && this.state.SelectedPatient.first_name} {this.state.SelectedPatient !== ""  && this.state.SelectedPatient.last_name}zugewiesen.
                </div>:null
              }
           

              <br/>
              <div className="row">
                  <div className="col-md-6">
                      <a href="/external/anamnesis_at_home_submissions">Zurück zur Übersicht</a>

                  </div>
                  <div className="col-md-6" style={{textAlign:"right"}}>

                      <Button variant="contained" color="primary" onClick={()=>this.btnZuweisenClick()}>Zuweisen</Button>

                  </div>

              </div>
            </div>

        )
    }
}