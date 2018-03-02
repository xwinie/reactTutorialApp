import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.city,
        tabBarVisible: false
    });
    render () {
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>欢迎 {params.user} 来到 {params.city} </Text>
            </View>
        )
    }
}

export default DetailPage;