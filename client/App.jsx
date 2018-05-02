import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Menu from './components/Menu';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chillData: [],
    }
    this.getAppData = this.getAppData.bind(this)
  }

  componentDidMount(){
    this.getAppData()
  }

  getAppData() {

    axios.get(/*YOUR LAMBDA FCN HERE*/)
         .then(resp => {
           this.setState({chillData: resp.data})
         })
  }

  render() {
    const AppContainer = styled.div`

    `;


    const AppContent = styled.div`

    `;

    return (
      <AppContainer>
        <Menu/>
        <AppContent>
             <Route
               exact path="/"
               render={ routeProps => <Home {...routeProps} /> }
             />

             <Route
               exact path="/portfolio"
               render={ routeProps =>
                 <Portfolio {...routeProps}
                   chillData={this.state.chillData}
                 /> }
             />
         </AppContent>
      </AppContainer>
    )
  }
}
