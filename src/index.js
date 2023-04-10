import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';


// const initialState = {
//   count: 0
// }

// const store = createStore((state = initialState, action) => {
//       switch(action.type){

//         case "INCREMENT":
//           const increment = typeof action.incrementBy === "number" ? action.incrementBy : 1;

//           return {
//             count: state.count + 100 + increment 
//           }

//         case "DECREMENT":
//           return {
//             count: state.count - 50
//           }


//         default:
//           return state
//       }
// })

// store.subscribe(() => {
//   console.log(store.getState())
// })


// store.dispatch({
//   type:"INCREMENT",
//   incrementBy: 10,
// })

// store.dispatch({
//   type:"DECREMENT"
// })







// const addBlog = ({title, description,dateAdded}) => ({
//   type:"ADD_BLOG",
//   blog:{
//     id:uuid(),
//     title:title,
//     description: description
//   }
// })

// const removeBlog = ({ id }) => ({
//   type:"REMOVE_BLOG",
//   id:id
// })

// const blogState = []

// const blogReducer = (state = blogState, action) => {
//     switch(action.type){
//       case "ADD_BLOG":
//         return[
//             ...state,
//             action.blog
//         ]
//       case "REMOVE_BLOG":
//         return state.filter(({ id }) => {
//           return id !== action.id;
//         })
//         default:
//           return state;
//     }
// }

// const userState = []

// const addUser = ({username, password}) => ({
//   type:"ADD_USER",
//   user:{
//     id:uuid(),
//     username:username,
//     password:password,
//   }
// })

// const userReducer = (state = userState, action) => {
//     switch(action.type){
//       case "ADD_USER":
//         return[
//           ...state,
//           action.user
//         ]
//         default:
//            return state;
//     }
// }


// const store = createStore(
//   combineReducers({
//     blogs: blogReducer,
//     user: userReducer
//   })
// )


// store.subscribe(() => {
//   console.log(store.getState())
// })

// const blog1 = store.dispatch(addBlog({title:"Blog Title 1", description:"Blog Description 1", dateAdded:Date.now}))
// const blog2 = store.dispatch(addBlog({title:"Blog Title 2", description:"Blog Description 2", dateAdded:Date.now}))
// store.dispatch(removeBlog({id : blog1.blog.id}))


// store.dispatch(addUser({username:"burakonen",password:123456}))




const blogState = []
console.log(blogState);

//ACTİON CREATOR
const addBlog = ({title, description}) => ({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    description:description
  }
})

const removeBlog = ({ id }) => ({
  type:"REMOVE_BLOG",
  id:id
})

const editBlog = (id, updates) => ({
  type:"EDIT_BLOG",
  id,
  updates
})

//REDUCER
const blogReducer = (state = blogState, action) => {
      switch(action.type){
        case "ADD_BLOG":
          return[
            ...state,
            action.blog
          ]
        case "REMOVE_BLOG":
          return state.filter(({id}) => {
            return id !== action.id
          })
        case "EDIT_BLOG":
          return state.map((blog) => {
            if(blog.id === action.id){
              return{
                ...blog,
                ...action.updates
              }
            }else{
              return blog;
            }
          })
          default:
            return state;
      }
}


//STORE
const store = createStore(
  combineReducers({
    blog:blogReducer,
  })
)

//DISPATCH
const blog1 = store.dispatch(addBlog({title:"Blog 1 title", description:"Blog 1 description"}))
const blog2 = store.dispatch(addBlog({title:"Blog 1 title", description:"Blog 1 description"}))

store.dispatch(removeBlog({id : blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, {title:"update blog title"}))

console.log(store.getState())





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
