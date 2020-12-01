import React from 'react';
import './PageList.css'
import Page from './Page/Page'

const PageList = ({pageId, Database, communityPages}) => {
    const copyData = Database

    return (
        <div className="pagelist-body">
        <div className="pagelist-story-title">Stories</div>
            {
                
                copyData.map((item, id) => {
                   return item.id === pageId ? (
                       communityPages.map((data, id) => {
                           return item.id === data.community_id ? (
                               <div className="pagelist-wrap">

                                   <Page
                                       itemId={item.id}
                                       Database={Database}
                                       title={data.title_message}
                                       text={data.text_message}
                                       tag={data.tag}
                                       likes={data.likes}
                                       dislikes={data.dislikes}
                                       email={data.email}
                                       name={data.name}
                                       date={data.date}
                                       image={data.image}
                                   />
                                   <div className="pagelist-sidebar">
                                    <div className="pagelist-up-arrow">
                                        <svg
                                            className="arrow-up" 
                                            width="24"
                                            height="24">
                                            <path d="M0 21l12-18 12 18h-24zm12-16.197l-10.132 15.197h20.263l-10.131-15.197"/>
                                        </svg>
                                    </div>
                                    <div className="pagelist-likes">
                                    {
                                        data.likes > 1000 ?
                                        (
                                            "1.1k"
                                        ) : data.likes
                                    }
                                    </div>
                                    <div className="pagelist-down-arrow">
                                        <svg 
                                            className="arrow-down"
                                            width="24" 
                                            height="24"> 
                                            <path d="M0 3l12 18 12-18h-24zm12 16.197l-10.132-15.197h20.263l-10.131 15.197"/>
                                        </svg>
                                    </div>

                                    </div>
                               </div>
                           ): null 
                       })
                   ) : null
                })
            }
        </div>
    )
}

export default PageList;