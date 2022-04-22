import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    onSignUp() {

    }

    render() {
        return (
            <View>
                <TextInput
                    placeHolder="name"
                    onChangeText={(name => this.setState({ name }))} />
                <TextInput
                    placeHolder="email"
                    onChangeText={(email => this.setState({ email }))} />
                <TextInput
                    placeHolder="password"
                    secureTextEntry={true}
                    onChangeText={(password => this.setState({ password }))} />

                <Button
                    onPress={() => this.onSignUp()}
                    title="Sign Up" />
            </View>
        )
    }
}

export default Register