import { React, useState, useEffect } from "react";
import User from "../components/User/User";
import { Grid } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Grid container>
        <Grid xs={2}>first name</Grid>
        <Grid xs={2}> last name</Grid>
        <Grid xs={2}>city</Grid>
        <Grid xs={2}>age</Grid>
        <Grid xs={2}>is active</Grid>
        <Grid xs={2}>usun</Grid>
        {users.map((user) => (
          <User user={user} setUsers={setUsers} users={users}></User>
        ))}
        <Grid xs={12}>
          <p>Stworz usera</p>
        </Grid>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            city: "",
            age: "",
            is_active: true,
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch("http://localhost:8000/users", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  alert("blad");
                  return Promise.reject(response.status);
                }
              })
              .then((data) => {
                setUsers([...users, data]);
                console.log(data);
              });

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid xs={12}>
                <p>first name</p>
                <Field type="text" name="first_name" />
              </Grid>
              <Grid xs={12}>
                <p>last name</p>

                <Field type="text" name="last_name" />
              </Grid>
              <Grid xs={12}>
                <p>city </p>

                <Field type="text" name="city" />
              </Grid>
              <Grid xs={12}>
                <p>age</p>
                <Field type="text" name="age" />
              </Grid>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
}

export default UserPage;
