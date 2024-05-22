interface IProps {
  fieldId: string;
  fiedlType: string;
  fieldName: string;
  fieldLabel: string;
}
const FormField = ({ fieldId, fiedlType, fieldLabel, fieldName }: IProps) => {
  return (
    <>
      <div className="form-label">
        <label htmlFor={fieldId}>{fieldLabel}</label>
      </div>
      <div className="form-field">
        <input type={fiedlType} id={fieldId} name={fieldName} />
      </div>
    </>
  );
};

export default FormField;
