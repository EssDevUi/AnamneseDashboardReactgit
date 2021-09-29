import react from "react"
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

import Paper from '@material-ui/core/Paper';
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
export default function WelcomePage1() {
    const preventDefault = (event) => event.preventDefault();

    return (
        <div >
            <Card >
                <CardContent>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Typography variant="h5" bold align="left" >
                            Zahnarztpraxis Dr. Sven Markus Gallenbach

                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <div>
                              <p className="mb-1">
                              Friedrichstraße 25

                              </p>
                              <p className="mb-4">
                              69412 Eberbach

                              </p>
                              <p className="mb-1">
                              +49 6271 1040

                              </p>
                              <p className="mb-1"> 
                              <Link>
                              info@dr-gallenbach.de

                              </Link>

                              </p>
                              <p className="mb-1">
                              <Link>
                              https://www.gallenbach-zaehne.de/
                              </Link>

                              </p>
                              <p>
                              Kundennummer: 7729

                              </p>
                            <div>
                                <Typography variant="h5" bold align="left" >
                                Technische Daten
                                </Typography>
                                <p>
                                Sperrpasswort: 69412

                                </p>
                            </div>
                            <div>
                                <Typography variant="h5" bold align="left" >
                                Optionen
                                </Typography>
                                <ul class="list-group">
                                    <li class="list-group-item">Sperrpasswort für Aufklärungsbögen
</li>
                                    <li class="list-group-item">Zustimmung zum Senden von Fehlerberichten
</li>
                                    <li class="list-group-item">Zustimmung zum Senden von Analysedaten
</li>
                                    <li class="list-group-item">Laden von früheren Anamnese-Eingaben erlauben
</li>
                                    <li class="list-group-item">Nach dem Speichern eines Anamnesebogens navigieren zurück zur
</li>
                                 </ul>
                            </div>
                            <div>
                                <Typography variant="h5" bold align="left" >
                                Zugehörige Nutzer

                                </Typography>
                                <ul class="list-group">
                                    <li class="list-group-item"><div>
                                        <span>Zahnarztpraxis Dr. Sven Markus Gallenbach
</span>
<Link>
info@dr-gallenbach.de

</Link>

                                    </div>
</li>
                                   
                                 </ul>
                            </div>
                            <Typography variant="h5" bold align="left" >
                            Daten für die DGSVO-Formulare


                                </Typography>
                            <Typography variant="h5" bold align="left" >
                            Datenschutzbeauftragter der Praxis


                                </Typography>

                                <div>
                                    <p className="mb-1">
                                    Name:
                                    </p>
                                    <p className="mb-1">
                                    Anschrift:
                                    </p>
                                    <p className="mb-1">
                                    Telefon / E-Mail:

                                    </p>
                                </div>
                                <Typography variant="h5" bold align="left" >
                                Externes Abrechnungsunternehmen



                                </Typography>

                          </div>
                        </Grid>
                    
                    </Grid>


                </CardContent>
            </Card>
        </div>
    )
}