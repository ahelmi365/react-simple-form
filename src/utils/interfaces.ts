export interface ISignupForm {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface IFormField {
  type: string;
  name: string;
  id: string;
  label: string;
  //   value: keyof ISignupForm;
}
