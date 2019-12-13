import React from 'react';
import './TopicList.css'
import Topic from './Topic/Topic'

const TopicList = ({topic, goToTopic, fetchData, clearInput, hideTopic, toggleModal}) => {
    return ( 
        <div>
        <div className="tl lh-copy  br3 ma3 w-85 bg-white hidden ba">
        {
            hideTopic === false ?
                (
                    <p
                        onClick={toggleModal}
                        className="white b ph2 bg-gray dib hover-bg-mid-gray bn hover-shadow-inner pointer">New Topic</p>
                ) : null
        }
    </div>
        <div className="Topic1">
            <div>
                {
                    topic.reverse().map((item, id) => {
                        return (
                            <Topic
                                clearInput={clearInput}
                                fetchData={fetchData}  //REMOVE THIS LINE IF GOING BACK TO COMPONENTDIDMOUNT
                                key={item.id}
                                date={item.date}
                                title={item.title}
                                body={item.body}
                                postId={item.id}
                                goToTopic={goToTopic}
                        />
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default TopicList;