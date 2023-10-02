import { Form } from "react-router-dom";
import "./FormAdd.scss";
import { useNavigate } from "react-router-dom";

function FormAddUser() {
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: userList,

      
      
      
      
    });
    navigate("/list");
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form onSubmit={submitFormHandler} className="form-inputs">
        <label htmlFor="firstName">First Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={user.name}
        />
        {/* {formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={user.username}
        />
        {/* {formik.errors.username ? <div>{formik.errors.username}</div> : null} */}
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={handleChange}
          value={user.phone}
        />
        {/* {formik.errors.phone ? <div>{formik.errors.phone}</div> : null} */}
        <div className="btn-form">
          <button type="submit"> Submit</button>
          <button onClick={handleReset} type="reset">
            Reset
          </button>
        </div>
      </Form>
    </>
  );
}

export default FormAddUser;
