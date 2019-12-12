import React from 'react';
import './TopicList.css'
import Topic from './Topic/Topic'

const TopicList = ({topic, goToTopic, fetchData, clearInput}) => {
    return (
        <div 
            className="Topic1">
            <div>
                {
                    topic.reverse().map((item, id) => {
                        return (
                            <Topic
                                clearInput={clearInput}
                                fetchData={fetchData}  //REMOVE THIS LINE IF GOING BACK TO COMPONENTDIDMOUNT
                                key={id}
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
    )
}

export default TopicList;