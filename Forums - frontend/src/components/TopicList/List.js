import React from 'react';
import './List.css'
import Topic from './Topic/Topic'

import { Link } from 'react-router-dom'

class List extends React.Component {


render() {

const {topic, goToTopic, fetchData, clearInput, fetchReplies, fetchUsers} = this.props 
const latest = topic.sort((a,b) => new Date(b.date) - new Date(a.date))
        
    return ( 
        <div>
        <div className="Topic1">
                <div className="title-container">
                    <div className="list-title">Topics</div>                 
                </div>
                {
                    latest.map((item, id) => {
                        return (
                            <Link to={`/home/forum/topics/post/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'black'}}>
                                <Topic
                                    clearInput={clearInput}
                                    fetchReplies={fetchReplies}
                                    fetchUsers={fetchUsers}
                                    fetchData={fetchData}  //REMOVE THIS LINE IF GOING BACK TO COMPONENTDIDMOUNT
                                    date={item.date}
                                    title={item.title_message}
                                    body={item.text_message}
                                    postId={item.id}
                                    goToTopic={goToTopic}
                                />
                            </Link>
                        )
                    })               
                }
        </div>
    </div>
    )
}
}

export default List;

