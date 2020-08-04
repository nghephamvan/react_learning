import React from 'react';
import { Alert, View } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'

const FBPermissions = ['public_profile', 'email', 'pages_show_list', 'pages_manage_posts', 'pages_read_engagement', 'pages_read_user_content', 'pages_messaging', 'pages_manage_metadata']

export default class FB {
    constructor() {
        this.userInfo = {
            userPages:[]
        }
    } 

    static get FBButton() {
        return (
            <View> 
                <LoginButton
                    permissions={FBPermissions}
                    onLoginFinished={fbService.onLoginFinished}
                    onLogoutFinished={fbService.onLogoutFinished}
                />
            </View>
        )
    }

    onLogoutFinished = () => {
        console.log('user logged out');
    }

    onLoginFinished = (error, result) => {
        if (error) {
            this.onLoginFailed(error)
        } else if (result.isCancelled) {
            this.onLoginCancelled()
        } else {
            this.onLoginSuccess(result)
        }
    }

    onLoginFailed(error) {
        console.log('User Logged out');
    }

    onLoginCancelled() {
        console.log('login is cancelled!');
    }

    onLoginSuccess = (result) => {
        Alert.alert("Nice", "You have logged in successfully")

        

    }
}

export let fbService = Object.seal(new FB)