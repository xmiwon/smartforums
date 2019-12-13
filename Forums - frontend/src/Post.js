import React from 'react';
import './Post.css'

const Post = ({dbInfo, topicId, hideTopic, toggleModal}) => {
    return (
      <div>
      <div className="tl lh-copy  br3 ma3 w-85 bg-white hidden ba">
      {
        hideTopic === true ?    
                    (
                        <p 
                            onClick={toggleModal}
                            className="white b ph2 bg-gray dib hover-bg-mid-gray bn hover-shadow-inner pointer">Reply</p>   
                    ) : null
      }
      
      </div>
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
      </div>
    )
}

export default Post;