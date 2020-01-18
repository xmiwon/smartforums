import React from 'react';
import './RecentTopic.css';
const RecentTopic = ({topic}) => {

    const recent = topic.sort((a,b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div>
            <h2>Recent Topics</h2>
            <div className="RecentWindow">
                {
                    recent.slice(0, 4).map((items, id) => {
                        return (
                            <div className="RecentTopicCard" key={items.id}>

                                <li 
                                    className="ListCard dim pointer bw2 shadow-5" 
                                    >
                                        <div className="CardWrapper">
                                            <div className="title_message">{items.title_message}
                                                
                                            </div>
                                            <div className="text_message">
                                                {
                                                    items.text_message.length > 100 ? items.text_message.substr(0, 101) + ' ...'
                                                 : 
                                                    items.text_message
                                                }
                                            </div>
                                        </div>
                                </li>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RecentTopic;

