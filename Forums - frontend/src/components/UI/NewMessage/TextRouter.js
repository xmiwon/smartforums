import React from 'react'
import NewTopic from './CreateTopic/NewTopic'
import Reply from './CreateReply/Reply'
import { Route, Switch } from 'react-router-dom'
// TEXTROUTER IS INSIDE MODAL AND THUS ONLY MANIPULATE CODE INSIDE MODAL
const initialState = {
    textareaInput: '',
    title: '',
    replyInput: ''
}


class TextRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
      }

onTextInput = (event) => {
    this.state.textareaInput.length <= 1000 ? 
    this.setState({textareaInput: event.target.value})
     : 
    console.log('Reached limit')
}
onReplyInput = (event) => {
    this.state.replyInput.length <= 1000 ?
    this.setState({replyInput: event.target.value})
    :
    console.log('Reached limit')
}

cleanState = () => {
    this.setState({title: ''})
    this.setState({textareaInput: ''})
    this.setState({replyInput: ''})
}

onTitleInput = (event) => {
    this.state.title.length <= 25 ?
    this.setState({title: event.target.value})
    :
    console.log('Too long title')
}

submitMessage = () => {
    fetch('http://localhost:3000/create-topic', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
           email: this.props.email,
           title_message: this.state.title,
           text_message: this.state.textareaInput,
        })
    })
    .then(response => response.json('Submit successful!'))
    .catch(err => console.log(err))
    console.log(this.props.email, 'From TextRouter.js')
    this.props.fetchData()
    this.props.toggleModal('')    
}

submitReply = () => {
    console.log(this.props.topicId, 'THIS IS FFROM TEXTROUTER')
    fetch('http://localhost:3000/post-reply', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            topic_id: this.props.topicId,
            email: this.props.email,
            name: this.props.name,
            reply_message: this.state.replyInput
        })
    })
    .then(response => response.json('Replied successfully'))
    .catch(err => console.log(err))
    this.props.toggleModal() 
    setTimeout(() => {
        this.props.fetchReplies()
        
    }, 1500)
}

    render() {
        return (
            <div>
            {
                <Switch>
                    <Route path="/home/forum/topics/post/">                         
                        <Reply
                            dbInfo={this.props.dbInfo}
                            submitReply={this.submitReply} 
                            topicId={this.props.topicId}
                            onReplyInput={this.onReplyInput}
                            messageLength={this.state.replyInput.length}
                            cleanState={this.cleanState}
                        />
                    </Route>

                    <Route path={`/home/forum/topics/`} >
                        <NewTopic
                            newTitle={this.onTitleInput}
                            submitMessage={this.submitMessage}
                            messageLength={this.state.textareaInput.length}
                            newText={this.onTextInput}
                            cleanState={this.cleanState}
                            />
                    </Route>
               </Switch>
           }
            </div>
        )
    }

}

export default TextRouter