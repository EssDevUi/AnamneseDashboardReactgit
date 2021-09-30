import { render } from "@testing-library/react";
import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {deleterecord_Template_SheetsTabs,duplicaterecord_Template_SheetsTabs} from "../api";


const bglight = {
    backgroundColor: "#d6d6d6",
    padding: ".75rem 1.25rem"

}


const firstTab = (data,objState) => {
    var array = [];
    var elements=data;
if(data.length>0){
    for (var i = 0; i <= data.length - 1; i++) {
    if(elements[i].default===true){

        array.push(
           
            <li class="list-group-item " key={elements[i].id}>
                <div class="d-flex align-items-center justify-content-between">
                    <span>{elements[i].templates}</span>
                    <Link   onClick={(e) => duplicaterecord_Template_SheetsTabs(e,elements[i])}>
                    Duplizieren
                    </Link>
                </div>
            </li>
          
        );
    }
    }
}
 
    return array;
}
const scndTab = (data,objState) => {
    var elements = data;
    var array = [];
    for (var i = 0; i <= data.length - 1; i++) {
        if(elements[i].default===false){
        array.push(
           
            <li class="list-group-item " key={elements[i].id}>
                  <div class="d-flex align-items-center justify-content-between">
                    <span>{elements[i].templates}</span>
                   <div>
                   <Link id={elements[i].id} onClick={(e) => duplicaterecord_Template_SheetsTabs(e)}>
                    Duplizieren
                    </Link>
                    {/* onClick={(e) => grtrecordByid_Template_SheetsTabs(e) */}
                   <a className="mx-3" id={elements[i].id}  href={`/external/document_templates/CreateTemplate/${elements[i].id}`}> 
                   Bearbeiten
                    </a>
                   <Link className="text-danger" id={elements[i].id}  onClick={(e) =>deleterecord_Template_SheetsTabs(e,objState)}>
                   Löschen
                    </Link>
                   </div>
                </div>
            </li>
          
        );
        }
    }
    return array;
}

export default function SheetsTabs(props,objState) {
        return(
            <>
         
         <Typography className="mb-3" variant="h4" bold align="left" >
         {props.templates}
                            </Typography>
            <Card  className="mb-3">
                <CardContent style={{ padding: 0 }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className="pb-0">
                            <div className="p-3" style={bglight}>
                                <Typography variant="p" bold align="left">
                                Athena-Standardvorlagen
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <ul class="list-group">
                                        {props.list1data !== undefined ?   firstTab(props.list1data,props.objState): ""}

                                  </ul>

                </CardContent>
            </Card>
            <Card  className="mb-3">
                <CardContent style={{ padding: 0 }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className="pb-0">
                            <div className="p-3" style={bglight}>
                                <Typography variant="p" bold align="left">
                                Eigene Vorlagen
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <ul class="list-group">
                                        {props.list2data !== undefined ?   scndTab(props.list2data,props.objState): ""}

                                  </ul>

                </CardContent>
            </Card>
            </>
        );

    
}
