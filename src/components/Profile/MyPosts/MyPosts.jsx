import React, {Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formsControls/formsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

function AddNewPostForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name="newPostText" component={Textarea} placeholder={"Input to me"} validate={[required, maxLength10 ]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}


AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

const MyPosts = React.memo(props => {       

    console.log("RENDER");

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
   
   
    let onAddPost = (values) => {
        debugger; 
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}); 



export default MyPosts;