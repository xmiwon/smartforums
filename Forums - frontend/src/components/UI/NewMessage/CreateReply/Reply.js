import React from 'react'

const Reply = ({topicId, dbInfo}) => {
    return (
        <article className="br3 mv4 mw6 white center">
            <main>
            <form>
                    <div>                     
                        <label htmlFor="reply"><h1>Replying to:</h1></label>
                        <div>
                        {
                            //Debug this. Somehow the console log is being triggered twice upon clicking a topic. Clicking on Reply will display it once. It seems to have something to do with the fetchData() that causes the app to render twice. Make sure that Reply isnt auto loaded and will only load upon click 
                            console.log(dbInfo, topicId) 
                        }
                            
                            
                        {      
                            dbInfo.map((post, id) => {
                                return (
                                    post.id === topicId ?
                                    (
                                        <div key={post.id} className="bg-black">
                                            {post.body}
                                        </div>
                                    ) : null
                                )
                            })
                        }
                        </div>

                        
                        <label 
                            htmlFor="reply" 
                            className="f6 b db mb2">Comments 
                            <span className=" white normal black-60">(optional)</span>
                        </label>
                        <textarea
                               
                            maxLength="1000" 
                            id="reply" 
                            className="newTopic" 
                            aria-describedby="reply-desc"
                            >           
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