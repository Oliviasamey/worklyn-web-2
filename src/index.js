import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
// Import ThemeProvider from Material Tailwind
// import { ThemeProvider } from "@material-tailwind/react"
// import Form from './Components/form';

// export default function App() {
//     return (
//       <h1 className="text-5xl">
//         Hello World
//         <Form></Form>
//       </h1>
//     )
//   }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);