import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store/store.js"

//pages
import Home from './pages/home/Home.jsx'
import SearchResult from './pages/searchResult/SearchResult.jsx'
import Details from './pages/details/Details.jsx'
import MyBookings from './pages/myBokings/MyBookings.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import AuthLayout from './components/AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/results/:cityName',
        element:<SearchResult/>
      },
      {
        path:'/details/:hotelName',
        element:<Details/>
      },
      {
        path:'/mybookings',
        element:(
          <AuthLayout authentication>
            <MyBookings/>
          </AuthLayout>
        )
      },
      {
        path:'/admin',
        element:<Dashboard/>
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'*',
        element:<div>404</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
