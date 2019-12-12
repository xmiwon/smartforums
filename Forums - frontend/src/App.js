import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation'
import Particles from 'react-particles-js';


import TopicList from './components/TopicList/TopicList'
import Post from './Post'
import RecentTopic from './RecentTopic'
import Profile from './components/Profile/Profile'

import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'

const particlesOptions = {
    particles: {
      number: {
        value: 15,
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
      "speed": 0.1,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 80,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 5.181158184520175,
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
    "speed": 1,
    "direction": "none",
    "random": false,
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
  showTopics: true,
  searchTopicInput: '',
  imageUrl: '',
  box: {},
  DB: [],
  route: 'signin',
  postingID: null,
  isSignedIn: false,
  hideTopic: false,
  showModal: false,
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

  //Maybe change this one later. Find a better logic
 fetchData = () => {
   fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => this.setState({DB: data}))
    console.log(this.state.DB)
 }


toggleModal = () => {
    const toggle = this.state.showModal
    this.setState({showModal: !toggle})
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

calculateFaceLocation = (data) => {
 const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
 const image = document.getElementById('inputimage')
 const width = Number(image.width);
 const height = Number(image.height);
 return {
   leftCol: clarifaiFace.left_col * width,
   topRow: clarifaiFace.top_row * height,
   rightCol: width - (clarifaiFace.right_col * width),
   bottomRow: height - (clarifaiFace.bottom_row * height)
 }
}

displayFaceBox = (box) => {
  console.log(box)
  this.setState({box: box})
}

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
}

goToTopic = (ids) => {
  this.setState({showTopics: false})
  this.setState({postingID: ids}, () => {
    console.log('Post id' ,this.state.postingID)
  })
  this.setState({hideTopic: true})
}

  render() {
    const { isSignedIn, route } = this.state
    const flattenDB = this.state.DB
    const filterTopic = flattenDB.filter(topic => {
      return topic.title.toLowerCase().includes(this.state.searchTopicInput.toLowerCase())

    })
    return (
      <div className="App">

      <Particles 
        className='particles'
        params={particlesOptions} 
      />

      <Navigation 
        toggleModal={this.toggleModal}
        showModal={this.state.showModal}
        isSignedIn={isSignedIn} 
        onRouteChange={this.onRouteChange}
        onInputChange={this.onInputChange} 
        hideTopic={this.state.hideTopic}
      />

      {/*If logged in, display these */ 
        route === 'home' ?
        <div>
        <Profile 
          name={this.state.user.name}
          entries={this.state.user.entries} 
        />
        <RecentTopic 
          topic={flattenDB}
        />
            
            
<button onClick={()=> {
  this.setState({showTopics: true})
  this.setState({hideTopic: false})
  }}>Show</button>
              {
                this.state.showTopics ?
                (
                  <div>

                    <TopicList
                      clearInput={this.clearInput}
                      fetchData={this.fetchData}
                      goToTopic={this.goToTopic}
                      topic={filterTopic}               
                    />                    
                  </div>
                ) : <Post //This one should be here.. should be in topicList where rendering is either topic or post
                      topicId={this.state.postingID}
                      dbInfo={flattenDB} />
              }              
            
        </div>
        : 
            (
              route === 'signin' || route === 'signout' ?
              (
               
                <Signin
                  fetchData={this.fetchData}
                  loadUser={this.loadUser} 
                  onRouteChange={this.onRouteChange} />
          
              )
              
              : <Register 
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser} />
            )   
      }
    </div>
    )
  };
}

export default App;
