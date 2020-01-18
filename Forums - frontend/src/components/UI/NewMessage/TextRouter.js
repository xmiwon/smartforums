import React from 'react'
import NewTopic from './CreateTopic/NewTopic'
import Reply from './CreateReply/Reply'
import { Route, Switch, Redirect } from 'react-router-dom'
// TEXTROUTER IS INSIDE MODAL AND THUS ONLY MANIPULATE CODE INSIDE MODAL
const initialState = {
    textareaInput: '',
    title: ''
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

onTitleInput = (event) => {
    this.state.title.length <= 25 ?
    this.setState({title: event.target.value})
    :
    console.log('Too long title')
}

submitMessage = (ids) => {
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
    this.props.toggleModal()    
}

    render() {
        return (
            <div>
            {
                <Switch>
                    <Route path="/post/">                         
                        <Reply
                            dbInfo={this.props.dbInfo} 
                            topicId={this.props.topicId}
                        />
                    </Route>

                    <Route path={`/home/user/`} >
                        <NewTopic
                            newTitle={this.onTitleInput}
                            submitMessage={this.submitMessage}
                            messageLength={this.state.textareaInput.length}
                            newText={this.onTextInput}
                            />
                    </Route>
               </Switch>
           }
            </div>
        )
    }

}

export default TextRouter