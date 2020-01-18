import React from 'react'
import './Topic.css'


const Topic = ({title, body, goToTopic, postId, fetchData, date, clearInput}) => {
    return (
        
        
        <div 
            onClick={() => {
                goToTopic(postId)
                fetchData()  //REMOVE THIS LINE IF GOING BACK TO COMPONENTDIDMOUNT
                clearInput()
                console.log(body, 'Topic.js')
            }}
            className='Card1 f3 pa3 ma3 dim pointer bw2 shadow-5'
            >
            <div className="blue">     
                {
                    title
                    }     
            </div>
            <div className="f5 ma3">
                {
                    body.length > 100 ?
                        body.substr(0, 101)
                    : 
                        body                           
                }
            </div>
            <div className="date f6">  
                    <h6>{date}</h6>   
            </div>

        </div>
          
    )
    
}
export default Topic;