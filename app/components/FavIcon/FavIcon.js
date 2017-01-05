import React, { Component } from 'react'
import { 
	Image, 
	TouchableHighlight, 
	StyleSheet
} from 'react-native'

export default class FavIcon extends Component {

	constructor(props){
		super(props);
		this._toggleState = this._toggleState.bind(this)
		this._makeFavourite = this._makeFavourite.bind(this)
		this._removeFavourite = this._removeFavourite.bind(this)
	}

	render() {
		return(
			<TouchableHighlight
			onPress = { this._toggleState }>
				<Image style={this.props.isFavourite ? styles.listed : styles.unListed } source={require('../../images/ic_star_rate_black_18dp.png')}/>
			</TouchableHighlight>
		);
	}

	_toggleState(){
		if(this.props.isFavourite){
			this._removeFavourite();
		}else{
			this._makeFavourite();
		}
	}

	_makeFavourite(){
		this.props.makeFavourite(this.props.employeeId);
	}

	_removeFavourite(){
		this.props.removeFavourite(this.props.employeeId);
	}
}



const styles = StyleSheet.create({
	listed: {
		tintColor: 'gold'
	},
	unListed: {
		tintColor: '#AAA9A9'
	}

})
