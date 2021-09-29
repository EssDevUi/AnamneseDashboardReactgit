import axios from 'axios';
import {ServerUrl} from './Config';

export function deleterecord_Template_SheetsTabs (e) {
    const deleteID= e.target.id;
     axios({
         method: 'Delete',
         url: ServerUrl+'/external/document_templates/'+deleteID + '/',
         headers:{
             
         }
       }).then(response => {
           console.log(response)

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

 export function newrecord_Template_SheetsTabs(e) {
  const data={
    "authenticity_token":"FkVCdznlWKhw70v01gebVOHiaQukTrSBKMYDrIypIuA5TNBirxzCTT216LlutonWZfJyqVrlgBiI54CcAiEKGA",
    "document_template":
    {
         "title":"gfgfgfg",
         "template_category_id":1
     },
     "commit": "Vorlage erstellen"
  }
    axios({
        method: 'Post',
        url: ServerUrl+'/external/document_templates/new/',
       data:data
      }).then(response => {

       console.log(response);
      })
}
export function grtrecordByid_Template_SheetsTabs(e) {
    const recordID= e.target.id;
    axios({
        method: 'GET',
        url: ServerUrl+'/external/document_templates/'+recordID + '/',
        headers:{
            
        }
      }).then(response => {

       console.log(response);
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
        "ProfileID":obj.id,
        // "Salutation":obj.Salutation,
        // "Fname":obj.firstName,
        // "LastName":obj.LastName,
        // "Email":obj.Email,
        // "Password":obj.Password
      };
    axios({
      method: 'Post',
      url: ServerUrl+'/external/profile?Salutation='+obj.Salutation+'&firstName='+obj.firstName+'&LastName='+obj.LastName+'&Email='+obj.Email+'&Password='+obj.Password + '/',
      headers:{
         'data':JSON.stringify(obje),
      }
    }).then(response => {
      event.target.reset();
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
        const ParseList=[];
        response.data.patientsList.forEach(element => {
          ParseList.push(JSON.parse(element))
          });
        obj.setState({
            data:JSON.parse(response.data.data),
            patients:ParseList,
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
        data: JSON.parse(response.data).anamnesis_at_home_flow,
        loader:false

    })
    } catch (error) {
      console.error(error);
    }
  }
export async function Postanamnesis_at_home_flow_new(obj) {
  obj.setState({
    loader:true

  })
  const data={
    "name":obj.name,
    "notification_email":obj.notification_email,
    "defaultt":obj.defaultt,
    "display_email":obj.display_email,
    "display_phone":obj.display_phone,

  };
  axios({
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
  export function get_dashboard2(obj){
    const id=parseInt(obj.state.dataById);
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/'+id+'/edit',
      }).then(response => {

        obj.setState({
          anamnesis_at_home_flow  : response.data,
          Vorlagen:response.data.Vorlagen
          })
      })
  }
  export function Add_dashboard2(e){
    axios({
        method: 'Post',
        url: ServerUrl+'/external/anamnesis_at_home_flows/',
      }).then(response => {
       console.log(response);
      })
  }
  export function RemoveTemplate_dashboard2_fourtCard  (e) {
    var id = e.currentTarget.id;
    if(e.currentTarget.name === "RemoveLink"){
      id = e.target.id;
    }else{
      id = parseInt(e.currentTarget.attributes.getattr.value);
    }
      axios({
          method: 'Post',
          url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/remove/',
         
        }).then(response => {
            console.log(response);
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
  export function MoveUp_dashboard2 (id,e)  {
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/move_up/',
       
      }).then(response => {
          console.log(response);
          //   this.setState({
      //       data : response.data,
      //   })
      })
}
export function Movedown_dashboard2  (id,e)  {
    axios({
        method: 'Get',
        url: ServerUrl+'/external/anamnesis_at_home_flows/1001/document_templates/'+id+'/move_down/',
       
      }).then(response => {
          console.log(response);
          //   this.setState({
      //       data : response.data,
      //   })
      })
}

  export async function get_PracticeData(obj) {
      const response = await axios.get(ServerUrl+'/external/welcome_wizard/practice_data/');
      console.log(response);
      // obj.setState({
      //   array : response.data,
      //   Name:response.data.Name,
      //   Adress1:response.data.Adress1,
      //   Adress2:response.data.Adress2,
      //   City:response.data.City,
      //   Email:response.data.Email,
      //   Phone:response.data.Phone,
      //   PostCode:response.data.PostCode,
      //   Website:response.data.Website,
  
      // })
  }
  export function Post_PracticeData(props){
    const data={
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
    const response = await axios.get(ServerUrl+'/external/welcome_wizard/anamnesis_pin/');
    console.log(response);
    // obj.setState({
      //   DangerZonePassword:response.data.DangerZonePassword,

    // })
}
export function post_anamnesePin(props){
  const data={
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
  const response = await axios.get(ServerUrl+'/external/welcome_wizard/app_options/');
  console.log(response);
  // obj.setState({
    //   DangerZonePassword:response.data.DangerZonePassword,

  // })
}
export function post_appOptions(props){
  const data={
    "AllowPriviousEntry":props.AllowPriviousEntry,
    "BlockingPassword":props.BlockingPassword,
    "BugReports":props.BugReports,
    "BugReportTime":props.Year+"-"+props.Month+"-"+props.day+" "+props.Hour+":"+props.Minute,
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
  const response = await axios.get(ServerUrl+'/external/welcome_wizard/practice_logo/');
  console.log(response);
  // obj.setState({
    //   DangerZonePassword:response.data.DangerZonePassword,

  // })
}
export function POST_PRACTICElOGO(props){
  const data={
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