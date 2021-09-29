import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {get_appOptions,post_appOptions} from "../api";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const width = {
    width: "10%"
}



export default class WizAppOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps:  ['Praxisdaten', ' Praxislogo', ' App-Einstellungen' , " Sperrpasswort"],
            id:1,
            LastUrlIndex :"",
            AllowPriviousEntry:false,
            BlockingPassword:false,
            BugReports:false,
            BugReportTime:"1976-05-04T00:00:00.000Z",
            NavigateTo:"Detailpatients",
            Sendanalyticsdata:false,
            day:1,
            Month:1,
            Year:2021,
            Hour:12,
            Minute:0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.SaveAppOptions = this.SaveAppOptions.bind(this)
        
    }

    componentDidMount(){
        const UrlParameter=this.props.match.path.replace("/external/","");
       
        this.setState({
            LastUrlIndex:UrlParameter
        })
        get_appOptions(this);
      
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
    SaveAppOptions(){
        post_appOptions(this.state);
        if(this.state.LastUrlIndex==="welcome_wizard/app_options")
        {
            this.props.history.push('/external/welcome_wizard/anamnesis_pin');
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
           {this.state.LastUrlIndex === "welcome_wizard/app_options" ?  
                  <div className="mb-3">
                  <Stepper activeStep={2} alternativeLabel>
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
                                Praxisweite App-Einstellungen bearbeiten
                            </Typography>
                            <p>
                                Die folgenden Einstellungen betreffen die Benutzung der iPad-App und gelten praxisweit.
                                Sie können die Einstellungen jederzeit wieder ändern und Ihr Einverständnis zu einzelnen Punkten zurückziehen. Wenn Sie einmal dem Senden von Fehlerberichten und Analysedaten zugestimmt haben, sehen Sie in Ihren Stammdaten wann die Zustimmung gegeben wurde.
                            </p>
                            <p>Wenn die Option "Sperrpasswort für Aufklärungsbögen" ausgewählt ist, braucht es nach dem Ausfüllen und Speichern eines Aufklärungsbogens das Sperrpasswort, um das iPad wieder benutzen zu können. Ihr individuelles Sperrpasswort legen Sie im nächsten Schritt fest.                         </p>
                        </div>
                        <div className=" border w-75 p-3 mediaQueryXS">
                            <Typography variant="h6" className="mb-3 font-weight-bold" bold align="left" >
                                Optionen (praxisweite Einstellungen)


                        </Typography>
                            <div className="">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Sperrpasswort für Aufklärungsbögen</span>
                                            <FormControlLabel
                                                className="m-0"
                                                control={
                                                    <Checkbox
                                                        defaultChecked={this.state.BlockingPassword}
                                                        color="primary"
                                                        onChange={this.handleChange}
                                                        name="BlockingPassword"
                                                    />
                                                }
                                                label=""
                                            />
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6>Zustimmung zum Senden von Fehlerberichten</h6>
                                                <p style={{ fontSize: "11px" }}>
                                                    Fehlerberichte enthalten technische Informationen, mit denen wir etwaige Abstürze nachvollziehen können. Für das Erheben und Übermitteln der Fehlerberichte nutzen wir den Dienst "App Center" von Microsoft. Im Rahmen der Fehlerberichte werden Informationen über Ihr iPad (z.B. eindeutige Gerätekennung, Modellversion, Version des Betriebssystems) sowie Ihre Athena-Benutzerkennung übermittelt. Zusätzlich wird Ihre IP-Adresse von Microsoft temporär gespeichert, um einen ordnungsgemäßen Betrieb des Dienstes zu gewährleisten.
                                                </p>
                                            </div>
                                            <FormControlLabel
                                                className="m-0"
                                                control={
                                                    <Checkbox
                                                        color="primary"
                                                        defaultChecked={this.state.BugReports}
                                                        onChange={this.handleChange}
                                                        name="BugReports"
                                                    />
                                                }
                                                label=""
                                            />
                                        </div>
                                        <div className="d-flex justify-content-end align-items-center">
                                            <select className="form-control" name="day" value={this.state.day} onChange={this.handleChange} style={width}>
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
                                            </select>

                                            <select className="form-control mx-3" name="Month" value={this.state.Month} onChange={this.handleChange}  style={width}>
                                                <option value="1">Januar</option>
                                                <option value="2">Februar</option>
                                                <option value="3" >März</option>
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
                                            <select className="form-control " name="Year" value={this.state.Year} onChange={this.handleChange}  style={width}>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                            </select>
                                            <span className="mx-2">---</span>
                                            <select className="form-control mr-3" name="Hour" value={this.state.Hour} onChange={this.handleChange}  style={width}>
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
                                            </select>
                                            <select className="form-control " name="Minute" value={this.state.Minute} onChange={this.handleChange}  style={width}>
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
                                                <option value="55">55</option>
                                                <option value="56">56</option>
                                                <option value="57">57</option>
                                                <option value="58">58</option>
                                                <option value="59">59</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                                <h6>Zustimmung zum Senden von Analysedaten</h6>
                                                <p style={{ fontSize: "11px" }}>
                                                Die Analysedaten umfassen Informationen über Ihr iPad (z.B. Modellversion und Version des Betriebssystems) und zum Nutzungsverhalten. Letzteres umfasst die Häufigkeit der Nutzung sowie bestimmte Ereignisse, z.B. "Beratungsprotokoll erstellt". Die erfassten Daten werden pseudonymisiert erfasst und können von uns nicht Ihrem Benutzerkonto zugeordnet werden. Auch hier wird Ihre IP-Adresse von Microsoft temporär gespeichert, um einen ordnungsgemäßen Betrieb des Dienstes zu gewährleisten.
                                                Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
                                                </p>
                                            </div>
                                            <FormControlLabel
                                                className="m-0"
                                                control={
                                                    <Checkbox
                                                        color="primary"
                                                        defaultChecked={this.state.Sendanalyticsdata}
                                                        onChange={this.handleChange}
                                                        name="Sendanalyticsdata"
                                                    />
                                                }
                                                label=""
                                            />
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                                <h6>Laden von früheren Eingaben erlauben</h6>
                                                <p style={{ fontSize: "11px" }}>
                                                Wenn diese Einstellung aktiviert ist, können Patienten beim erneuten Ausfüllen desselben Anamnesebogens ihre früheren Angaben in allen Feldern vorausfüllen lassen.

                                                </p>
                                            </div>
                                            <FormControlLabel
                                                className="m-0"
                                                control={
                                                    <Checkbox
                                                        color="primary"
                                                        defaultChecked={this.state.AllowPriviousEntry}
                                                        onChange={this.handleChange}
                                                        name="AllowPriviousEntry"
                                                    />
                                                }
                                                label=""
                                            />
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                                <h6>Nach dem Speichern eines Anamnesebogens navigieren zurück zur</h6>
                                                <p style={{ fontSize: "11px" }}>
                                                Diese Einstellung bestimmt, welche Seite nach dem Entsperren der App angezeigt wird
                                                </p>
                                            </div>
                                            <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" value={this.state.NavigateTo} name="NavigateTo" onChange={this.handleChange}>
                                                <FormControlLabel value="allpatients"  control={<Radio />} label="Liste mit allen Patienten" />
                                                <FormControlLabel value="Detailpatients" control={<Radio />} label="Detailansicht des Patienten" />
                                            </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        {this.state.LastUrlIndex === "practice/options_card" ? 
                        <div className="text-right">
                        <Button variant="contained" color="primary" onClick={this.SaveAppOptions} >Save</Button>
                        </div>:null
                                            }
                    </CardContent>
                </Card>

            </div>
             {this.state.LastUrlIndex === "welcome_wizard/app_options" ?
             <div className="d-flex justify-content-between align-items-center">
             <a
               disabled={this.state.activeStep === 0}
               // onClick={this.handleBack}
               style={{marginRight:"8px"}}
               href="/external/welcome_wizard/practice_logo"
             >
               Zurück
             </a>
             
             <Button variant="contained" color="primary" onClick={this.SaveAppOptions}>
               Weiter
             </Button>
           </div>:null
                                        }
                                        </div>
        )

    }
}