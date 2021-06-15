import PatientCreateForm from "./PatientCreateForm";
import PatientList from "./PatientList";
import PatientUpdateForm from "./PatientUpdateForm";

function Patient(props) {
  return (
    <div>
      <PatientList />
      <PatientUpdateForm />
      <PatientCreateForm />
    </div>
  );
}

export default Patient;