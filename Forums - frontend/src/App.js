import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation'
import Particles from 'react-particles-js';
import Modal from './components/UI/Modal/Modal'
import Dropdown from './components/UI/Dropdown/Dropdown'


import List from './components/TopicList/List'
import Post from './components/TopicList/Post/Post'
import RecentTopic from './components/RecentTopic/RecentTopic'
import Profile from './components/Profile/Profile'
import TextRouter from './components/UI/NewMessage/TextRouter'
import TimelineRouter from './components/TimelineRouter/TimelineRouter'
import Footer from './components/UI/Footer/Footer'
import Settings from './components/UI/Settings/Settings'
import CommunityPanel from './components/Community/CommunityPanel/CommunityPanel'
import CommunityRender from './components/Community/CommunityRender/CommunityRender'
import FrontPage from './components/Community/CommunityPage/FrontPage/FrontPage'
import Info from './components/Info/Info'

import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import { Route, Redirect, Switch, Link } from 'react-router-dom';


const particlesOptions = {
    particles: {
      number: {
        value: 10,
          density: {
            enable: true,
            value_area: 800
          }
      },
      color: {
        value: ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#b6b2b2"
        }
  },
  "opacity": {
    "value": 0.5211089197812949,
    "random": false,
    "anim": {
      "enable": true,
      "speed": 0,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 80,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 1.181158184520175,
      "size_min": 0.1,
      "sync": true
    }
  },
  "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#c8c8c8",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 0.5,
    "direction": "none",
    "random": true,
    "straight": false,
    "out_mode": "bounce",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": false,
      "mode": "repulse"
    },
    "onclick": {
      "enable": false,
      "mode": "push"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 400,
      "size": 40,
      "duration": 2,
      "opacity": 8,
      "speed": 3
    },
    "repulse": {
      "distance": 200,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
}

    
const initialState = {
  searchTopicInput: '',
  imageUrl: '', //can remove
  box: {}, //can remove
  Database: [],
  communityPages: [],
  DBtopic: [],
  DBtimeline: [],
  DBusers: [],
  route: null,
  postingID: null, //universal id variable for both topics and communities
  communityId: null,
  isSignedIn: false,
  showModal: '',
  showDropdown: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState   
  }


  fetchPages = (address) => {
    setTimeout(()=> {
      fetch(address)
      .then(response => response.json())
      .then(data => this.setState({communityPages: data}))
    })
  }


  fetchCommunities = () => {
    setTimeout(()=> {
      fetch('http://localhost:3000/community-pages')
      .then(response => response.json())
      .then(data => this.setState({Database: data}))
    }, 100)
  }

  //Maybe change this one later. Find a better logic
 fetchData = () => {
  setTimeout(()=> {
    fetch('http://localhost:3000/home')
    .then(response => response.json())
    .then(data => this.setState({DBtopic: data}))
  }, 0)}

 fetchUsers = () => {
   setTimeout(() => {
     fetch('http://localhost:3000/users')
     .then(response => response.json())
     .then(data => this.setState({DBusers: data}))
   })
 }

 fetchReplies = () => {
   setTimeout(() => {
     fetch('http://localhost:3000/post')
     .then(response => response.json())
     .then(data => this.setState({Database: data}))
   })
 }
 fetchTimeline = () => {
   fetch('http://localhost:3000/timeline')
   .then(res => res.json())
   .then(data => this.setState({DBtimeline: data}))
 }

toggleModal = (key) => {
    this.setState({showModal: key})
}

toggleDropdown = () => {
  const toggle = this.state.showDropdown
  this.setState({showDropdown: !toggle})
}
loadUser = (data) => {
    this.setState({ user: 
      {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
}

// onButtonSubmit = () => {
//     this.setState({ imageUrl: this.state.input})
//     fetch('http://localhost:3000/imageurl', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         searchTopicInput: this.state.searchTopicInput
//       })
//     })
//     .then(response => response.json())
//     .then(response => {
//       if (response) {
//         fetch('http://localhost:3000/image', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             id: this.state.user.id
//           })
//         })
//         .then(response => response.json())
//         .then(count => {
//           this.setState(Object.assign(this.state.user, 
//             {
//             entries: count
//           }))
//         })
//         .catch(console.log)
//       }
//       console.log(this.state.user)
//       this.displayFaceBox(this.calculateFaceLocation(response))
//     })
//     .catch(err => console.log(err));
// }

// calculateFaceLocation = (data) => {
//  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
//  const image = document.getElementById('inputimage')
//  const width = Number(image.width);
//  const height = Number(image.height);
//  return {
//    leftCol: clarifaiFace.left_col * width,
//    topRow: clarifaiFace.top_row * height,
//    rightCol: width - (clarifaiFace.right_col * width),
//    bottomRow: height - (clarifaiFace.bottom_row * height)
//  }
// }

// displayFaceBox = (box) => {
//   console.log(box)
//   this.setState({box: box})
// }

onInputChange = (event) => {
  this.setState({searchTopicInput:event.target.value})
}


clearInput = () => {
  this.setState({searchTopicInput: ''})
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn: 'true'})
  }
  this.setState({route: route})
  setTimeout(() => {console.log(this.state.route)}, 100)
  
  
}

goToTopic = (ids) => {
  this.pageClick(ids)
}

pageClick = (id, cId) => {
  this.setState({postingID: id, communityId: cId}, () => {console.log(this.state.postingID, this.state.communityId)})
  }

  render() {
    const { isSignedIn, route } = this.state
    const dbJSON = this.state.DBtopic
    const filterTopic = dbJSON.filter(topic => {
      return topic.title_message.toLowerCase().includes(this.state.searchTopicInput.toLowerCase())

    })
    
      return (
        // {this.state.showModal === 'Timeline' ?classes.off : null}
        <div className="App">

      <Particles 
        className="particles"
        params={particlesOptions} 
      />

      <Navigation 
        dbInfo={dbJSON}
        isSignedIn={isSignedIn} 
        onRouteChange={this.onRouteChange}
        onInputChange={this.onInputChange} 
        toggleModal={this.toggleModal}
        toggleDropdown={this.toggleDropdown}
      />
        <Dropdown 
          showDropdown={this.state.showDropdown}
          toggleDropdown={this.toggleDropdown}
          onRouteChange={this.onRouteChange}>

          <Settings />
          
        </Dropdown>
      {/*If logged in, display these */ 
        route === 'home' ?
        <div>
        <Redirect from="(/home|/register)" to={`/home/forum/topics/${this.state.user.name.toLowerCase()}/`} />
        <div>
          <div>
          <Route path={`/home/community-pages/${this.state.postingID}`}>
            <FrontPage 
                Database={this.state.Database}
                fetchCommunities={this.fetchCommunities}
                pageId={this.state.postingID}
            />
          </Route>
            
          </div>
        <div className="center-panel">
           
              <div className="inner-panel">
                <Switch>
                    <Route path={`/home/forum/topics/${this.state.user.name.toLowerCase()}/`} exact>
                      <List
                        toggleModal={this.toggleModal}
                        clearInput={this.clearInput}
                        fetchData={this.fetchData}
                        goToTopic={this.goToTopic}
                        topic={filterTopic}
                        fetchUsers={this.fetchUsers}
                        fetchReplies={this.fetchReplies}
                      />
                    </Route>
                    <Route path="/home/forum/topics/post/">
                      <Post //This one should be here.. should be in topicList where rendering is either topic or post
                        topicId={this.state.postingID}
                        toggleModal={this.toggleModal}
                        dbInfo={dbJSON}
                        Database={this.state.Database}
                        name={this.state.user.name}
                        DBusers={this.state.DBusers}
                        entries={this.state.user.entries} />
                    </Route>
                    {/* <Route path="/timeline/">
                      <Timeline>

                      </Timeline>               
                    </Route> */}
                    <Route path={`/home/community-pages`}> 
                        <CommunityRender
                          communityPages={this.state.communityPages}
                          fetchPages={this.fetchPages}
                          Database={this.state.Database}
                          fetchCommunities={this.fetchCommunities}
                          postingID={this.state.postingID}
                          communityId={this.state.communityId} 
                          pageClick={this.pageClick}
                          users={this.fetchUsers} />
                      
                    </Route>
                </Switch>
                </div>
              
                <div className="right-panel">
                 
                    <div className="Buttons-bar">
                      <Switch>
                        <Route path={`/home/forum/topics/${this.state.user.name.toLowerCase()}/`} exact>                      
                            <button
                              onClick={() => this.toggleModal('New Topic')}
                              className="Create-button">New Topic
                            </button>
                            <Link to={`/home/community-pages`}>
                              <button className="Create-button">
                                Page
                              </button>
                            </Link>
                            <button className="Create-button">
                              Timeline
                            </button> 
                        </Route>
                        <Route path={`/home/forum/topics/post/`}>
                          <button
                            onClick={() => this.toggleModal('Reply')}
                            className="Create-button">Reply
                          </button>
                          <button className="Create-button">
                            Timeline
                          </button>
                        </Route>
                      </Switch>
                  
                  </div>
                    <Profile
                      name={this.state.user.name}
                      entries={this.state.user.entries}
                      showModal={this.state.showModal}
                      toggleModal={this.toggleModal}
                      fetchTimeline={this.fetchTimeline}
                    />
                    <RecentTopic
                      topic={dbJSON}
                    />
                      <CommunityPanel topic={this.state.Database} fetchCommunities={this.fetchCommunities}/>
                    <Info />
                    
                </div>
        </div>
        </div>
                  <Footer />
                <Route path={`/home/forum/topics/`}>
                  <Modal
                    showModal={this.state.showModal}
                    toggleModal={this.toggleModal}>
                    {
                      this.state.showModal === 'New Topic' || this.state.showModal === 'Reply' ?
                        (

                          <TextRouter
                            toggleModal={this.toggleModal}
                            transferDB={this.state.DBtopic}
                            fetchData={this.fetchData}
                            dbInfo={dbJSON}
                            topic={filterTopic}
                            topicId={this.state.postingID}
                            showModal={this.state.showModal}
                            email={this.state.user.email}
                            name={this.state.user.name}
                            fetchReplies={this.fetchReplies}
                          />
                        ) : <TimelineRouter
                          DBtimeline={this.state.DBtimeline}
                          userInfo={this.state.user}
                          onInputChange2={this.onInputChange2}
                          typing={this.state.typing}
                        />
                    }
                  </Modal>
                </Route>
        </div>
        : 
        <div>
        
              <Redirect from="" to="/start" />
                <Route path="/start" exact>
                    <Signin
                      fetchData={this.fetchData}
                      loadUser={this.loadUser}
                      onRouteChange={this.onRouteChange} />
                </Route>
                <Route path="/register" exact>  
                  <Register 
                    onRouteChange={this.onRouteChange}
                    loadUser={this.loadUser} />        
                </Route>
            
          </div>
      }
  
    </div>
    )
  
  };
}

export default App;