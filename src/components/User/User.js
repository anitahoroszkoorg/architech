import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function User({ user, setUsers, users }) {
  return (
    <>
      <Grid xs={2}>
        {" "}
        <Link to={`${user.id}`}>{user.first_name}</Link>
      </Grid>
      <Grid xs={2}> {user.last_name}</Grid>
      <Grid xs={2}>{user.city}</Grid>
      <Grid xs={2}>{user.age}</Grid>
      <Grid xs={2}>{`${user.is_active}`}</Grid>
      <Grid xs={2}>
        <button
          onClick={() => {
            fetch(`http://localhost:8000/users/${user.id}`, {
              method: "DELETE",
            }).then((response) => {
              if (response.ok) {
                setUsers(users.filter((u) => u.id != user.id));
                return response.json();
              } else {
                return Promise.reject(response.status);
              }
            });
          }}
        >
          usun
        </button>
      </Grid>
    </>
  );
}

export default User;
