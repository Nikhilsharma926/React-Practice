import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
// First way of routing

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element:<Home />
//     },{
//       path:"about",
//       element: <AboutUs />
//     },{
//       path:"contact",
//       element:<ContactUs />
//     }]
//   }
// ])

// other way of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<AboutUs />} />
    <Route path="contact" element={<ContactUs />} />
    <Route path="user/:userid" element={<User />} />
    <Route path="github" element={<GitHub />} />

  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
