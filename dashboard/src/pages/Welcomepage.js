
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const bluepaddbgStyle = {
    padding:"0.75rem 1.25rem",
    backgroundColor: "#015270",
    color:"#fff",
    borderRadius: "5px"
}
const borderCard = {
    padding:"25px",
    border:"1px solid #ccc",
    borderRadius: "5px",
    textAlign:"center",
    width:"100%",
    height:"230px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const IconSize = {
    fontSize: "60px",
    color:"#868e96"

}
export default function WelcomePage() {
    const preventDefault = (event) => event.preventDefault();

    return (
        <div >
            <Card >
                <CardContent>
                            <Typography variant="h5"  align="left" >
                            Willkommen im Athena Dashboard
                            </Typography>

                            <div style={bluepaddbgStyle} className="my-4">
                            <Typography  variant="inherit" align="left" gutterBottom>
                            <Link color="inherit" href="https://hilfe.athenaapp.de/" onClick={preventDefault}>
                            Besuchen Sie die Athena-Hilfe, um zu lesen welche Verbesserungen das aktuelle Athena-Update bietet.
                            </Link>
                         </Typography>
                            </div>

                    <Grid container spacing={3} className="w-82">
                        
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                               <div>
                               <div className="text-center p-2">
                               <i className="fas fa-magic" style={IconSize}></i>
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                    ATHENA-Setup
                                </Typography>
                                <div className="p-2">
                                   <a href="/external/welcome_wizard/practice_data"> <Button  variant="contained" color="primary"> Einrichten</Button></a>
                                </div>
                               </div>

                                </div> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <InsertDriveFileIcon style={IconSize} />
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Dokumente
                                </Typography>
                                <div className="p-2">
                                    <a href="/external/documents"><Button  variant="contained" color="primary"> Ansehen</Button></a>
                                </div>
                              </div>

                                </div> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                               <div>
                               <div className="text-center p-2">
                               <i className="fas fa-paste" style={IconSize}></i>
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Vorlagen
                                </Typography>
                                <div className="p-2">
                                <a href="/external/document_templates"> <Button  variant="contained" color="primary"> Ansehen</Button></a>
                                </div>

                               </div>
                                </div> 
                        </Grid>

                    </Grid>
                    <Divider variant="middle" className="my-3" />
                            <Typography variant="h5" className="mb-3"  align="left" >
                            Anamnese@Home
                            </Typography>
                    <Grid container spacing={3} className="w-82">
                
                    <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <i className="far fa-edit" style={IconSize}></i>
                               </div>
                                <Typography  className=" text-center d-block font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Anamnese@Home 
                                </Typography>
                                <Typography  className=" text-center font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Links 
                                </Typography>
                                <div className="p-2">
                                <a href="/external/anamnesis_at_home_flows"> <Button  variant="contained" color="primary"> Ansehen</Button></a>
                                </div>
                              </div>

                                </div> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <DescriptionIcon style={IconSize} />
                               </div>
                                <Typography  className=" font-weight-bold d-block text-center"  variant="inherit" align="left" gutterBottom>
                                Eingegangene 
                                </Typography>
                                <Typography  className=" font-weight-bold  text-center" variant="inherit" align="left" gutterBottom>
                                Anamnesen 
                                </Typography>
                                <div className="p-2">
                                <a href="/external/anamnesis_at_home_submissions"> <Button  variant="contained" color="primary"> Ansehen</Button></a>
                                </div>
                              </div>

                                </div> 
                        </Grid>
                      
                    </Grid>
                    <Typography variant="h5"  align="left" className="mt-3">
                            Einstellungen
                                                        </Typography>
                                                        <Divider variant="middle" className="my-3" />
                    <Grid container spacing={3} className="w-82">

               
                    <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <i className="fal fa-hospital-alt" style={IconSize}></i>
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Praxis-Stammdaten
                                </Typography>
                                <div className="p-2">
                                <a href="/external/practice">  <Button  variant="contained" color="primary"> Ansehen</Button></a>
                                </div>

                              </div>
                                </div> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <ImageIcon style={IconSize} />
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Logo
                                </Typography>
                                <div className="p-2">
                                <a href="/external/practice/logo_card"> <Button  variant="contained" color="primary"> Bearbeiten</Button></a>
                                </div>
                              </div>

                                </div> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <LockOpenIcon style={IconSize} />
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                Sperrpasswort
                                </Typography>
                                <div className="p-2">
                                <a href="/external/practice/anamnesis_pin_card"> <Button  variant="contained" color="primary"> Bearbeiten</Button></a>
                                </div>
                              </div>

                                </div> 
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={borderCard}>
                              <div>
                              <div className="text-center p-2">
                               <i className="fas fa-filter" style={IconSize}></i>
                               </div>
                                <Typography  className="p-2 font-weight-bold" variant="inherit" align="left" gutterBottom>
                                App-Einstellungen
                                </Typography>
                                <div className="p-2">
                                    <a href="/external/practice/options_card"> <Button  variant="contained" color="primary"> Bearbeiten</Button></a>

                                </div>
                              </div>

                                </div> 
                        </Grid>
                       
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}