import React from 'react';
import './TopicList.css'
import Topic from './Topic/Topic'

const TopicList = ({topic, goToTopic, fetchData, clearInput, hideTopic, toggleModal}) => {
    const latest = topic.sort((a,b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });


    return ( 
        <div>
        <div className="tl lh-copy center br3 ma3 w-50 bg-white hidden ba">
        {
            hideTopic === false ?
                (
                    <button
                        onClick={toggleModal}
                        className="newButtonTopic white b ph2 bg-gray dib hover-bg-mid-gray bn hover-shadow-inner pointer pa2">New Topic</button>
                ) : null
        }
    </div>
        <div className="Topic1">
            <div>
                {
                    latest.map((item, id) => {
                        return (
                            <Topic
                                clearInput={clearInput}
                                fetchData={fetchData}  //REMOVE THIS LINE IF GOING BACK TO COMPONENTDIDMOUNT
                                key={item.id}
                                date={item.date}
                                title={item.title_message}
                                body={item.text_message}
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