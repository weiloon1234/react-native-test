'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SkypeIndicator } from 'react-native-indicators';

import * as Actions from '../actions/index';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';

class HomeScreen extends Component {
  componentDidMount() {
    // setTimeout( _ => {
    //   this.props.appLoaded();
    // }, 2000);
  }

  render() {
    if (this.props.loading) {
      return (
        <SkypeIndicator />
      );
    } else {
      return (
        <Container>
          <Header>

          </Header>
          <Body>
            <Button
              onPress={() =>
                this.props.navigation.navigate('LoginScreen')
              }><Text>Login now</Text></Button>
            <Text>Hello</Text>
          </Body>
        </Container>

      );
    }
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    loading: state.loading,
    user: state.user,
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/homeScreen.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);