import React from 'react';
import './List.css'
import Topic from './Topic/Topic'
import { Link } from 'react-router-dom'

class TopicList extends React.Component {
    constructor() {
        super()
    };

render() {

const {topic, goToTopic, fetchData, clearInput, toggleModal} = this.props 
const latest = topic.sort((a,b) => new Date(b.date) - new Date(a.date))
        
    return ( 
        <div>
        <div className="buttonBar tl lh-copy center w-100 hidden">
            <button
                onClick={toggleModal}
                className="white b ph2 bg-mid-gray dib hover-bg-black bn hover-shadow-inner pointer pa2">New Topic
            </button>
    </div>
        <div className="Topic1">
            <div>
                {
                    
                    latest.map((item, id) => {
                        return (
                        <Link to={`/post/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'black'}}>
                            <Topic
                                clearInput={clearInput}
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
    </div>
    )
}
}

export default TopicList;