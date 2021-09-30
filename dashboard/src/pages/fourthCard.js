import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import Button from '@material-ui/core/Button';
import {RemoveTemplate_dashboard2_fourtCard} from "../api";

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });


// const bluepaddbgStyle = {
//     padding: "0.75rem 1.25rem",
//     backgroundColor: "#015270",
//     color: "#fff",
//     borderRadius: "5px"
// }
// const borderCard = {
//     padding: "25px",
//     border: "1px solid #ccc",
//     borderRadius: "5px"

// }
const bglight = {
    backgroundColor: "#d6d6d6"
}
export default function Fourthcard(props) {
    // const classes = useStyles();
    return (
        <div className="mb-3">


            <Card>
                <CardContent style={{ padding: 0 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="pb-0">
                            <div className="p-3" style={bglight}>
                                <Typography variant="inherit"  align="left">
                                    Löschen des Anamnese@Home-Links
                            </Typography>
                            </div>




                        </Grid>

                        <Grid item xs={12} className="Body py-0">
                            <div className="p-3">
                                <Typography variant="inherit"  align="left">
                                    Hier können Sie diesen Anamnese@Home-Link löschen. Bitte beachten Sie, dass er nicht wiederhergestellt werden kann.
                                </Typography>
                         

                            </div>
                        </Grid>


                        </Grid>
                            <div className="p-3" >
                            <Button variant="contained" name="RemoveTemplateFourthCard" getattr={props.anamnesis_at_home_flow.id} id={props.anamnesis_at_home_flow.id} onClick={(e) => RemoveTemplate_dashboard2_fourtCard(e,props.StateProp)} color="secondary"  > Diesen Anamnese@Home-Link un­wi­der­ruf­lich löschen</Button>

                            </div>

                </CardContent>
            </Card>
        </div>
    )
}
