import { render } from "@testing-library/react";
import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import SheetsTabs from "./SheetsTabs"
import axios from 'axios';
import {ServerUrl} from '../Config';
import Loader from "react-loader-spinner";

import {newrecord_Template_SheetsTabs,GetAllSheetsData_Template_SheetsTabs} from "../api";

export default class Templates extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                array : [],
                loader:false
            }

        }
        componentDidMount(){
            GetAllSheetsData_Template_SheetsTabs(this);
        }
      
    render(props){
        return(
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="pb-0">
                                                <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                            <Grid item>
                            <Typography variant="h4" bold align="left" >
                            Vorlagen                            </Typography>
                            </Grid>
                            <Grid item>
                            <Button  variant="contained" onClick={(e)=>newrecord_Template_SheetsTabs(e)} color="primary"> Neue Vorlage erstellen</Button>

                            </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <div className="d-flex">
                           <p className="mr-1 mb-0">
                           Springe zu     
                               </p>   
                               <Link>
                               Aufklärungsbögen
                               </Link>   
                               <span className="mx-2">|</span>                  
                               <Link>
                               Anamnesebögen
                               </Link>           

                            </div>

                        </Grid>
                        

                    </Grid>
               
            <SheetsTabs title="Aufklärungsbögen"  list1data={this.state.array.templateid2} list2data={this.state.array.templateid2} />
            <SheetsTabs title="Anamnesebögen" list1data={this.state.array.templateid1} list2data={this.state.array.templateid1} />
            </CardContent>
            </Card>
            </>
        )

    }
}