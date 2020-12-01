import React, { Component } from 'react'
import './TimelineRouter.css'

import StatusFeed from './StatusFeed/StatusFeed'

const initialState = {
    typing: ''
}


class TimelineRouter extends Component {
    constructor() {
        super()
        this.state = initialState
    }
    

    onInputChange = (event) => {
        this.setState({typing:event.target.value})
      }
    render() {
        return (
            <div>
                <StatusFeed 
                    DBtimeline={this.props.DBtimeline}
                    userInfo={this.props.userInfo}
                    onInputChange={this.onInputChange}
                    typing={this.state.typing}
                />
            </div>
        )
    }
    
}

export default TimelineRouter;
