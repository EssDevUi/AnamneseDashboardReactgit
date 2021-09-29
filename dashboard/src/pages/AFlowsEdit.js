import react from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import FolderIcon from '@material-ui/icons/Folder';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Sndcard from "./sndcard"
import InputLabel from '@material-ui/core/InputLabel';
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
  } from 'react-sortable-hoc';
  import arrayMove from 'array-move';
import Thirdcard from "./thirdcard"
import Fourthcard from "./fourthCard"
import React, { useState, useEffect } from 'react';
import {ServerUrl} from "../Config";
import {get_dashboard2,SaveMoreSettings_dashboard2,Add_dashboard2,RemoveTemplatefromLink_dashboard2,RemoveTemplate_dashboard2_fourtCard,MoveUp_dashboard2,Movedown_dashboard2,Move_dashboard2} from "../api";
import {
    BrowserRouter as Router,
    params
  } from "react-router-dom";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const bluepaddbgStyle = {
    padding: "0.75rem 1.25rem",
    backgroundColor: "#015270",
    color: "#fff",
    borderRadius: "5px"
}
const borderCard = {
    padding: "25px",
    border: "1px solid #ccc",
    borderRadius: "5px"

}
const bglight = {
    backgroundColor: "#d6d6d6"
}

const SortableItem = sortableElement(({value,StateObj}) =>
<ListItem className="border mb-3"  >
    <div className=" col-12 col-sm-12 adjustIcons col-lg-2 col-md-3">
    <ListItemAvatar className="mr-3">
    <Grid container direction="row">

        <DragHandle />

        <ArrowUpwardIcon className="mx-3"  onClick={(e) => MoveUp_dashboard2(value.id,e,value.sortIndex,StateObj)}/>
        
        <ArrowDownwardIcon onClick={(e) => Movedown_dashboard2(value.id,e,StateObj)}/>

    </Grid>
</ListItemAvatar>
        </div> 
        <div className="col-2 col-sm-12 col-lg-1 col-md-1">
        <ListItemText
    primary={value.sortIndex}
    bold
/>
        </div>
    <div className="col-10 col-sm-12 col-lg-6 col-md-5">
            <div className="adjustTextinSm">
                        

<ListItemText
    primary={value.templates}
    bold
/>
                </div>
</div> 
    <div className="col-sm-12 col-lg-3 col-md-3 position-relative adjustinSmallIcon">
    <ListItemSecondaryAction>
    <Link id={value.homeflowTemplatesID} name="RemoveLink" onClick={(e) => RemoveTemplatefromLink_dashboard2(e,StateObj)}>
        Entfernen
    </Link>
</ListItemSecondaryAction>
</div> 


</ListItem>
 
 
 );

const SortableContainer = sortableContainer(({children}) => {
  return <List dense={false}>{children}</List>;
});
const DragHandle = sortableHandle(() => <ZoomOutMapIcon />);

export default class  AFlowsEdit extends React.Component {

constructor(props){
    super(props);
    this.state = {
             anamnesis_at_home_flow  : "",
             Vorlagen:[],
            dataById:props.match.params.id,
            template:[],
            select:null
            }
            
    }
    componentDidMount(){
        get_dashboard2(this);
    }
 
   
  onSortEnd = ({oldIndex, newIndex}) => {

    this.setState(({Vorlagen}) => ({
        Vorlagen: arrayMove(Vorlagen, oldIndex, newIndex),

    }));
//   console.log(this.state.Vorlagen);

    for (let i = 0; i < this.state.Vorlagen.length; i++) {
        this.state.Vorlagen[i].sortIndex = i+1;
    }
    this.setState({
        Vorlagen: this.state.Vorlagen
    })

    Move_dashboard2(oldIndex,newIndex)
  };
   handleChange = (event) => {
    this.setState({
        select:event.target.value
    });
  };
  handleThirdCardChangeEvent = (e) => {
            let status = this.state.anamnesis_at_home_flow;
            this.setState({

                anamnesis_at_home_flow : {
                    ...this.state.anamnesis_at_home_flow,
                    [e.target.name] : e.target.name === "default" ? e.target.checked :  e.target.value,
                }
            })
    console.log(this.state.anamnesis_at_home_flow)
  }
  SaveMoresettings = (e) => { 
      SaveMoreSettings_dashboard2(this);
  }

      render(props){
    return (
        <div >

            <Typography className="mb-3" variant="h4" bold align="left" >
                Anamnese@Home-Link: {this.state.anamnesis_at_home_flow.name }
                            </Typography>
            <Card  className="mb-3">
                <CardContent style={{ padding: 0 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="pb-0">
                            <div className="p-3" style={bglight}>
                                <Typography variant="p" bold align="left">
                                    Vorlagen in diesem Anamnese@Home-Link
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="Body py-0">
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                    Veröffentlichen Sie diese Links auf Ihrer Website oder senden Sie sie Ihren Patienten per E-Mail. Mit dem Klick auf den Link können Ihre Patienten das Ausfüllen der ausgewählten Vorlagen starten.
                            </Typography>
                                <div>
                             
                                    <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
                                        { this.state.Vorlagen?.map((value, index) => (
                                        <SortableItem style={{listStlye:"none"}} key={`item-${value}`} index={index} value={value} StateObj={this} />
                                        ))}
                                    </SortableContainer>
                                   <div className="pb-2">
                                   <Grid container spacing={3} className="my-2">
                                        <Grid xs={12} md={3}>
                                            <div className="d-flex pl-3">
                                                <AddCircleOutlineIcon />
                                                <Typography className="ml-2" variant="p" bold align="left">
                                                    Another template
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid xs={12} md={7}>
                                            <div>
                                                {/* <Typography className="ml-2" variant="p" bold align="left">
                                                    Athena standard for app: blank information sheet            
                                                                    </Typography> */}
                                                <FormControl fullWidth>
                                                <InputLabel id="select-label">Athena standard for app: blank information sheet</InputLabel>
                                                    <Select
                                                    // value={this.state.select}
                                                    onChange={this.handleChange}
                                                    labelId="select-label"
                                                    
                                                    //   displayEmpty
                                                    //   className={classes.selectEmpty}
                                                    //   inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                    {/* <MenuItem value="1">
                                                    <em>Athena standard for app: blank information sheet</em>
                                                    </MenuItem> */}
                                                 
                                                    {this.state.template.map((element, index) => {
                                                        return <MenuItem value={element.id}>{element.title}</MenuItem>
                                                    })}
                                                    {/* <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem> */}
                                                    </Select>
                                                </FormControl>
                                                {/* <FormControl fullWidth >
                                                    <Select
                                                         value=""
                                                    >
                                                        <MenuItem value="">
                                                            <em>Athena standard for app: blank information sheet</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl> */}
                                            </div>
                                        </Grid>
                                        <Grid xs={12} md={2}>
                                            <div className="text-right pr-3 my-2 ml-2 ">

                                                <Button variant="contained" fullWidth color="primary" onClick={(e)=>Add_dashboard2(this)}> Add</Button>
                                            </div>

                                        </Grid>
                                    </Grid>
                                   </div>
                                </div>

                            </div>
                        </Grid>


                    </Grid>


                </CardContent>
            </Card>
            <Sndcard anamnesis_at_home_flow={this.state.anamnesis_at_home_flow}/>
            <Thirdcard anamnesis_at_home_flow={this.state.anamnesis_at_home_flow} updateonChange={this.handleThirdCardChangeEvent} SaveData={this.SaveMoresettings} />
            <Fourthcard  anamnesis_at_home_flow={this.state.anamnesis_at_home_flow} StateProp={this} />
            <a
               style={{marginRight:"8px"}}
               href="/external/anamnesis_at_home_flows"
             >
               Zurück
             </a>
        </div>
    );
}
}
