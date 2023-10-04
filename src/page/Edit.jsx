/* eslint-disable react/prop-types */
import "./FormAdd.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {userActions} from '../store/index';
import './Edit.scss'
function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const usersList = useSelector((state) => state.usersList.usersList);

  const index = usersList.findIndex((u) => u.id === parseInt(id));
  const user = usersList[index];
  console.log(user);

  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
  });
console.log(formValues.name)

  useEffect(() => {
    if (user) {
      setFormValues(user);
    }
  }, [user]);
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log("After update:", formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values before dispatch:", formValues);
    if (usersList.length === 0) {
      console.log("EDit users null");
      return;
    }
    dispatch(userActions.EDIT_USER({
        id:  formValues.id,
        name: formValues.name,
        username: formValues.username,
        phone: formValues.phone,
      }
    ))
    navigate("/list");
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="form-edit">
        <label className="lab-edit" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label className="lab-edit" htmlFor="username">Last Name</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <label className="lab-edit" htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
        <button type="submit">
          Edit
        </button>
      </form>
    </>
  );
}

export default Edit;
