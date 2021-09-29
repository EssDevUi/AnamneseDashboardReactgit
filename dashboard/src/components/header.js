import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const bluepaddbgStyle = {
  backgroundColor: "#015270",
  color:"#fff",
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    
<nav className="navbar navbar-expand-lg navbar-light" style={bluepaddbgStyle}>
      <div className="container">
          <a className="navbar-brand" href="/external/welcome"><img height="40" border="0" src="https://s3.eu-central-1.amazonaws.com/adento-dashboard/ATHENA_Logo_UZ_negativ.png"></img></a>

          <button aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target=".dual-collapse" data-toggle="collapse" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>


         



          <div className="collapse navbar-collapse dual-collapse " id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link text-white" href="/external/documents">Dokumente</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="/CreateTemplate">Vorlagen</a></li>
              <li className="nav-item dropdown">
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <span class="text-white">Anamnese@Home</span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}><a href="/external/anamnesis_at_home_flows">Anamnese@Home-Links</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/external/anamnesis_at_home_submissions">Eingegangene Anamnesen</a></MenuItem>
              </Menu>
               
              </li>
            </ul>
          </div>

          <div className="navbar-collapse collapse dual-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link text-white" href="/external/profile">Profil</a></li>

              <li className="nav-item"><a className="nav-link text-white" href="/logout">Logout</a></li>
            </ul>
          </div>
      </div>
    </nav>

  )
}
