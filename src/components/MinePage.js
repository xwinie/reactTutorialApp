import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation'
import { View, Text ,Button} from 'react-native';

class MinePage extends Component {
    static navigationOptions = {
        title: '我的',
    };
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>小罗</Text>
                <Button
                    style={{ marginTop: 22, padding: 20 }}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title='消息'
                />
            </View>
        )
    }
}


class MessagePage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '消息',
        drawerLabel: '消息'
    });
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='返回我的页'
                />
            </View>
        )
    }
}

const MineNavigator = DrawerNavigator({
    Mine: {
        screen: MinePage,
    },
    Msg: {
        screen: MessagePage,
    }
});

export default MineNavigator;