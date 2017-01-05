import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './styles';
import { getEmployeeFullName } from '../../utils/EmployeeUtils';

import FavIcon from '../../components/FavIcon'
import GreenPhoneCallButton from '../../components/GreenPhoneCallButton'
import GreenHomeCallButton from '../../components/GreenHomeCallButton'
import GreenTextSMSButton from '../../components/GreenTextSMSButton'

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
                <GreenPhoneCallButton url={employee.contact.mobilePhone} color='white'/>

                <GreenHomeCallButton url={employee.contact.homePhone} color='white'/>

                <GreenTextSMSButton url={employee.contact.mobilePhone} color='white'/>
            </View>
        </View>
    );
}
