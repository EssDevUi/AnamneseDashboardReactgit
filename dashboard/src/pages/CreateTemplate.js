import { render } from "@testing-library/react";
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { ServerUrl } from '../Config';
import Loader from "react-loader-spinner";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import {newrecord_Template_SheetsTabs,TemplateType_Template_SheetsTabs} from "../api";
import {getrecordByid_Template_SheetsTabs} from "../api";


export default class CreateTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            DropdownValue: "",
            TemplateTypes:[],
            loader: false,
            id:0
        }

    }
    componentDidMount() {
        if(this.props.match.params.id!==null||this.props.match.params.id!=='')
        {
            this.setState({
                id: this.props.match.params.id
            })
            getrecordByid_Template_SheetsTabs(this.props.match.params.id,this);
            TemplateType_Template_SheetsTabs(this);
        }
        else{
            TemplateType_Template_SheetsTabs(this);
        }
    }
    handleChange = (event) => {
        console.log([event.target.name]+ " " + " " + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    createTemplate = (e) => { 
        
        newrecord_Template_SheetsTabs(this)
    }

    render(props) {
        return (
            <>
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
                        <Grid container spacing={5}>
                            <Grid item xs={12} className="pb-0">
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Typography className="ml-2" variant="h4" bold align="center" >
                                            Neue Vorlage
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <div className=" ">

                                    <div className="col-sm-6 mb-3 pl-0">
                                        <TextField className="w-100" name="title" onChange={this.handleChange} value={this.state.title} size="small" label="Vorname *" id="outlined-basic" variant="outlined" />
                                    </div>
                                    <div className="col-sm-6 pl-0">
                                        <FormControl className="w-100">
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                
                                                name="DropdownValue"

                                                onChange={this.handleChange}
                                                value={this.state.DropdownValue}
                                            >
                                                 {this.state.TemplateTypes.map((element, index) => {
                                                        return <MenuItem value={element.id}>{element.categoryName}</MenuItem>
                                                    })}
                                                {/* <MenuItem value={1}>Aufklärungsbögen</MenuItem>
                                                <MenuItem value={2}>Anamnesebögen</MenuItem> */}
                                            </Select>
                                        </FormControl>                               </div>
                                    <div className="d-flex mt-3 justify-content-between align-items-center">
                                        <a href="/external/document_templates">Zurück</a>
                                        <Button variant="contained" color="primary" onClick={this.createTemplate}>
                                        Vorlage erstellen
                                        </Button>
                                    </div>
                                </div>
                            </Grid>


                        </Grid>


                    </CardContent>
                </Card>
            </>
        )

    }
}