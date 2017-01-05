import React, { Component } from 'react'
import { 
    Text, 
    View,
    Image,
    ListView,
    BackAndroid
} from 'react-native'

import styles from './styles'
import FavouriteCard from '../../components/FavouriteCard'

export default class Favourites extends Component{

    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.favouriteEmployees)
        };
        this._renderRow = this._renderRow.bind(this)
        this._handleBackAction = this._handleBackAction.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.favouriteEmployees !== this.props.favouriteEmployees){
            this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.favouriteEmployees)});
        }
    }

    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
    }

    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
    }

    render(){
        return(
                <ListView contentContainerStyle={styles.container}
                  dataSource={this.state.dataSource}
                  renderRow={(employee) => this._renderRow(employee)}
                  enableEmptySections={true}
                />
        );
    }

    _renderRow(employee){
        return(
            <FavouriteCard employee={employee}/>
        );
    }

    _handleBackAction(){
        this.props.navigatePage({key: 'home'});
        return true;
    }


}