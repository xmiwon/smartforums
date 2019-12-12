import React from 'react'
import NewTopic from './CreateTopic/NewTopic'
import Reply from './CreateReply/Reply'

class TextRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textareaInput: '',
            title: '',
            userId: '',
            textId: '',
            routing:''
        }
      }

onTextInput = (event) => {
    this.state.textareaInput.length < 1000 || this.state.textareaInput.length === 1000 ? 
    this.setState({textareaInput: event.target.value})
     : 
    console.log('Reached limit')
}

onTitleInput = (event) => {
    this.state.title.length < 25 || this.state.title.length === 25 ?
    this.setState({title: event.target.value})
    :
    console.log('Too long title')
}

submitMessage = () => {
    const timeStamp = Date()
    const convertTime = timeStamp.replace('GMT+0100 (Central European Standard Time)', '')
    fetch('http://localhost:3000/submit', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
           userId: 1,
           id: Math.random(), // or Math.random().toString(36).slice(7)
           updateId: 1,
           date: convertTime,
           title: this.state.title,
           body: this.state.textareaInput,
        })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

updatePost = () => {

}

routingFunc = (route) => {
if (route === 'reply') {
    this.setState({routing: route})
}
}
    
    render() {
        return (
            <div>
            {
               this.props.hideTopic ? 
               <Reply
                    routingFunc={this.routingFunc}
                    dbInfo={this.props.dbInfo} 
                    topicId={this.props.topicId}
               />
               : <NewTopic
                   newTitle={this.onTitleInput}
                   submitMessage={this.submitMessage}
                   messageLength={this.state.textareaInput.length}
                   newText={this.onTextInput}
               />
           }
            </div>
        )
    }

}

export default TextRouter