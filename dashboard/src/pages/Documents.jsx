import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import MUIDataTable from "../../MUI";
import MUIDataTable from "mui-datatables";
import {get_Documents,btnhandletopress_Documents} from "../api";
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2'



export default class Documents extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                  data : [],
                  loader:false,
            }
        }
        componentDidMount(){
          get_Documents(this);
        }
        createList(objarry){
          let list="<ul style='text-align:left'>";
          for (let index = 0; index < objarry.length; index++) {
            // const element = objarry[index];
            list= list+"<li>"+objarry[index].risiko+"</li>"
          }
          list= list+"</ul>";
          return(
                 {list}
          )
        }
         handleClickOpen = (e) => {
           const list=this.createList(this.state.data.find(i=>i.id===e.currentTarget.id).anamnesis_report);
           
           Swal.fire({
            title: 'Auffälligkeiten der letzten Anamnese',
            html: list.list,
            showClass: {
              popup: 'AdjustConatainer'
            },
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'OK',
          })

        };
      
        
    render(props){
        const options = {
            filterType: 'checkbox',
            selectableRows: false,
            sortOrder: {
              name: 'patient_name',
              direction: 'asc'
            }
          };
          const  columns = [
              {name: "patient_name",label:"Patient"},
              {name: "title",label:"Titel des Dokuments"},
              {name: "type",label:"Art des Dokuments"},
              {name: "timestamp",label:"Erstellt am"},
            {
                name: "id",
                options: {
               
                  customBodyRender: (value, tableMeta, updateValue) => {
                      return (
                        <Button variant="contained" color="primary" onClick={(e)=>this.handleClickOpen(e)} id={value} style={{borderRadius:"15px"}}>
                         Auffälligkeiten 
                        </Button>
                        
                      );
                    }
                  }
            },
            {
                name: "",
                options: {
               
                    customBodyRenderLite: () => {
                      return (
                        <Button variant="contained" color="primary" style={{borderRadius:"15px"}} onClick={btnhandletopress_Documents}>
                          Drucken
                        </Button>
                        
                      );
                    }
                  }
            }
        ];
        return(
          
            <div className="mb-3">
              
              
                {/* <DialogTitle id="alert-dialog-title">{"Auffälligkeiten der letzten Anamnese"}</DialogTitle> */}
               
                  <Loader
                    type="TailSpin"
                    color="#015270"
                    height={100}
                    width={100}
                    visible={this.state.loader}
                    className="ourloader"
                  />
             <Typography variant="h4" className="mb-3"  align="left" >
                            Dokumente
                            </Typography>

                          <MUIDataTable 
                            title={""} 
                            data={this.state.data} 
                            columns={columns} 
                            options={options} 
                          />
            </div>
        )

    }
}