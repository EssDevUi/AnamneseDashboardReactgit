
import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Postanamnesis_at_home_flow_new} from "../api";
import Loader from "react-loader-spinner";

export default class anamnesis_at_home_flow_new extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            notification_email:"",
            defaultt:"",
            display_email:"",
            display_phone:"",
            loader:false

        }
        this.handleChange=this.handleChange.bind(this);
        this.PostData=this.PostData.bind(this);

    }
    handleChange(e) {

        if(e.target.type==="checkbox"){
            this.setState({
              [e.target.name]: e.target.checked
          });
          }else{
          this.setState({
              [e.target.name]: e.target.value
          });
          }
    }

    componentDidMount(){
        
    }
    async PostData(){
       await Postanamnesis_at_home_flow_new(this);
        this.props.history.push('/external/anamnesis_at_home_flows');
    }
    render(){
        return(
            
            <Card>
                <CardContent>
                <Loader
                    type="TailSpin"
                    color="#015270"
                    height={100}
                    width={100}
                    visible={this.state.loader}
                    className="ourloader"
                  />
                <div className="container" id="content">
                    <div className="row">
                    <div className="col-md-12">
                    <br/>
                    <h1>Neuen Anamnese@Home-Link anlegen</h1>
                    <div className="card mt-3">
                    <div className="card-header">
                    Einstellungen
                    </div>
                    <div className="card-body">
                    <input name="utf8" type="hidden" value="✓"/><input type="hidden" name="authenticity_token" value="UlpGI63OCwI4fiLe9B6Wa0qSalX0FfpYloU28jMFRDp9U9Q2OzeR53UkgZNMr4TpzoJx9wq-zsE2pLXCvY1swg"/><p>
                    Der Name des Anamnese@Home-Links hilft Ihnen bei der Zuordnung. Er wird Ihren Patienten nicht angezeigt. Bitte geben Sie einen Namen ein.
                    </p><div className="form-group row string required anamnesis_at_home_flow_name"><label className="col-sm-3 col-form-label string required" for="anamnesis_at_home_flow_name">Name <abbr title="erforderlich">*</abbr></label><div className="col-sm-9"><input className="form-control string required" required="required" aria-required="true" type="text" name="name" onChange={this.handleChange} id="anamnesis_at_home_flow_name"/></div></div>
                    <p></p>
                    <p>
                    Standardmäßig werden Benachrichtigungen über neu eingegangene Anamnesen an die hinterlegte E-Mail-Adresse Ihrer Praxis gesendet. Hier können Sie eine abweichende E-Mail-Adresse eingeben, an die die Benachrichtigungen verschickt werden.
                    </p><div className="form-group row email required anamnesis_at_home_flow_notification_email"><label className="col-sm-3 col-form-label email required" for="anamnesis_at_home_flow_notification_email">E-Mail <abbr title="erforderlich">*</abbr></label><div className="col-sm-9"><input className="form-control string email required"  required="required" aria-required="true" onChange={this.handleChange} type="email" name="notification_email" id="anamnesis_at_home_flow_notification_email"/></div></div>
                    <p></p>
                    <p>
                    Für DS-Win-Kunden: Legen Sie hier fest, ob Sie diesen Link für die individualisierten Einladungen zu Anamnese@Home nutzen möchten. Sie können die individualisierten Einladungen im DS-Win über das Athena-Menü an Ihre Patienten schicken.
                    </p><div className="form-group row boolean optional anamnesis_at_home_flow_default"><label className="col-sm-3"><label className="boolean optional" for="anamnesis_at_home_flow_default">Für Einladungen aus dem DS-Win nutzen?</label></label><div className="col-sm-9"><div className="form-check"><input name="anamnesis_at_home_flow[default]" type="hidden" value="0"/><input className="form-check-input boolean optional" onChange={this.handleChange} type="checkbox" value="1" name="defaultt" id="anamnesis_at_home_flow_default"/></div></div></div>
                    <p></p>
                    <hr/>
                    <h5 className="mt-2">Kontaktmöglichkeiten für Ihre Patienten</h5>
                    <p>
                    Legen Sie hier fest, welche E-Mail-Adresse und Telefonnummer Ihren Patienten in der individualisierten Einladungs-E-Mail angezeigt werden sollen.
                    </p><div className="form-group row email optional anamnesis_at_home_flow_display_email"><label className="col-sm-3 col-form-label email optional" for="anamnesis_at_home_flow_display_email">E-Mail</label><div className="col-sm-9"><input className="form-control string email optional"  type="email" name="display_email" onChange={this.handleChange} id="anamnesis_at_home_flow_display_email"/></div></div>
                    <p></p>
                    <p>
                    </p><div className="form-group row tel optional anamnesis_at_home_flow_display_phone"><label className="col-sm-3 col-form-label tel optional" for="anamnesis_at_home_flow_display_phone">Telefonnummer</label><div className="col-sm-9"><input className="form-control string tel optional" placeholder="Es wird gerade keine Telefonnummer angezeigt." type="tel" onChange={this.handleChange} name="display_phone" id="anamnesis_at_home_flow_display_phone"/></div></div>
                    <p></p>
                    <div className="text-right">
                    <input type="submit" name="commit" value="Weiter" className="btn btn-primary btn-block col-sm-1 " onClick={this.PostData} style={{borderRadius:"15px"}} data-disable-with="Weiter"/>
                    </div>
                    </div>
                    </div>

                    <div>
                    <a href="/external/anamnesis_at_home_flows">Zurück</a>
                    </div>

                    </div>
                    </div>
                    </div>
                </CardContent>
            </Card>
        )
    }
}