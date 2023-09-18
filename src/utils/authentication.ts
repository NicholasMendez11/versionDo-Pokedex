import { toast } from "react-hot-toast";

export function authenticateUser(email:string, password:string) {
  // Criterios para la authentication
  const criteriaUsername = "admin@email.com";
  const criteriaPassword = "password2023";

  // Check if the username and password are valid
  if (email === criteriaUsername && password === criteriaPassword) {
    return true; // Autenticacion completada 
  } else {
    toast.error("User Credential are not valid");
  }
}



