
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'
import { Provider } from 'react-redux'
import ErrorBoundary from './pages/errorBoundry/errorBoundry.jsx'


// import Admin from './pages/adminpage/admin.jsx'
import Admin_home from './pages/adminpage/admin_home.jsx'
// import Admin_about from './pages/adminpage/admin_about.jsx'
// import Admin_memDetails from './pages/adminpage/admin_memDetails.jsx'

import Intro_page from './pages/IntroPage/intro-page.jsx'
import MemDetailes from './pages/memberShipDetailes/memDetailes.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import User_page from './pages/userPage/user_page.jsx'

import AboutUs from './pages/aboutUs/aboutUs.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children :[
      {
        path:'/',
        element:<Intro_page />
      },
      {
        path:'aboutUs',
        element:<AboutUs />
      },
      {
        path:'membership-details',
        element:<MemDetailes />
      },
      {
        path:'admin',
        element:<Admin_home />
      },
      {
        path:'user',
        element:<User_page />
      },
    ],
  },
  // {
  //   path: '/admin',
  //   element:<Admin />,
  //   children :[
      
      
  //   ]
  // }
  
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
  <Provider store = {store}> 
    <RouterProvider router={router} />
  </Provider>
  </ ErrorBoundary>,
)
