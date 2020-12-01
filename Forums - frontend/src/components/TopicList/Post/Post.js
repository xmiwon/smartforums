import React from 'react';
import './Post.css'

class Post extends React.Component {


  render() {
   const { dbInfo, topicId, Database, DBusers } = this.props
  
    return (
      <div>
        <div className="PostFrame">
          {/* <div className="Buttons-bar">
              <button
                onClick={() => toggleModal('Reply')}
                className="Reply-button">Reply
              </button>
          </div> */}

          <div className="Wrapper-head">
            {
              dbInfo.map((post, id) => {
                console.log(dbInfo)
                return post.id === topicId ?
                  (
                    <div key={id}>
                      <div className="blue-title">{post.title_message}</div>
                      <div className="outer-main-wrapper">
                        <div className="main-wrapper" key={post.id}>

                          <div className="top-box">
                            <div className="user-name">{post.email}</div>
                            {
                              DBusers.map((user, id) => {
                                return post.email === user.email ?
                                  (
                                    <div key={id} className="user-posts">Posts: {user.entries}</div>
                                  ) : null
                              })
                            }
                            <div className="user-post-date">Posted on: {post.date.toString()}</div>
                          </div>
                          <div className="content-box">{`${post.text_message}`}</div>
                        </div>
                      </div>
                    </div>
                  )
                  : null
                //Maybe give Post.js a route so that Link can connect to this? Make sure the routing on NewTopic is dynamic when creating a topic so that it will link to this component. See if this will work
              })
            }
          </div>

          <div className="Replies">
            {
              Database.map((item, id) => {
                return item.topic_id === topicId ?
                  (
                    <div className="main-wrapper" key={item.id}>
                      <div className="top-box">{item.email} 
                      {
                        DBusers.map((user, id)=>{
                         return user.email === item.email ?
                         (
                          <div className="user-posts" key={id}>Posts: {user.entries}</div>
                         ) : null
                      })
                      }

                        <div className="user-post-date">Posted on: {item.date.toString()}</div>
                      </div>
                      <div className="content-box">{item.reply_message}</div>
                    </div>
                  ) : null
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Post;