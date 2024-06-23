import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Protected from "./Components/AuthLayout.jsx"
import './index.css'
import AddPost from "./pages/AddPost.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import EditPost from "./pages/EditPost.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Post from "./pages/Post.jsx"
import SignUp from "./pages/SignUp.jsx"
import store from './Store/Store.js'
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
        element: (<Protected authentication={false}>
          <Login />
        </Protected>)
      },
      {
        path: "/SignUp",
        element: (<Protected authentication={false}>
          <SignUp />
        </Protected>)
      },
      {
        path: "/all-posts",
        element: (<Protected authentication={true}>
          <AllPosts />
        </Protected>)
      },
      {
        path: "/add-post",
        element: (<Protected authentication={true}>
          <AddPost />
        </Protected>)
      },
      {
        path: "/edit-post/:slug",
        element: (<Protected authentication={true}>
          <EditPost />
        </Protected>)
      },
      {
        path: "/post/:slug",
        element: (<Protected authentication={true}>
          <Post />
        </Protected>)
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
