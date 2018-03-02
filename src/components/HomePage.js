import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailPage from './DetailPage'

class HomePage extends Component {
    static navigationOptions = {
        title: '首页',
    };
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    onPress={() => this.props.navigation.navigate('Detail', { user: '小罗', city: '桂林'})}
                        title='城市：桂林'
                />
            </View>
        )
    }
}

const HomeNavigator = StackNavigator({
    Home: {
        screen: HomePage,
    },
    Detail: {
        screen: DetailPage,
    }
});

export default HomeNavigator;