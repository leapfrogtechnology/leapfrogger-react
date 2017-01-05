import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	favCard: {
		borderColor: '#4caf50',
		borderWidth: 1,
		height: 150,
		width: 150,
		marginTop: 10,
		marginBottom: 10,
		flexDirection: 'column'
	},
	favCardInfo: {
		alignItems: 'center',
		padding: 10,
	},
	headerImage: {
		height: 50,
		width: 50,
		borderRadius: 50,
		borderColor: 'gray',
		borderWidth: 1
	},
	employeeName: {
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	employeeDesignation: {
		fontSize: 10,
		textAlign: 'center'
	},
	thumbnailTabContainer: {
		backgroundColor:'#4caf50',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	phoneImage: {
    	height: 25,
    	width: 25,
    	tintColor: '#fff'
  	},
  	favIcon: {
  		position: 'absolute',
  		top: 0,
  		right: 0,
  	}
});

export default styles;
