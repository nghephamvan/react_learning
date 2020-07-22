import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class ImageCustome extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.imageHolder}>
                <Image source={{ uri: this.props.imageUri }} style={styles.image} />
                <View style={styles.textViewHolder}>
                    <Text numberOfLines={1} style={styles.textOnImage}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageHolder: {
        margin: 1,
        height: 120,
        flex: 1,
        position: 'relative'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 2
    },
    textViewHolder: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.15)',
        paddingHorizontal: 1,
        paddingVertical: 1,
        alignItems: 'center'
    },
    textOnImage: {
        color: '#e68a00',
        fontWeight: 'bold'
    }
})
