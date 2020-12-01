import React from 'react';
import './RecentTopic.css';
const RecentTopic = ({topic}) => {

    const recent = topic.sort((a,b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div className="recent-topic-window">
            <div className="label-div"><label className="recent-label">Recent Topics</label></div>
            <div className="RecentWindow">
                {
                    recent.slice(0, 4).map((items, id) => {
                        return (
                            <div className="RecentTopicCard" key={items.id}>

                                <li className="ListCard"> 
                                            <div className="title_message">{items.title_message}
                                                
                                            </div>
                                            {/* <div className="text_message">
                                                {
                                                    items.text_message.length > 100 ? items.text_message.substr(0, 101) + ' ...'
                                                 : 
                                                    items.text_message
                                                }
                                           
                                        </div> */}
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

