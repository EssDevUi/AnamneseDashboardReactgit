import react , {useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
export default function Thirdcard(props) {

   
    
    const classes = useStyles();
const iSchecked=props.anamnesis_at_home_flow.default;

    return (
        <div className="mb-3">


            <Card>
                <CardContent style={{ padding: 0 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="pb-0">
                            <div className="p-3" style={bglight}>
                                <Typography variant="p" bold align="left">
                                    Weitere Einstellungen
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="Body py-0">
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                    Der Name des Anamnese@Home-Links hilft Ihnen bei der Zuordnung. Er wird Ihren Patienten nicht angezeigt. Bitte geben Sie einen Namen ein.

                                </Typography>
                            </div>
                        </Grid>


                    </Grid>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={2}>
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                    Name *
                         </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <div className="p-3">
                                <TextField id="outlined-basic" value={props.anamnesis_at_home_flow.name} fullWidth variant="outlined" />
                            </div>
                        </Grid>

                    </Grid>
                    <div className="p-3">
                        <Typography variant="p" bold align="left">
                            Standardmäßig werden Benachrichtigungen über neu eingegangene Anamnesen an die hinterlegte E-Mail-Adresse Ihrer Praxis gesendet. Hier können Sie eine abweichende E-Mail-Adresse eingeben, an die die Benachrichtigungen verschickt werden.


                                </Typography>
                    </div>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={2}>
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                    E-Mail *
                         </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <div className="p-3">
                                <TextField id="outlined-basic" value={props.anamnesis_at_home_flow.notification_email} fullWidth variant="outlined" />
                            </div>
                        </Grid>

                    </Grid>
                    <div className="p-3">
                        <Typography variant="p" bold align="left">
                            Für DS-Win-Kunden: Legen Sie hier fest, ob Sie diesen Link für die individualisierten Einladungen zu Anamnese@Home nutzen möchten. Sie können die individualisierten Einladungen im DS-Win über das Athena-Menü an Ihre Patienten schicken.

                                </Typography>
                    </div>
                    <Grid container alignItems="center">
                        <Grid item xs={8}>
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                    Für Einladungen aus dem DS-Win nutzen?
                         </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div className="p-3">
                            <input type="checkbox" defaultChecked={iSchecked} />
                            {/* <FormControlLabel
                                control={
                                    <Checkbox
                                    checked = {iSchecked}
                                    color="primary"
                                />
                                }
                                label=""
                            /> */}
                                                    
                            </div>
                        </Grid>

                    </Grid>
                    <Divider variant="middle" />
                    <div className="p-3" >
                                <Typography variant="h6" bold align="left">
                                Kontaktmöglichkeiten für Ihre Patienten
                            </Typography>
                            <Typography variant="p" bold align="left">
                            Legen Sie hier fest, welche E-Mail-Adresse und Telefonnummer Ihren Patienten in der individualisierten Einladungs-E-Mail angezeigt werden sollen.

</Typography>
                            </div>
                            <Grid container alignItems="center">
                        <Grid item xs={12} sm={2}>
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                    E-Mail *
                         </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <div className="p-3">
                                <TextField id="outlined-basic" value={props.anamnesis_at_home_flow.display_email} fullWidth variant="outlined" />
                            </div>
                        </Grid>

                    </Grid>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={2}>
                            <div className="p-3">
                                <Typography variant="p" bold align="left">
                                Telefonnummer
                         </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <div className="p-3">
                                <TextField id="outlined-basic" value={props.anamnesis_at_home_flow.display_phone} fullWidth variant="outlined" />
                            </div>
                        </Grid>

                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item xs={12} sm={2}>
                            <div className="p-3">
                        <Button variant="contained" color="primary">Speichern</Button>
                            </div>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}
