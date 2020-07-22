import React, { Component } from 'react';
import Api from '../network/api';
import ImageCustom from '../Image/ImageCustom';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

export default class GitUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        this.setState({ isloading: true })
        await Api.get('/search/users', {
            params: {
                per_page: 20,
                q: 'nghe'
            }
        })
            .then((res) => {
                if (res.data.items !== '' || res.data.items !== null) {
                    this.setState({ users: res.data.items, isLoading: false })
                }
                console.log(res.data)
            })
            .catch(err => console.error(err))
            .finally(this.setState({ isLoading: false }))
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.users}
                        renderItem={({ item }) => (
                            <ImageCustom imageUri={item.avatar_url} name={item.login}/>
                        )}
                        //Setting the number of column
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: '#000'
    },
    textStyle: {
        fontSize: 15,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});
