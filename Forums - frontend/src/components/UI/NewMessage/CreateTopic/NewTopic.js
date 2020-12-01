import React from 'react'
import './NewTopic.css'
const NewTopic = ({newText, messageLength, submitMessage, newTitle, cleanState}) => {
    return (
       
        <article className="br3 mv4 mw6 white center">
            <main>
            <form>
                    <div>        {console.log('NewTopic.js', 'onChange is possibly a performance hit')}              
                        <label htmlFor="title"><h1>Title</h1></label>  
                        <input id="title" onChange={newTitle}/> 
                        <label htmlFor="community" className="f6 b db mb2">Community<span className=" white normal black-60">(optional)</span></label>
                        <input id="community"/> 
                        
                        <label htmlFor="comment" className="f6 b db mb2">Comments</label>
                        <textarea
                            onChange={newText}
                            maxLength="25000" 
                            id="comment" 
                            className="newTopic" 
                            aria-describedby="comment-desc">           
                         </textarea>
                         <div>{messageLength}/25000</div>
                    </div>
            </form>
{//Take a look at how Topic, TopicList, Post work
}              
                        <button
                            onClick={() => {
                                submitMessage()
                                cleanState()
                                }} 
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
                            type="submit"
                            value="submit">Submit
                        </button>                    
                
            </main>
</article>
            
    )
}

export default NewTopic;