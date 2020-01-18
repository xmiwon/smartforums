import React from 'react';
import './Post.css'

const Post = ({dbInfo, topicId, hideTopic, toggleModal}) => {
    return (
      <div>
      <div className="buttonBar tl lh-copy center w-100 hidden">
          <button
            onClick={toggleModal}
            className="white b ph2 bg-mid-gray dib hover-bg-black bn hover-shadow-inner pointer pa2">Reply
          </button>
      </div> 
      <div className="PostFrame center w-80 bg-gray">
      <div className="tl center lh-copy pa3 ma3 w-85 bg-white hidden">
       {
         dbInfo.map((post, id) => {
         return post.id === topicId ?
             (<p key={post.id}>{post.text_message + post.email}</p>)
            : null
          //Maybe give Post.js a route so that Link can connect to this? Make sure the routing on NewTopic is dynamic when creating a topic so that it will link to this component. See if this will work
         })
         
       }
      </div>
      </div>
      </div>
    )
}

export default Post;