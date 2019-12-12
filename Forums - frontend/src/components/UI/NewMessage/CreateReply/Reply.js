import React from 'react'

const Reply = () => {
    return (
        <article className="br3 mv4 mw6 white center">
            <main>
            <form>
                    <div>                     
                        <label htmlFor="reply"><h1>Reply</h1></label>  
                        
                        <label htmlFor="reply" className="f6 b db mb2">Comments <span className=" white normal black-60">(optional)</span></label>
                        <textarea   
                            maxLength="1000" 
                            id="reply" 
                            className="newTopic" 
                            aria-describedby="reply-desc">           
                         </textarea>
                         <div>/1000</div>
                    </div>
                </form>
                        <button
                            
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
                            type="submit"
                            value="submit">Submit</button>                         
                
            </main>
</article>
          
    )
}

export default Reply;