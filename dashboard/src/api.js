import axios from 'axios';
import {ServerUrl} from './Config';

export function deleterecord_Template_SheetsTabs (e,objState) {
    const deleteID= e.currentTarget.id;
     axios({
         method: 'Delete',
         url: ServerUrl+'/external/document_templates/'+deleteID + '/',
         headers:{
             
         }
       }).then(response => {
           console.log(response)
           objState.setState({
            array:response.data,
            loader:false
        })
         // this.setState({
         //     array:response.data
         // })
       })
 }
 export function duplicaterecord_Template_SheetsTabs (e,src) {
    const data={
      "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA",
      "document_template":
      {
           "title":src.title,
           "template_category_id":src.template_category_id
       },
       "commit": "Vorlage erstellen"
    }
     axios({  
         method: 'Post',
         url: ServerUrl+'/external/document_templates/new_from/'+src.id + '/',
        data:data
       }).then(response => {

        console.log(response);
       })
 }
 export function TemplateType_Template_SheetsTabs(e) {
 
    axios({
        method: 'Get',
        url: ServerUrl+'/external/document_templates/TemplatesTypes/',
      }).then(response => {
        e.setState({
          TemplateTypes:response.data
        })
      })
}
 export function newrecord_Template_SheetsTabs(e) {
   debugger
  const data={
    "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA",
    "document_template":
    {
          "id":parseInt(e.state.id),
         "title":e.state.title,
         "template_category_id":e.state.DropdownValue
     },
     "commit": "Vorlage erstellen"
  }
    axios({
        method: 'Post',
        url: ServerUrl+'/external/document_templates/new/',
       data:data
      }).then(response => {
          e.props.history.push('/external/document_templates')
      })
}
export function getrecordByid_Template_SheetsTabs(id,props) {
    axios({
        method: 'Get',
        url: ServerUrl+'/external/document_templates/'+id + '/',
        headers:{
            
        }
      }).then(response => {
        props.setState({
          title:response.data.templates,
          DropdownValue:response.data.categoryID,
          // TemplateTypes:response.data
        })
      })
}
export function GetAllSheetsData_Template_SheetsTabs(obj) {
  obj.setState({
    loader:true
  })

  // url: ServerUrl+'/external/document_templates/Sheets',
    axios({
      method: 'Get',
      url: ServerUrl+'/external/document_templates/',
      headers:{
        
      }
    }).then(response => {
 
        obj.setState({
          array:response.data,
          loader:false
      })
    })
  }

  export async function getUser_profile(obj) {
    obj.setState({
      loader:true
    })
    try {
      const response = await axios.get(ServerUrl+'/external/profile/1/');
      obj.setState({
        loader:false,
        array : response.data,
        id:response.data.ProfileId,
        Salutation:response.data.Salutation,
        firstName:response.data.FirstName,
        LastName:response.data.LastName,
        Email:response.data.Email,
        Password:response.data.Password
      })
    } catch (error) {
      console.error(error);
    }
  }
  export function handleSubmit_profile(event,obj) {
    const obje={
        "ID":obj.array.ID,
        "Salutation":obj.Salutation,
        "FirstName":obj.firstName,
        "LastName":obj.LastName,
        "Email":obj.Email,
        "Password":obj.Password
      };
    axios({
      method: 'Post',
      url: ServerUrl+'/external/profile/',
      data:obje,
      // headers:{
      //    'data':JSON.stringify(obje),
      // }
    }).then(response => {
      // event.target.reset();
    })

}
export function get_MedicalHistory (obj){
  obj.setState({
    loader:true

})
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_submissions/',
        
      }).then(response => {
        obj.setState({
            data:response.data.data,
            loader:false

        })
      })
}
export function get_ASubmissionsDetailByID (obj){
  obj.setState({
    loader:true

})
    axios({
        method: 'Get',
        url: ServerUrl+'/api/dashboard/v1/anamnesis_flow_submissions/'+obj.state.dataById + '/',
        
      }).then(response => {
      
        obj.setState({
            data:response.data,
        })
      })
      axios({
        method: 'Options',
        url: ServerUrl+'/api/v1/Patients/limit=20',
      }).then(response => {
        // const ParseList=[];
        // response.data.patientsList.forEach(element => {
        //   ParseList.push(JSON.parse(element))
        //   });
        obj.setState({
            patients:response.data.patients,
            loader:false

        })
      })
}
export function patch_ASubmissionsPatient (obj,patid){
  obj.setState({
    loader:true

})
    axios({
        method: 'Patch',
        url: ServerUrl+'/api/dashboard/v1/anamnesis_flow_submissions/'+obj.state.dataById + '/',
        headers:{
          RequestPayload: patid
        }
      }).then(response => {
      
      })
      axios({
        method: 'Post',
        url: ServerUrl+'/api/v1/anamnesis_at_home_submissions/fetch',
      }).then(response => {
        obj.setState({
            loader:false

        })
      })
}
export function get_Documents (obj){
      obj.setState({
        loader:true
    })
    axios({
        method: 'Get',
        url: ServerUrl+'/api/v1/documents/',
        
      }).then(response => {
        obj.setState({
            data:response.data.data,
            loader:false
        })
      })
}
export function btnhandletopress_Documents(){
    axios({
        method: 'Get',
        url: ServerUrl+'/external/documents/1/',
        
      }).then(response => {
       
      })
}
export async function getUser_dashboard(obj) {
    try {
      obj.setState({
        loader:true

      })
      const response = await axios.get(ServerUrl+'/external/anamnesis_at_home_flows/');
      obj.setState({
        // data: JSON.parse(response.data).anamnesis_at_home_flow,
        data: response.data,
        loader:false

    })
    } catch (error) {
      console.error(error);
    }
  }
export async function Postanamnesis_at_home_flow_new(obj) {
  debugger

  obj.setState({
    loader:true

  })
  const data={
    "name":obj.state.name,
    "notification_email":obj.state.notification_email,
    "default":obj.state.defaultt,
    "display_email":obj.state.display_email,
    "display_phone":obj.state.display_phone,

  };
  if(data.default==="")
  {
    data.default=false;
  }
  await axios({
    method: 'Post',
    url: ServerUrl+'/external/anamnesis_at_home_flows/',
    data: data
      }).then(response => {
          console.log(response);
          obj.setState({
            loader:false
        
          })
      })
   
  }
  export function toEdit_dashboard(e) {
    const id= e.target.id;
      axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/'+id + '/',
      }).then(response => {
          console.log(response);
      })
     
    
  }
  export function createNew_dashboard() {
      axios({
        method: 'Post',
        url: ServerUrl+'/external/anamnesis_at_home_flows/',
      }).then(response => {
          console.log(response);
      })
     
    
  }
  export async function SaveMoreSettings_dashboard2(obj) {
    const data={
      "homeFlowLinkID":obj.state.anamnesis_at_home_flow.id,
      "name":obj.state.anamnesis_at_home_flow.name,
      "notification_email":obj.state.anamnesis_at_home_flow.notification_email,
      "default":obj.state.anamnesis_at_home_flow.default,
      "display_email":obj.state.anamnesis_at_home_flow.display_email,
      "display_phone":obj.state.anamnesis_at_home_flow.display_phone,
  
    };
    if(data.default==="")
    {
      data.default=false;
    }
    await axios({
      method: 'Post',
      url: ServerUrl+'/external/anamnesis_at_home_flows/',
      data: data
        }).then(response => {
            console.log(response);
            obj.setState({
              loader:false
          
            })
        })
   
  
}
  export function get_dashboard2(obj){
    const id=parseInt(obj.state.dataById);
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/'+id+'/edit',
      }).then(response => {
        debugger
        const anamnesisflow=response.data.record;
        const temp=response.data.templateid;
        // response.data.templateid.forEach(element => {
        //   temp.push(JSON.parse(element));
        // });
debugger
        obj.setState({
          anamnesis_at_home_flow  : anamnesisflow,
          Vorlagen:anamnesisflow.vorlagen,
          template:temp
          })
      })
  }
  export function Add_dashboard2(e){
    if(e.state.select===null){
      return;
    }
    debugger
    // var addedTemplate=e.state.template.filter(item => {
    //   return item.id === e.state.select
    // })
    // var newTemplateList=e.state.Vorlagen.push(addedTemplate);
    // e.setState({
    //   Vorlagen:[...e.state.Vorlagen,addedTemplate],
    //   template  : e.state.template.filter(({ id }) => id !== e.state.select)
    //   })
    axios({
        method: 'Post',
        url: ServerUrl+'/external/anamnesis_at_home_flows/'+e.state.select+'/'+e.state.anamnesis_at_home_flow.id,
        headers:{
          "homeFlowId":e.state.anamnesis_at_home_flow.id
        }
       }).then(response => {
       console.log(response);
       const anamnesisflow=response.data.record;
            const temp=response.data.templateid;
            // response.data.templateid.forEach(element => {
            //   temp.push(JSON.parse(element));
            // });
    
            e.setState({
              anamnesis_at_home_flow  : anamnesisflow,
              Vorlagen:anamnesisflow.vorlagen,
              template:temp
              })
      })
  }
  export function RemoveTemplatefromLink_dashboard2  (e,props) {
    var id = e.currentTarget.id;
    if(e.currentTarget.name === "RemoveLink"){
      id = e.target.id;
    }else{
      id = parseInt(e.currentTarget.attributes.getattr.value);
    }
      axios({
          method: 'Post',
          url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/remove/',
          headers:{
            "homeFlowId":props.state.anamnesis_at_home_flow.id
          }
        }).then(response => {
            console.log(response);
            const anamnesisflow=response.data.record;
            const temp=response.data.templateid;
            // response.data.templateid.forEach(element => {
            //   temp.push(JSON.parse(element));
            // });
    
            props.setState({
              anamnesis_at_home_flow  : anamnesisflow,
              Vorlagen:anamnesisflow.vorlagen,
              template:temp
              })
          // this.setState({
          //     data : response.data,
          //     ShowForm:false
          // })
        })
  }
  export function RemoveTemplate_dashboard2_fourtCard  (e,props) {
    debugger
    var id = e.currentTarget.id;
    if(e.currentTarget.name === "RemoveLink"){
      id = e.target.id;
    }else{
      id = parseInt(e.currentTarget.attributes.getattr.value);
    }
      axios({
          method: 'Delete',
          url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/remove/',
         
        }).then(response => {
            console.log(response);
            props.props.history.push("/external/anamnesis_at_home_flows");
          // this.setState({
          //     data : response.data,
          //     ShowForm:false
          // })
        })
  }
  export function Move_dashboard2 (id,position)  {

    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/move/',
        headers:{
          "position":position
        }
      }).then(response => {
          console.log(response);
          //   this.setState({
      //       data : response.data,
      //   })
      })
}
  export function MoveUp_dashboard2 (id,e,CurrentIndex,props)  {
    debugger
    if(CurrentIndex===1)
    {
      return;
    }
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/move_up/',
        headers:{
          "homeFlowId":props.state.anamnesis_at_home_flow.id
        }
      }).then(response => {
          console.log(response);
          const anamnesisflow=response.data.record;
          const temp=response.data.templateid;
          // response.data.templateid.forEach(element => {
          //   temp.push(JSON.parse(element));
          // });
  
          props.setState({
            anamnesis_at_home_flow  : anamnesisflow,
            Vorlagen:anamnesisflow.vorlagen,
            template:temp
            })
          //   this.setState({
      //       data : response.data,
      //   })
      })
}
  export function Movedown_dashboard2  (id,e,props)  {
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/move_down/',
        headers:{
          "homeFlowId":props.state.anamnesis_at_home_flow.id
        }
      }).then(response => {
          console.log(response);
          const anamnesisflow=response.data.record;
          const temp=response.data.templateid;
          // response.data.templateid.forEach(element => {
          //   temp.push(JSON.parse(element));
          // });
  
          props.setState({
            anamnesis_at_home_flow  : anamnesisflow,
            Vorlagen:anamnesisflow.vorlagen,
            template:temp
            })
          //   this.setState({
      //       data : response.data,
      //   })
      })
}

  export async function get_PracticeData(obj) {
      const response = await axios.get(ServerUrl+'/external/welcome_wizard/practice_data?Id='+obj.state.Id);
      console.log(response);
    debugger

      obj.setState({
        array : response.data,
        Name:response.data.name,
        Adress1:response.data.adress1,
        Adress2:response.data.adress2,
        City:response.data.city,
        Email:response.data.email,
        Phone:response.data.phone,
        PostCode:response.data.postCode,
        Website:response.data.website,
  
      })
  }
  export function Post_PracticeData(props){
    const data={
      "Id":props.Id,
      "Name":props.Name,
      "Adress1":props.Adress1,
      "Adress2":props.Adress2,
      "City":props.City,
      "Email":props.Email,
      "Phone":props.Phone,
      "PostCode":props.PostCode,
      "Website":props.Website,
      "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA"

    };
    axios({
      method: 'Post',
      url: ServerUrl+'/external/welcome_wizard/practice_data/',
      data:data,
      
    }).then(response => {
      console.log(response);
    })
  } 
  export async function get_anamnesePin(obj) {
    debugger
    const response = await axios.get(ServerUrl+'/external/welcome_wizard/anamnesis_pin?Id='+obj.state.id);
    console.log(response);
    obj.setState({
      DangerZonePassword: response.data
  });
    // obj.setState({
      //   DangerZonePassword:response.data.DangerZonePassword,

    // })
}
export function post_anamnesePin(props){
  const data={
    "Id":props.id,
    "DangerZonePassword":props.DangerZonePassword,
    "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA"

  }
  axios({
    method: 'Post',
    url: ServerUrl+'/external/welcome_wizard/anamnesis_pin/',
    data:data
  }).then(response => {
    console.log(response);
  })
} 
export async function get_appOptions(obj) {
  // const response = await axios.get(ServerUrl+'/external/welcome_wizard/app_options/');
 
  axios({
    method: 'Get',
    url: ServerUrl+'/external/welcome_wizard/app_options/',
    headers:{
      'PracticeID':obj.state.id,
   }
  }).then(response => {
    console.log(response);
    obj.setState({
      AllowPriviousEntry:response.data.allowPriviousEntry,
      BlockingPassword:response.data.blockingPassword,
      BugReports:response.data.bugReports,
      BugReportTime:"1976-05-04T00:00:00.000Z",
      NavigateTo:response.data.navigateTo,
      Sendanalyticsdata:response.data.sendanalyticsdata,
      day:new Date(response.data.bugReportTime).getDate(),
      Month:new Date(response.data.bugReportTime).getMonth(),
      Year:new Date(response.data.bugReportTime).getFullYear(),
      Hour:new Date(response.data.bugReportTime).getHours(),
      Minute:new Date(response.data.bugReportTime).getMinutes(),
    })
  })

  debugger
  // console.log(response);
  // obj.setState({
    //   DangerZonePassword:response.data.DangerZonePassword,

  // })
}
export function post_appOptions(props){
  const data={
    "Id":props.id,
    "AllowPriviousEntry":props.AllowPriviousEntry,
    "BlockingPassword":props.BlockingPassword,
    "BugReports":props.BugReports,
    "BugReportTime":props.Year+"/"+props.Month+"/"+props.day+" "+props.Hour+":"+props.Minute,
    "NavigateTo":props.NavigateTo,
    "Sendanalyticsdata":props.Sendanalyticsdata,
    "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA"

  };
  axios({
    method: 'Post',
    url: ServerUrl+'/external/welcome_wizard/app_options/',
    data:data,
    
  }).then(response => {
    console.log(response);
  })
} 
export async function get_oracticeLogo(obj) {
  const response = await axios.get(ServerUrl+'/external/welcome_wizard/practice_logo?Id='+obj.state.id);
  debugger
  obj.state.Logo=response.data;
  console.log(response);
  obj.setState({
      Logo:response.data,

  })
}
export function POST_PRACTICElOGO(props){
  debugger
  const data={
    "Id":props.id,
    "Logo":props.Logo,
    "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA"

  };
  axios({
    method: 'Post',
    url: ServerUrl+'/external/welcome_wizard/practice_logo/',
    data:data
  }).then(response => {
    console.log(response);
  })
} 
  export async function getPracticeData_Practice(obj) {
    debugger

    try {
      const response = await axios.get(ServerUrl+'/external/practice/');
      console.log(response);
      // obj.setState({
      //   array : response.data,
      //   Name:response.data.Name,
      //   Adress1:response.data.Adress1,
      //   Adress2:response.data.Adress2,
      //   AllowPriviousEntry:response.data.AllowPriviousEntry,
      //   BlockingPassword:response.data.BlockingPassword,
      //   BugReports:response.data.BugReports,
      //   BugReportTime:response.data.BugReportTime,
      //   City:response.data.City,
      //   DangerZonePassword:response.data.DangerZonePassword,
      //   Email:response.data.Email,
      //   Logo:response.data.Logo,
      //   NavigateTo:response.data.NavigateTo,
      //   Phone:response.data.Phone,
      //   PostCode:response.data.PostCode,
      //   Sendanalyticsdata:response.data.Sendanalyticsdata,
      //   Website:response.data.Website,
  
      // })
    } catch (error) {
      console.error(error);
    }
  }
 export function PostPracticeData_Practice(props) {
    try {
      const obj={
        "Name":props.Name,
        "Adress1":props.Adress1,
        "Adress2":props.Adress2,
        "AllowPriviousEntry":props.AllowPriviousEntry,
        "BlockingPassword":props.BlockingPassword,
        "BugReports":props.BugReports,
        "BugReportTime":props.Year+"-"+props.Month+"-"+props.day+" "+props.Hour+":"+props.Minute,
        "City":props.City,
        "DangerZonePassword":props.DangerZonePassword,
        "Email":props.Email,
        "Logo":props.Logo,
        "NavigateTo":props.NavigateTo,
        "Phone":props.Phone,
        "PostCode":props.PostCode,
        "Sendanalyticsdata":props.Sendanalyticsdata,
        "Website":props.Website,
  
      };
    axios({
      method: 'Post',
      url: ServerUrl+'/external/practice/',
      headers:{
         'data':JSON.stringify(obj),
      }
      
    }).then(response => {
      console.log(response);
    })
    } catch (error) {
      console.error(error);
    }
  }