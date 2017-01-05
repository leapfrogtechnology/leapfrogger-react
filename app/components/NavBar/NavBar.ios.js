import Ract, {Component, PropTypes} from 'react'
import {NavigationExperimental, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const {Header} = NavigationExperimental

export default class NavigationHeader extends Component {
    static propTypes = {
        title: PropTypes.string,
        onLeftPress: PropTypes.func,
        showDrawer: PropTypes.bool
    }

    _renderTitleComponent = () =
> {
    const {
    title
} = this.props
return (
    < Header.Title
textStyle = {styles.titleText
}>
{
    title
}
</
Header.Title >
)
}

_renderLeftComponent = () =
>
{
    const {onLeftPress, showDrawer} = this.props
    return (
        < TouchableView
    onPress = {onLeftPress}
    style = {styles.leftButton
}>
<
    Icon
    name = {showDrawer ? 'ios-menu' : 'ios-arrow-back'}
    size = {18}
    color = {'white'} / >
        < / TouchableView >
)
}

render()
{
    return (
        < Header
    {...
        this.props
    }
    style = {styles.container
}
    renderTitleComponent = {this._renderTitleComponent
}
    renderLeftComponent = {this._renderLeftComponent
}
/>
)
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'bluesteel'
    },
    titleText: {
        color: 'white'
    },
    leftButton: {
        padding: 14
    }
})