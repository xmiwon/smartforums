import React from 'react';
import './Post.css'

const Post = ({dbInfo, topicId}) => {
    return (
      <div className="PostFrame center w-80 bg-gray">
      <div className=" tl center lh-copy  br3 pa3 ma3 w-85 bg-white hidden ba">
       
       {
         dbInfo.map((post, id) => {
           return (
            post.id === topicId ?
            (              
              post.body + post.userId
            ) : null
           )
         })
       }
      </div>
      </div>
    )
}

export default Post;