import react from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';


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
export default function Sndcard(props) {
    const classes = useStyles();

    return (
        <div className="mb-3">

            
            <Card>
                <CardContent style={{ padding: 0 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="pb-0">
                            <div className="p-3" style={bglight}>
                                <Typography variant="p" bold align="left">
                                Anamnesis @ Home-Link
                            </Typography>
                            </div>




                        </Grid>

                        <Grid item xs={12} className="Body py-0">
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                Veröffentlichen Sie diesen Link auf Ihrer Website oder senden Sie ihn Ihren Patienten per E-Mail. Mit dem Klick auf den Link können Ihre Patienten das Ausfüllen der ausgewählten Vorlagen starten.</Typography>
                         

                            </div>
                        </Grid>
                        

                    </Grid>
                    <Grid container alignItems="center">
                    <Grid item xs={2}>
                   <div className="p-3">
                   <Typography variant="p" bold align="left">
Links                            </Typography>
                       </div>
                    </Grid>
                    <Grid item xs={7}>
                        <div className="p-3">
                        <TextField id="outlined-basic" value={props.anamnesis_at_home_flow.link} fullWidth  variant="outlined" />
                        </div>
                    </Grid>
                    <Grid xs={3}>
                    <Button variant="contained"  color="primary" className="mr-3"> Kopieren</Button>
                    <Button variant="contained"  color="primary"> Öffnen</Button>
                    </Grid>
</Grid>

                </CardContent>
            </Card>
        </div>
    )
}
