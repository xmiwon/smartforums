import React from 'react';
import './CommunityPanel.css';

const initialState = {
    tempStore: []
}
class CommunityPanel extends React.Component {
    constructor() {
        super()
        this.state = initialState
    }
    componentDidMount() {
        setTimeout(()=> {
            fetch('http://localhost:3000/community-pages')
            .then(response => response.json())
            .then(data => this.setState({tempStore: data}))
          }, 100)
    }
    
    render() {
        const recent = this.state.tempStore.sort((a, b) => {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return b.posts - a.posts;
        });
    
        return (
            <div className="recent-topic-window">
                <div className="label-div"><label className="recent-label">Top Communities</label></div>
                <div className="RecentWindow">
                    {
                        recent.slice(0, 4).map((items, id) => {
                            return (
                                
                                <div className="RecentTopicCard" key={items.id}>

                                    <li className="ListCard">
                                        <div className="title_message">{items.community_name}

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
}

export default CommunityPanel;

