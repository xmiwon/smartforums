import React from 'react';
const RecentTopic = ({topic}) => {

    const gori = topic.sort((a,b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.updateId) - new Date(a.updateId);
    });

    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">

            <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0">Recent Topics</h1>
                    </div>
                    
                </div>
                <div className="f6 lh-copy measure mt2">
                    {
                        gori.reverse().map((items, id) => {
                            return (                          
                                <p key={id}>{items.title}</p>
                            )
                        })
                    }

    </div>
  </div>
        </article>
    )
    

}

export default RecentTopic;