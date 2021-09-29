import react from "react"
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AirplayIcon from '@material-ui/icons/Airplay';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {ServerUrl} from '../Config';
import {getUser_dashboard,toEdit_dashboard,createNew_dashboard} from "../api";
import Loader from "react-loader-spinner";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


const bluepaddbgStyle = {
    padding:"0.75rem 1.25rem",
    backgroundColor: "#015270",
    color:"#fff",
    borderRadius: "5px"
}
const borderCard = {
    padding:"25px",
    border:"1px solid #ccc",
    borderRadius: "5px"

}

export default class AFlows extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loader:false
        }
        this.handlebtnCreatnew=this.handlebtnCreatnew.bind(this);
    }
   
    componentDidMount=()=>{
        getUser_dashboard(this);

    }
    handlebtnCreatnew(){
        createNew_dashboard();
    }
    render(props) {
    return (
        <div >
              <Loader
                    type="TailSpin"
                    color="#015270"
                    height={100}
                    width={100}
                    visible={this.state.loader}
                    className="ourloader"
                  />
            <Card >
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                                                <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                            <Grid item>
                            <Typography variant="h4" bold align="left" >
                            Anamnese@Home-Links
                            </Typography>
                            </Grid>
                            <Grid item>
                           <a href="/external/anamnesis_at_home_flows/new"> <Button  variant="contained" color="primary" onClick={this.handlebtnCreatnew}> Neuen Anamnese@Home-Link anlegen</Button></a>

                            </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="p" bold align="left">
                                Veröffentlichen Sie diese Links auf Ihrer Website oder senden Sie sie Ihren Patienten per E-Mail. Mit dem Klick auf den Link können Ihre Patienten das Ausfüllen der ausgewählten Vorlagen starten.
                            </Typography>

                        </Grid>
                        

                    </Grid>
                    <Divider variant="middle" className="my-3" />
                    <TableContainer component={Paper}>
      <Table className="table table-bordered" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{width:"130px"}}>Name</TableCell>
            <TableCell style={{width:"450px"}}>Link</TableCell>
            <TableCell >Vorlagen</TableCell>
            <TableCell style={{width:"130px"}} >Für Einladungen aus dem DS-Win nutzen?	</TableCell>
            <TableCell style={{width:"130px"}} ></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         {this.state.data.map((i,index)=>{
                 return(
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              {i.name}	
              </TableCell>
              <TableCell align="right">
                  <Link >
                  {i.link}</Link>
              </TableCell>
              <TableCell style={{textAlign:"left"}} align="right">
              {i.vorlagen?.map((J,indexa)=>{
                  return(
                    <span>{J.templates}, </span>
                  )
              })}
              </TableCell>
              <TableCell align="right">
                  {i.default==true?(<CheckBoxIcon />):(<CheckBoxOutlineBlankIcon/>)}
                  </TableCell>
              <TableCell align="right">
                  {/* <a id={i.TemplateId} href="/external/anamnesis_at_home_flows/1061/edit" onClick={(e)=>toEdit_dashboard(e)}> */}
                 
                  <a href={"/external/anamnesis_at_home_flows/"+i.id+"/edit"}>
                  Bearbeiten

                  </a>
              </TableCell>
            
            </TableRow>
        );
    })
         }
            
        </TableBody>
      </Table>
    </TableContainer>
   
                </CardContent>
            </Card>
        </div>
    )
}}