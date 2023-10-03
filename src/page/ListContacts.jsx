import "./ListContacts.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

function ListContacts() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);

  const [selectedUserId, setSelectedUserId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [userLi, setListUsers] = useState([]);
  const [lastUserId, setLastUserId] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const users = await response.json();
      const usersPerson = [];
      for (const key in users) {
        usersPerson.push({
          id: users[key].id,
          name: users[key].name,
          username: users[key].username,
          phone: users[key].phone,
          description: users[key].description,
        });
      }
      setListUsers(usersPerson);
      
      if (usersList.length === 0) {
        dispatch( setUserList(usersPerson));
        console.log("list users null");
        return;
      }
      const maxId = Math.max(...users.map((user) => user.id), [0]);
      setLastUserId(maxId);
    }
    fetchUsers().catch((error) => {
      console.log(error);
    });
  }, []);

  const setUserList = (users) => ({
    type: "SET_USER_LIST",
    payload: users,
  });

  const removeUser = (id) => {
    if (usersList.length === 0) {
      console.log("list users null");
      return;
    }
    dispatch({
      type: "REMOVE_USER",
      id: selectedUserId,
    });
    setShowModal(false);
  };

  return (
    <>
      <h2 className="list-title">All Contact</h2>
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", position: "absolute" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Delete user?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You are sure to remove the user?</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                onClick={() => removeUser(selectedUserId)}
                className="btn-secondary"
              >
                Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="btn-primary"
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}

      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {usersList.map((user) => (
              <tr className="user-contact" key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedUserId(user.id);
                      setShowModal(true);
                    }}
                    data-id={user.id}
                    className="btn-del"
                  >
                    <AiFillDelete />
                  </button>

                  <NavLink to={`/edit/${user.id}`} state={user} key={user.id}>
                    <button className="btn-edit" type="edit">
                      <BsFillPencilFill />
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListContacts;
