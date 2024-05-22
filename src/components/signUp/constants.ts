import { IFormField } from "../../utils/interfaces";

export const signUpFormFields: IFormField[] = [
  {
    id: "firstName",
    name: "firstName",
    type: "text",
    label: "First Name",
  },
  {
    id: "lastName",
    name: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    id: "emailAddress",
    name: "emailAddress",
    type: "text",
    label: "Email Address",
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
    type: "text",
    label: "Phone Number",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
  },
];
