import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
  const [user, setUser] = useState([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Grid xs={12}>
        <p>Edytuj usera</p>
      </Grid>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          city: "",
          age: "",
          is_active: true,
        }}
        onSubmit={(values) => {
          fetch(`http://localhost:8000/users/${userId}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then((response) => {
            if (response.ok) {
              navigate(-1);
              return response.json();
            } else {
              alert("blad");
              return Promise.reject(response.status);
            }
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid xs={12}>
              <Field
                type="text"
                name="first_name"
                placeholder={user.first_name}
              />
            </Grid>
            <Grid xs={12}>
              <Field
                type="text"
                name="last_name"
                placeholder={user.last_name}
              />
            </Grid>
            <Grid xs={12}>
              <Field type="text" name="city" placeholder={user.city} />
            </Grid>
            <Grid xs={12}>
              <Field type="text" name="age" placeholder={user.age} />
            </Grid>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateUser;
