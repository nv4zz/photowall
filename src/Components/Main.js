import React, {cloneElement, Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'
import {Link} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()
    }

    render () {
    console.log(this.props)
    return <div> 
        <h1> 
            <Link to="/"> Photowall </Link>
        </h1>
        <Route exact path = "/" render={() => (
        <div>
              <PhotoWall {...this.props}/>
        </div>
        )}/>
        <Route path = "/AddPhoto" render = {({history}) => (
            <AddPhoto {...this.props} onHistory={history}/>
        )}/>
    </div>
    }
} 

export default Main