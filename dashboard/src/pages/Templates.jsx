import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import SheetsTabs from "./SheetsTabs"

import Loader from "react-loader-spinner";

import {GetAllSheetsData_Template_SheetsTabs} from "../api";

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
                            <Typography variant="h4"  align="left" >
                            Vorlagen                            </Typography>
                            </Grid>
                            <Grid item>
                            <a  variant="contained" className="btn" href="/external/document_templates/CreateTemplate" color="primary"> Neue Vorlage erstellen</a>
                            {/* <a  variant="contained" onClick={(e)=>newrecord_Template_SheetsTabs(e)} color="primary"> Neue Vorlage erstellen</a> */}

                            </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <div className="d-flex">
                           <p className="mr-1 mb-0">
                           Springe zu     
                               </p>   
                               <Link>
                               Aufkl??rungsb??gen
                               </Link>   
                               <span className="mx-2">|</span>                  
                               <Link>
                               Anamneseb??gen
                               </Link>           

                            </div>

                        </Grid>
                        

                    </Grid>
               
            <SheetsTabs title="Aufkl??rungsb??gen"  list1data={this.state.array.templateid2} list2data={this.state.array.templateid2} objState={this} />
            <SheetsTabs title="Anamneseb??gen" list1data={this.state.array.templateid1} list2data={this.state.array.templateid1} objState={this}/>
            </CardContent>
            </Card>
            </>
        )

    }
}