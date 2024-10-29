import {
    faShop,
    faStar,
    faLocationDot,
    faClock,
    faCalendarDays,
    faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text } from 'react-native';




export const QueueHeader = ({ clinicname, isVerified, poly, address }: { clinicname: string, isVerified: boolean, poly: string, address: string }) => {
    return (
        <View>
            <View className="mb-3 flex flex-row flex-wrap items-center border-b border-slate-300 pb-3">
                <FontAwesomeIcon icon={faShop} size={30} color="gray" />
                <Text className="mr-2 ms-4 text-slate-600">{clinicname}</Text>
                <FontAwesomeIcon icon={faCircleCheck} size={15} color="gray" />
            </View>
            <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faCalendarDays} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">{address}</Text>
            </View>
        </View>
    )
}