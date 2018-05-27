'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Body, Button, Container, Content, Header, Icon, Left, Text, Title, View } from "native-base";
import t from 'tcomb-form-native';
import { LoginUserModel, LoginUserModelOption } from "../models/UserModel";
import styles from '../styles';
import LoadingButton from 'react-native-loading-button';
import * as UserActions from '../actions/user';

const Form = t.form.Form;

const ps = StyleSheet.create({
  ...styles,
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20
  },
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  onSubmitHandler = () => {
    const value = this._form.getValue();

    if(value) {
      this.props.userLogin(value.username, value.password);
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
          <Title>Headers</Title>
          </Body>
        </Header>
        <Content padder>
          <View style={ps.container}>
            <Form ref={c => this._form = c} type={LoginUserModel} options={LoginUserModelOption} />
            <LoadingButton
              block
              onPress={this.onSubmitHandler.bind(this)}
              isLoading={this.props.loading}
              style={{ justifyContent: 'center' }}
            ><Icon name="checkmark"/><Text>Login Now</Text></LoadingButton>
          </View>
        </Content>
      </Container>
    );
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
  return bindActionCreators(UserActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);