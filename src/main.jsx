import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componant/Home/Home.jsx'
import About from './Componant/About/About.jsx'
import Contact from './Componant/Contact/Contact.jsx'
import User from './Componant/User/User.jsx';
import Github from './Componant/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout></Layout>}>
//       <Route path='' element={<Home/>}></Route>
//       <Route path='about' element={<About/>}></Route>
//       <Route path='contact' element={<Contact/>}></Route>

//     </Route>
//   )
// );
const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [

      {
        path: 'about',
        element: <About />
      },
      {
        path: '',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'user/:userid',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
