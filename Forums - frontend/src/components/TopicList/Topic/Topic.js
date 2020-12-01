import React from 'react'
import './Topic.css'


const Topic = ({title, body, goToTopic, postId, fetchData, date, clearInput, fetchReplies, fetchUsers}) => {
    return (
        
        
        <div 
            className="Card1"
            onClick={() => {
                goToTopic(postId)
                fetchData()  //REMOVE THIS LINE IF GOING BACK TO COMPONENTDIDMOUNT
                fetchReplies()
                fetchUsers()
                clearInput()
                console.log(body, 'Topic.js')
            }}
            
            >
            <div className="blue">     
                {
                    title
                    }     
            </div>
            <div className="topic-content">
                {
                    body.length > 100 ?
                        body.substr(0, 101)
                    : 
                        body                           
                }
            </div>
            <div className="date">  
                {date} 
            </div>

        </div>
          
    )
    
}
export default Topic;