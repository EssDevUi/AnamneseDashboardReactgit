import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {getPracticeData_Practice,PostPracticeData_Practice} from '../api';

export default class external_practice_edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            AllowPriviousEntry:false,
            BlockingPassword:false,
            BugReports:false,
            BugReportTime:"1976-05-04T00:00:00.000Z",
            NavigateTo:"Detailpatients",
            Sendanalyticsdata:false,
            day:"",
            Month:"",
            Year:"",
            Hour:"",
            Minute:"",
            Logo:[],
            Name:"",
            Adress1:"",
            Adress2:"",
            City:"",
            Email:"",
            Phone:"",
            PostCode:"",
            Website:"",
            DangerZonePassword:""
        }
        this.SaveExternalPractice = this.SaveExternalPractice.bind(this);
        this.handlepicture=this.handlepicture.bind(this);
        this.handleChange=this.handleChange.bind(this);


    }
    componentDidMount(){
       
        getPracticeData_Practice(this);
      
      }
      handlepicture(files){

        if(files.currentTarget.files.length > 0){
            var file = files.currentTarget.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
              this.setState({
                Logo : event.target.result
              })
            };
            reader.readAsDataURL(file)
        }
      }
     
      handleChange(e) {
        if(e.target.type=="checkbox"){
            this.setState({
              [e.target.name]: e.target.checked
          });
          }else{
          this.setState({
              [e.target.name]: e.target.value
          });
          }
    }
      SaveExternalPractice(){
          PostPracticeData_Practice(this.state);
            this.props.history.push('/external/practice');
    }
    render(){
        return(
            <Card>
                <CardContent>
                    <div className="container" id="content">
                    <div className="row">
                    <div className="col-md-12">
    
    
                    <br/>
                    <h2>Praxis bearbeiten</h2>
                    <br/>
                    <div className="row">
                    <div className="col-md-8">
                    <div className="practice-edit-card">
                    <h5>Logo bearbeiten</h5>
                    <div className="form-group row file optional practice_logo"><div className="col-sm-9"><input className="file optional" type="file" name="Logo" id="practice_logo"  onChange={this.handlepicture}/></div></div>
                    </div>
    
                    <br/>
                    <br/>
                    <div className="practice-edit-card">
                    <h5>Praxis-Stammdaten</h5>
                    <div className="form-group row string required practice_name form-group-valid"><label className="col-sm-3 col-form-label string required" for="practice_name">Name der Praxis <abbr title="erforderlich">*</abbr></label><div className="col-sm-9"><input className="form-control string required" required="required" aria-required="true" type="text"  onChange={(e)=>this.handleChange(e)}   name="Name" id="practice_name"/></div></div>
                    <div className="form-group row string optional practice_address1 form-group-valid"><label className="col-sm-3 col-form-label string optional" for="practice_address1">Adresszeile 1</label><div className="col-sm-9"><input className="form-control string optional" type="text" onChange={(e)=>this.handleChange(e)} name="Adress1" id="practice_address1"/></div></div>
                    <div className="form-group row string optional practice_address2"><label className="col-sm-3 col-form-label string optional" for="practice_address2">Adresszeile 2</label><div className="col-sm-9"><input className="form-control string optional" type="text" onChange={(e)=>this.handleChange(e)} name="Adress2" id="practice_address2"/></div></div>
                    <div className="form-group row integer optional practice_zip_code form-group-valid"><label className="col-sm-3 col-form-label integer optional" for="practice_zip_code">Postleitzahl</label><div className="col-sm-9"><input className="form-control numeric integer optional" type="number" step="1" onChange={(e)=>this.handleChange(e)} name="PostCode" id="practice_zip_code"/></div></div>
                    <div className="form-group row string optional practice_city form-group-valid"><label className="col-sm-3 col-form-label string optional" for="practice_city">Stadt</label><div className="col-sm-9"><input className="form-control string optional" type="text" onChange={(e)=>this.handleChange(e)} name="City" id="practice_city"/></div></div>
                    <div className="form-group row tel optional practice_phone form-group-valid"><label className="col-sm-3 col-form-label tel optional" for="practice_phone">Telefon</label><div className="col-sm-9"><input className="form-control string tel optional" type="tel" onChange={(e)=>this.handleChange(e)} name="Phone" id="practice_phone"/></div></div>
                    <div className="form-group row email optional practice_email form-group-valid"><label className="col-sm-3 col-form-label email optional" for="practice_email">E-Mail</label><div className="col-sm-9"><input className="form-control string email optional" type="email" onChange={(e)=>this.handleChange(e)} name="Email" id="practice_email"/></div></div>
                    <div className="form-group row url optional practice_website form-group-valid"><label className="col-sm-3 col-form-label url optional" for="practice_website">Website</label><div className="col-sm-9"><input className="form-control string url optional" type="url" onChange={(e)=>this.handleChange(e)} name="Website" id="practice_website"/></div></div>
                    </div>
    
                    <br/>
                    <br/>
                    <div className="practice-edit-card mt-2">
                    <h5>Optionen (praxisweite Einstellungen)</h5>
                    <div className="ul list-group">
                    <div className="a list-group-item list-group-item-action flex-column">
                    <div className="align-items-start"></div>
                    <div className="d-flex w-100 justify-content-between">
                    <h7 className="mb-1">Sperrpasswort für Aufklärungsbögen</h7>
                    <p className="mb-1">
                    <input name="BlockingPassword" type="hidden" value="0"/><input className=" is-valid boolean optional" label="false" type="checkbox"  name="BlockingPassword" onChange={this.handleChange} id="practice_lock_for_consent_forms_option"/>
                    </p>
                    </div>
                    </div>
                    <div className="a list-group-item list-group-item-action flex-column">
                    <div className="align-items-start"></div>
                    <div className="d-flex w-100 justify-content-between">
                    <h7 className="mb-1">Zustimmung zum Senden von Fehlerberichten</h7>
                    <input name="BugReports" type="hidden" value="0"/><input className=" is-valid boolean optional" label="false" type="checkbox"  onChange={this.handleChange} name="BugReports" id="practice_consented_to_crash_reports"/>
                    </div>
                    <div className="small text-muted">Fehlerberichte enthalten technische Informationen, mit denen wir etwaige Abstürze nachvollziehen können. Für das Erheben und Übermitteln der Fehlerberichte nutzen wir den Dienst "App Center" von Microsoft. Im Rahmen der Fehlerberichte werden Informationen über Ihr iPad (z.B. eindeutige Gerätekennung, Modellversion, Version des Betriebssystems) sowie Ihre Athena-Benutzerkennung übermittelt. Zusätzlich wird Ihre IP-Adresse von Microsoft temporär gespeichert, um einen ordnungsgemäßen Betrieb des Dienstes zu gewährleisten.</div>
                    <div className="form-group row datetime optional disabled practice_consented_to_crash_reports_at form-group-valid"><label className="col-sm-3 control-label datetime optional disabled" for="practice_consented_to_crash_reports_at_3i">am</label><div className="col-sm-9"><div className="d-flex flex-row justify-content-between align-items-center"><select id="practice_consented_to_crash_reports_at_3i" name="practice[consented_to_crash_reports_at(3i)]" className="form-control mx-1 datetime optional disabled" disabled="disabled">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18" selected="selected">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    </select>
                    <select id="practice_consented_to_crash_reports_at_2i" name="practice[consented_to_crash_reports_at(2i)]" className="form-control mx-1 datetime optional disabled" disabled="disabled">
                    <option value="1">Januar</option>
                    <option value="2">Februar</option>
                    <option value="3" selected="selected">März</option>
                    <option value="4">April</option>
                    <option value="5">Mai</option>
                    <option value="6">Juni</option>
                    <option value="7">Juli</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">Dezember</option>
                    </select>
                    <select id="practice_consented_to_crash_reports_at_1i" name="practice[consented_to_crash_reports_at(1i)]" className="form-control mx-1 datetime optional disabled" disabled="disabled">
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021" selected="selected">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    </select>
                    — <select id="practice_consented_to_crash_reports_at_4i" name="practice[consented_to_crash_reports_at(4i)]" className="form-control mx-1 datetime optional disabled" disabled="disabled">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11" selected="selected">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    </select>
                    : <select id="practice_consented_to_crash_reports_at_5i" name="practice[consented_to_crash_reports_at(5i)]" className="form-control mx-1 datetime optional disabled" disabled="disabled">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55" selected="selected">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    </select>
                    </div></div></div>
                    </div>
                    <div className="a list-group-item list-group-item-action flex-column">
                    <div className="align-items-start"></div>
                    <div className="d-flex w-100 justify-content-between">
                    <h7 className="mb-1">Zustimmung zum Senden von Analysedaten</h7>
                    <input name="Sendanalyticsdata" type="hidden" value="0"/><input label="false" className="boolean optional" type="checkbox" value="1" name="Sendanalyticsdata" onChange={this.handleChange} id="practice_consented_to_analytics"/>
                    </div>
                    <div className="small text-muted">Die Analysedaten umfassen Informationen über Ihr iPad (z.B. Modellversion und Version des Betriebssystems) und zum Nutzungsverhalten. Letzteres umfasst die Häufigkeit der Nutzung sowie bestimmte Ereignisse, z.B. "Beratungsprotokoll erstellt". Die erfassten Daten werden pseudonymisiert erfasst und können von uns nicht Ihrem Benutzerkonto zugeordnet werden. Auch hier wird Ihre IP-Adresse von Microsoft temporär gespeichert, um einen ordnungsgemäßen Betrieb des Dienstes zu gewährleisten.<br/> Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</div>
                    Bis jetzt keine Zustimmung gegeben
                    </div>
                    <div className="a list-group-item list-group-item-action flex-column">
                    <div className="align-items-start"></div>
                    <div className="d-flex w-100 justify-content-between">
                    <h7 className="mb-1">Laden von früheren Eingaben erlauben</h7>
                    <p className="mb-1">
                    <input name="AllowPriviousEntry" type="hidden" value="0"/><input className=" is-valid boolean optional" label="false" type="checkbox"  name="AllowPriviousEntry" onChange={this.handleChange} id="practice_load_previous_anamnesis_data"/>
                    </p>
                    </div>
                    <div className="small text-muted">Wenn diese Einstellung aktiviert ist, können Patienten beim erneuten Ausfüllen desselben Anamnesebogens ihre früheren Angaben in allen Feldern vorausfüllen lassen.</div>
                    </div>
                    <div className="a list-group-item list-group-item-action flex-column">
                    <div className="align-items-start"></div>
                    <div className="d-flex w-100 justify-content-between">
                    <h7 className="mb-1">Nach dem Speichern eines Anamnesebogens navigieren zurück zur</h7>
                    <p className="mb-1">
                    <input type="radio" onChange={this.handleChange} value="patient_list" checked="checked" name="NavigateTo" id="practice_navigate_to_after_anamnesis_save_patient_list"/>
                    <label for="practice_navigate_to_after_anamnesis_save_patient_list">Liste mit allen Patienten</label>
                    <br/>
                    <input type="radio" onChange={this.handleChange} value="patient_details" name="NavigateTo" id="practice_navigate_to_after_anamnesis_save_patient_details"/>
                    <label for="practice_navigate_to_after_anamnesis_save_patient_details">Detailansicht des Patienten</label>
                    </p>
                    </div>
                    <div className="small text-muted">Diese Einstellung bestimmt, welche Seite nach dem Entsperren der App angezeigt wird.</div>
                    </div>
                    </div>
                    </div>
    
                    <br/>
                    <br/>
                    <div className="practice-edit-card">
                    <h5>Daten für die DSGVO-Formulare</h5>
                    <h6>Datenschutzbeauftragter der Praxis</h6>
                    <div className="form-group row string optional practice_dgsvo_data_protection_officer_name"><label className="col-sm-3 col-form-label string optional" for="practice_dgsvo_data_protection_officer_name">Name</label><div className="col-sm-9"><input className="form-control string optional" type="text" value="" name="practice[dgsvo_data_protection_officer_name]" id="practice_dgsvo_data_protection_officer_name"/></div></div>
                    <div className="form-group row string optional practice_dgsvo_data_protection_officer_address"><label className="col-sm-3 col-form-label string optional" for="practice_dgsvo_data_protection_officer_address">Anschrift</label><div className="col-sm-9"><input className="form-control string optional" type="text" value="" name="practice[dgsvo_data_protection_officer_address]" id="practice_dgsvo_data_protection_officer_address"/></div></div>
                    <div className="form-group row string optional practice_dgsvo_data_protection_officer_contact"><label className="col-sm-3 col-form-label string optional" for="practice_dgsvo_data_protection_officer_contact">Telefon / E-Mail</label><div className="col-sm-9"><input className="form-control string optional" type="text" value="" name="practice[dgsvo_data_protection_officer_contact]" id="practice_dgsvo_data_protection_officer_contact"/></div></div>
                    <h6>Externes Abrechnungsunternehmen</h6>
                    <div className="form-group row string optional practice_dgsvo_factoring_provider"><label className="col-sm-3 col-form-label string optional" for="practice_dgsvo_factoring_provider">Name &amp; Anschrift</label><div className="col-sm-9"><input className="form-control string optional" type="text" value="" name="practice[dgsvo_factoring_provider]" id="practice_dgsvo_factoring_provider"/></div></div>
                    </div>
    
                    <br/>
                    <br/>
                    <div className="practice-edit-card mt-2">
                    <h5>Danger Zone</h5>
                    <div className="alert alert-danger" role="alert">
                    Merken Sie sich Ihr neues Sperrpasswort gut.
                    </div>
                    <div className="form-group row string optional practice_anamnesis_pin form-group-valid"><label className="col-sm-3 col-form-label string optional" for="anamnesis_pin">Sperrpasswort</label><div className="col-sm-9"><input className="form-control string optional" onChange={this.handleChange} id="anamnesis_pin" type="text"  name="DangerZonePassword"/><small className="form-text text-muted">Nach dem erfolgreichen Ausfüllen eines Anamnesebogens muss ein Sperrpasswort eingegeben werden, um die Patientendaten vor unberechtigtem Zugriff zu schützen.</small></div></div>
                    </div>
    
                    <br/>
                    <div className="form-group row">
                    <div className="col-sm-10">
                    <input type="button" name="commit" value="Praxis aktualisieren" className="btn btn-primary" data-disable-with="Praxis aktualisieren" onClick={this.SaveExternalPractice}/>
                    </div>
                    </div>
                    </div>
                    </div>
    
                    <a href="/external/practice">Zurück</a>
    
                    </div>
                    </div>
                    </div>
                </CardContent>
             </Card> 
        )
    }
    
} 