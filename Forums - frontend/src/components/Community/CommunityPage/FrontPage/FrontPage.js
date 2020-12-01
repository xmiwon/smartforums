import React from 'react';
import './FrontPage.css'


const initialState = {
    DatabaseTitle: []
}



class FrontPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }


  componentDidMount() {
      this.props.fetchCommunities()
      this.setState({DatabaseTitle: this.props.Database},()=>console.log('fromfrontpage', this.state.DatabaseTitle))
  }

    render() {
    const {pageId, Database} = this.props
    const box = Database
    
    return (
        <div className="front-container">
            <img className="image-container" src="https://styles.redditmedia.com/t5_2ro2c/styles/bannerBackgroundImage_l5gu5ho90rn41.jpg?format=pjpg&s=9b31ee671f31a4753a3da7691ca1f2ebec51fb81" alt="pic" />               
           

            <div className="front-page-bottom">
                <div className="front-page-title">
                {
                    box.map((item, id) => {
                        return item.id === pageId ? 
                        (
                            <div>{item.community_name}</div>
                        ) : null
                    })    
                }
                </div>
            </div>
        </div>
    )
}
}
export default FrontPage