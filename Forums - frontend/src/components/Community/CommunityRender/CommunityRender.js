import React, { Component } from 'react';
import CommunityList from '../CommunityList/CommunityList'
import PageList from '../CommunityPage/PageList/PageList'

import { Switch, Route } from 'react-router-dom';


const initialState = {
    Database: []
  }
  

class CommunityRender extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
      }


    componentDidMount() {
      this.props.fetchCommunities()
            //FOr some reason the setState is not setting the value the first time
      this.setState({Database: this.props.Database},()=>console.log('fromrender', this.state.Database))
    }
    

 
    render() {
        const { postingID, pageClick, Database, fetchPages, communityId, communityPages } = this.props 
        const filtering = Database


        // if (filtering.length === 0) {
        //     return <p>Loading..</p>
        // } else {
        return (
            <div>
            <Switch>
              <Route path={`/home/community-pages`} exact>
              {//The list of different communities
              }
                <CommunityList                 
                    communityId={communityId}
                    fetchPages={fetchPages}
                    fetchCommunities={this.props.fetchCommunities}
                    pageClick={pageClick} 
                    filtering={filtering}
                    database={filtering}/>
              </Route>
              <Route path={`/home/community-pages/${postingID}`} >
              {//The list of pages of one community
              }
                <PageList Database={Database} pageId={postingID} communityPages={communityPages} />
              </Route>
              
              </Switch>
                
            </div>
        )
    }
    // }
}

export default CommunityRender;