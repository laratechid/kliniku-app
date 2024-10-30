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
import { View, Text, ImageBackground, Dimensions } from 'react-native';

export const ClinicProfile = ({ name, distance, rating, openDays, openSchedule }: { name: string, distance: string, rating: string, openDays: string, openSchedule: string }) => {

    return (
        <View>
            <View className="mb-3 flex flex-row flex-wrap items-center border-b border-slate-300 pb-3">
                <FontAwesomeIcon icon={faShop} size={30} color="gray" />
                <Text className="mr-2 ms-4 text-slate-600">{name}</Text>
                <FontAwesomeIcon icon={faCircleCheck} size={15} color="gray" />
            </View>
            <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faCalendarDays} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">{openDays}</Text>
            </View>
            <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faClock} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">{openSchedule}</Text>
            </View>
            <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faStar} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">{rating}</Text>
            </View>
            <View className="ms-1 flex flex-row flex-wrap items-center">
                <FontAwesomeIcon icon={faLocationDot} size={10} color="gray" />
                <Text className="ms-3 mt-1 text-xs text-slate-500">{distance}</Text>
            </View>
        </View>
    )
}

export const ClinicProfilePoly = ({ name, image, address }: { name: string, image: string, address: string }) => {
    return (
        <View>
            <View className="mb-3 flex flex-row flex-wrap items-center border-b border-slate-300 pb-3">
                <FontAwesomeIcon icon={faShop} size={30} color="gray" />
                <Text className="mr-2 ms-4 text-slate-600">{name}</Text>
                <FontAwesomeIcon icon={faCircleCheck} size={15} color="gray" />
            </View>
            <View className="flex flex-row flex-wrap">
                    <ImageBackground
                        className={`basis-3/12 h-24 bg-gray-200 mr-2 rounded-xl overflow-hidden`}
                        source={{ uri: image }} resizeMode="cover"
                    >
                        <View className="absolute top-1 p-1 px-4 right-1 bg-gray-300 rounded-full">
                            <Text className="text-gray-600 text-xs">{"Poli Gigi"}</Text>
                        </View>
                    </ImageBackground>
                <View className={`basis-8/12 h-24 p-1 bg-slate-300 rounded-xl`}>
                    <View className='text-center m-auto'>
                        <Text className='text-slate-700 text-xs'>Alamat:</Text>
                        <Text className='text-slate-700 text-xs'>{address}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}