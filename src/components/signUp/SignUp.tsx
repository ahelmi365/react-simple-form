import FormField from "../formField/FormField";
import { signUpFormFields } from "./constants";

const SignUp = () => {
  return (
    <div className="signup-container">
      {signUpFormFields.map((fieldData, index) => (
        <FormField
          fiedlType={fieldData.type}
          fieldId={fieldData.id}
          fieldName={fieldData.name}
          fieldLabel={fieldData.label}
          key={index}
        />
      ))}
    </div>
  );
};

export default SignUp;
