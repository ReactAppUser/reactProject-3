const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");
import ReactDON from "react-dom";
import App from "../App";
import React from "react";


let state = {
    posts: [
        { id: 1, message: 'This app is lovly ))', likesCount: 1201247 },
        { id: 2, message: 'Good thems!', likesCount: 9782 },
        { id: 3, message: 'I want dance to night!', likesCount: 15405 },
        { id: 4, message: 'This is crazy dance?', likesCount: 971340 }
    ],
};


it('length of posts should be incremented', () => {

    

    let action = addPostActionCreator("testTexT")

    let newState = profileReducer(state, action); 
   expect(newState.posts.length).toBe(5);
  

  });

  
it('message of new posts should be correct', () => {

    let action = addPostActionCreator("testTexT")

    let newState = profileReducer(state, action); 
   
   expect(newState.posts[4].message).toBe("testTexT");

  });
  
  it('after deleting length of messages should be decrement', () => {

    let action = deletePost(1)

    let newState = profileReducer(state, action); 
   
   expect(newState.posts.length).toBe(3);

  });

  it('after deleting length  shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action); 
   
   expect(newState.posts.length).toBe(4);
  });
  


















  


































