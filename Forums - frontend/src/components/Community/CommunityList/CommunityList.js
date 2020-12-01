import React from 'react';
import './CommunityList.css'
import Card from './Card/Card';
import { Link } from 'react-router-dom'

const CommunityList = ({ filtering, pageClick, fetchPages }) => {
    return (
            <div> 
                    <div className="community-list">
                    <div className="community-list-title">Communities</div>
                        {
                            filtering.map((item, id) => {
                                return (
                                    <div key={id} className="card-wrap">
                                        <div className="inner-card-wrap" onClick={() => pageClick(item.id)}>                 
                                                <Link to={`/home/community-pages/${item.id}`} key={item.id} exact >
                                                    <Card
                                                        fetchPages={fetchPages}
                                                        name={item.community_name}
                                                        about={item.about_desc}
                                                        tag={item.tag}
                                                        likes={item.likes}
                                                        posts={item.posts}
                                                        members={item.members}
                                                        date={item.date}
                                                    />
                                                </Link>
                                        </div>
                                            <div className="community-join-wrap">
                                                <label onClick={() => pageClick('Golist')} className="community-join">Join</label>
                                            </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
    )
}

export default CommunityList;


