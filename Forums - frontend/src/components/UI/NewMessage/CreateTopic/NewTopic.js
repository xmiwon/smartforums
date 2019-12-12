import React from 'react'
import './NewTopic.css'
const NewTopic = ({newText, messageLength, submitMessage, newTitle}) => {
    return (
        <article className="br3 mv4 mw6 white center">
            <main>
            <form>
                    <div>                     
                        <label htmlFor="title"><h1>Title</h1></label>  
                        <input 
                            id="title"
                            onChange={newTitle}>
                            </input>
                        <label htmlFor="comment" className="f6 b db mb2">Comments <span className=" white normal black-60">(optional)</span></label>
                        <textarea
                            onChange={newText}
                            maxLength="1000" 
                            id="comment" 
                            className="newTopic" 
                            aria-describedby="comment-desc">           
                         </textarea>
                         <div>{messageLength}/1000</div>
                    </div>
                </form>
                        <button
                            onClick={() => submitMessage()}
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
                            type="submit"
                            value="submit">Submit</button>                         
                
            </main>
</article>
            
    )
}

export default NewTopic;