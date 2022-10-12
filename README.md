# Architech application for filling out forms
Link to deployed project: https://architech-362918.lm.r.appspot.com/ </br>
I designed this project by myself in **Figma** while proposing an idea to a company that needed better UX for filling their questonnaire by potential contractors. I created a more user friendly layout for complicated forms. I developed this project with **React** and **Typescript** and used **Material UI**. One of functionalities I've implemented in my code to make the process easier for the user is a **custom React Hook** that automatically fetches information about the company such as name or address and autofills textfields based on user's one input.  To make the questionnaire I've used **Formik** library and **Yup** validation so all textfields are filled correctly. Another custom hook I made to avoid prop drilling which is a common problem with bigger amounts of components is a context hook useForm that passes on properties to components a few levels further. The application communicates with backend (created by a backend developer) written in FastAPI and uses Postgres database. To check for any glitches and make sure the app runs smoothly I wrote end-to-end tests in **Cypress**. The app is deployed on **Google Cloud Platform** with **AppEngine** service. The statics are stored on cloud storage. **CI/CD**(github actions) checks **eslint** and **prettier** and automatically deploys to cloud.</br><img width = "400" src="https://user-images.githubusercontent.com/95635795/193845856-bec46da0-3ba3-4ec3-b5ce-c3f00d54b439.png"> <img width = "400" src="https://user-images.githubusercontent.com/95635795/193865473-bd3074fd-9571-4d73-bb0c-074670bfa687.png">
## Run Locally

Clone the project

```bash
  git clone https://github.com/anitahoroszkoorg/arichitech
```

Go to the project directory

```bash
  cd architech
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```
