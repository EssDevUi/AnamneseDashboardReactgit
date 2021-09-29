import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import { DropzoneArea } from 'material-ui-dropzone'
import ReactFileReader from 'react-file-reader';
import { POST_PRACTICElOGO, get_oracticeLogo } from "../api";
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



export default class external__practice__logo_card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Logo: "",
      id: 1,
      dropdialoge: false
    }

    this.SaveLogo_PracticeLogo = this.SaveLogo_PracticeLogo.bind(this);
    this.handledropzone = this.handledropzone.bind(this);
    this.onDropHandler = this.onDropHandler.bind(this);
  }
  componentDidMount() {

    get_oracticeLogo(this);
  }
  handledropzone(files) {
    if (files.length > 0) {
      this.onDropHandler(files);
    }
  }

  onDropHandler(files) {
    var file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({
        Logo: event.target.result
      })
    };
    reader.readAsDataURL(file)

  }
  SaveLogo_PracticeLogo() {
    POST_PRACTICElOGO(this.state);
    this.props.history.push("/external/practice")
  }
  openDropDialog = (e) => {
    this.setState({
      dropdialoge: !this.state.dropdialoge
    })
  }
  render(props) {
    return (
      <div>
        <div className="mb-3">

          <Card>
            <CardContent>
              <div className="w-75 mb-3 ">
                <Typography variant="h5" className="mb-3 font-weight-bold" bold align="left" >
                  Logo bearbeiten


                </Typography>
              </div>
              <div className=" border w-75 p-3 mediaQueryXS">
                <Typography variant="h6" className="mb-3 font-weight-bold" bold align="left" >
                  Logo bearbeiten

                </Typography>
                {this.state.Logo === "" ?

                  <div className="w-50 adjustCenterPreviewimage mx-auto mediaQueryXS">

                    <DropzoneArea
                      onChange={this.handledropzone}
                      filesLimit={1}
                      acceptedFiles={['image/*']}
                      showPreviewsInDropzone={true}
                    />
                    {/* <ReactFileReader>
                                 <input type="hidden" value={this.state.files} />
                            </ReactFileReader> */}
                  </div>
                  :
                  <div className="divBegining">
                    <div className="w-50 mx-auto dropzonepreviewDiv">
                      <img width="180" height="180" src={"data:image/png;base64," + this.state.Logo} className="PreviewImg" alt="" />
                      <div className="overlayedit">
                        <IconButton color="default" onClick={this.openDropDialog} aria-label="upload picture" component="span">
                          <PhotoCamera />
                        </IconButton>
                      </div>
                    </div>
                    <Dialog fullWidth={true} maxWidth={"sm"} onClose={this.state.dropdialoge} aria-labelledby="simple-dialog-title" open={this.state.dropdialoge}>
                      <DialogTitle id="simple-dialog-title">Upload Picture</DialogTitle>
                      <div className="p-3 adjustCenterPreviewimage">
                        <DropzoneArea
                          onChange={this.handledropzone}
                          filesLimit={1}
                          acceptedFiles={['image/*']}
                          showPreviewsInDropzone={true}
                        />
                      </div>
                      <DialogActions>
                        <Button onClick={this.openDropDialog} color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>

                  </div>}
              </div>
              <br />
              <div className="text-left">
                <Button variant="contained" style={{ borderRadius: "15px" }} color="primary" onClick={this.SaveLogo_PracticeLogo} >Praxis aktualisieren</Button>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    )

  }
}