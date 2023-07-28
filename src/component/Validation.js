export default function Validation(values){
    const errors = {}
    const text = /[0-9]/;
    // const email_pattern = /\S+@\S+\.\S+/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.[A-Z])[a-zA-z0-9]{8,}$/;
    
    if(values.name ==="")
      { 
        errors.name ="Name is Required! ";
      }
    //  else if(text.test(values.name))
    //   { 
    //     errors.name ="Name is Required! ";
    //   }
   
      if(values.email ==="")
      {
        errors.email = "Email is Required";
      } 
      // else if(!email_pattern.test(values.email))
      // {
      //   errors.email= "Email did`nt match";
      // }
      if(values.password ==="")
      {
        errors.password = "Password is Required";
      } 
      // else if(!password_pattern.test(values.password))
      // {
      //   errors.password = "Password did`nt match";
      // }

      return errors; 
    }
    
    
