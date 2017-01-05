import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './styles';
import { getEmployeeFullName } from '../../utils/EmployeeUtils';
import FavIcon from '../../components/FavIcon'

export default ({employee}) => {
    return (
        <View style={styles.favCard}>
            <View style={styles.favCardInfo}>
                <View style={styles.favIcon}> 
                    <FavIcon isFavourite={employee.isFavourite} employeeId={employee.empId}/> 
                </View>
                <Image style={styles.headerImage} source={{uri: employee.avatarUrl}}/>
                <Text style={styles.employeeName}>{ getEmployeeFullName(employee) }</Text>
                <Text style={styles.employeeDesignation}>{employee.designation}</Text>
            </View>
            <View style={styles.thumbnailTabContainer}>
                <Image style={styles.phoneImage}
                 source={require('../../images/ic_phone_white_24dp.png')} />

                <Image style={styles.phoneImage}
                 source={require('../../images/ic_home_black_24dp.png')} />

                <Image style={styles.phoneImage}
                 source={require('../../images/ic_message_white_24dp.png')}/>
            </View>
        </View>
    );
}
