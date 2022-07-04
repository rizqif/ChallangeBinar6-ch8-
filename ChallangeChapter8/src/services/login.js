import axios from "axios";

const login = (username, password) =>
  new Promise((resolve, reject) =>
    axios
      .post(
        `${process.env.REACT_APP_ROOT_URL}/auth/login`,
        { username, password },
        {
          "Access-Control-Allow-Origin": "localhost:3000",
          "Access-Control-Allow-Credentials": true,
          headerwithCredentials: true,
        }
      )
      .then((data) => resolve(data.data))
      .catch(({ response }) => reject(response))
  );

export default login;
