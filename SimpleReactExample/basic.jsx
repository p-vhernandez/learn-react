import React from "https://esm.sh/react@18.2.0"
import ReactDOM from '"https://esm.sh/react-dom@18.2.0/client"'

const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);

const response = '<script>alert("hola")</script>';
const app = React.createElement("h1", null, response);

root.render(app);
