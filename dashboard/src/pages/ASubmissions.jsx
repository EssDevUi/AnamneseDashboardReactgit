import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import MUIDataTable from "../../MUI";
import MUIDataTable from "mui-datatables";
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';
import axios from 'axios';
import {get_MedicalHistory} from '../api';
import Loader from "react-loader-spinner";


export default class ASubmissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loader:false
        }
    this.DocumentTemplate=this.DocumentTemplate.bind(this);

    }
    DocumentTemplate=(e)=>{
        const id=e.currentTarget.id;
        this.props.history.push('/external/anamnesis_at_home_submissions/'+id);
    }
    componentDidMount(){
        get_MedicalHistory(this);
    }
    render(props) {
        const options = {
            filterType: 'checkbox',
            selectableRows: false,
            sortOrder: {
                name: 'id',
                direction: 'asc'
              }
        };
        const columns = [
            {name: "id", label: "ID"
           },
            {name: "medicalHistoryLink", label: "Anamnese-Link"},
            {name: "first_name", label: "Vorname"},
            {name: "last_name", label: "Nachname"},
            {name: "date_of_birth", label: "Geburtsdatum"},
            {name: "created_at", label: "Eingegangen am"},
            {name: "id", label: "Patientennummer",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    const record=this.state.data.find(i=>i.id===value)
                    if(record.pvs_patid===""){
                        return (
                            <Button variant="contained" id={record.id} onClick={(e)=>this.DocumentTemplate(e)} color="primary" style={{borderRadius:"15px"}} >
                                Zuweisen
                            </Button>
                    )
                    }else{
                        return(record.pvs_patid)
                    }
                   
                },
            },
              
            }

        ];
        
        
        return (
            <div className="mb-3">
                 <Loader
                    type="TailSpin"
                    color="#015270"
                    height={100}
                    width={100}
                    visible={this.state.loader}
                    className="ourloader"
                  />
                <Card>
                    <CardContent>
                    <Typography variant="h4" className="mb-3" bold align="left" >
                    Nicht zugewiesene Anamnesen
                    </Typography>
                    <div className="d-flex mb-3">
                           <p className="mr-1 mb-0">
                           <FilterListIcon />     
                               </p>   
                               <Link>
                               Alle Eingegangene Anamnesen anzeigen
                               </Link>   
                               <span className="mx-2">|</span>                  
                               <Link>
                               Zugewiesene Anamnesen anzeigen
                               </Link>           

                            </div>
                    <MUIDataTable
                        title={""}
                        className="shadow-none border"
                        data={this.state.data}
                        columns={columns}
                        options={options}
                    />
                    </CardContent>
                </Card>
                
            </div>
        )

    }
}