import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import AuthLayout from "./Components/AuthLayout.jsx"
import SignUp from "./Components/SignUp.jsx"
import store from './Store/Store.js'
import './index.css'
import AddPost from "./pages/AddPost.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import EditPost from "./pages/EditPost.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Post from "./pages/Post.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (<AuthLayout authentication={false}>
          <Login />
        </AuthLayout>)
      },
      {
        path: "/SignUp",
        element: (<AuthLayout authentication={false}>
          <SignUp />
        </AuthLayout>)
      },
      {
        path: "/all-posts",
        element: (<AuthLayout authentication={true}>
          <AllPosts />
        </AuthLayout>)
      },
      {
        path: "/add-post",
        element: (<AuthLayout authentication={true}>
          <AddPost />
        </AuthLayout>)
      },
      {
        path: "/edit-post/:slug",
        element: (<AuthLayout authentication={true}>
          <EditPost />
        </AuthLayout>)
      },
      {
        path: "/post/:slug",
        element: (<AuthLayout authentication={true}>
          <Post />
        </AuthLayout>)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
