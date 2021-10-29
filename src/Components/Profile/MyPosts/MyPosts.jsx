import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxlength = maxLengthCreator(10);

class MyPosts extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }
  render() {
    let postsElements = this.props.posts.map((p) => (
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addNewPost = (values) => {
      this.props.addPost(values.newPostBody);
    };

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addNewPost} />
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  }
}
let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          validate={[required, maxlength]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
