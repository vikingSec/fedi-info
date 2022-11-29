import * as React from 'react';
import Home from './routes/Home';
import Layout from './Components/Layout'
import About from './Components/About/About'
import BodyStyle from './style'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout inner={<Home />} />,
  },
  {
    path: "/about",
    element: <Layout inner={<About />} />,
  }
]);


function App() {
  return (
    <div style={BodyStyle}>
      <RouterProvider router={router} />
    </div>
  
  );
}

export default App;
