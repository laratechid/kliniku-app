import React from "react"
import { View, Text, Image } from "react-native"
import { SimpleGrid } from "react-native-super-grid"
import { clinicList } from "~/const/static/menu"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Clinic } from "~/interface/clinic";

export const ClinicList = () => {
    return(
        clinicList.map((item: Clinic, index: number)=> {
            return (
                <>
                    <View key={index} className="bg-slate-300 rounded-xl my-1">
                        <View className="flex flex-row flex-wrap p-2">
                            <View className="basis-1/3">
                                <Image
                                    source={require('../assets/home/banner/mainbanner.jpg')}
                                    style={{ width: 'auto', height: 100, borderRadius: 10 }}
                                    resizeMode="cover"
                                />
                            </View>
                            <View className="flex-auto">
                                <View className="ms-2">
                                    <Text className="text-slate-700 text-sm mb-1">{item.name}</Text>
                                    <View className="flex-col">
                                        <View className="">
                                            <SimpleGrid
                                                data={item.polyclinics}
                                                listKey=""
                                                itemDimension={60}
                                                spacing={0}
                                                renderItem={({ item }) => (
                                                    <View className="bg-slate-400 rounded-full px-2 m-[1px]">
                                                        <Text className="text-xs text-slate-100">{item}</Text>
                                                    </View>
                                                )}
                                            />
                                            <View className="flex flex-row items-center mt-1">
                                            <FontAwesomeIcon icon={faLocationDot} size={10} color="gray"/>
                                            <Text className="text-slate-700 text-xs ms-2">{item.distance}</Text>
                                            </View>
                                            <Text className="text-slate-700 text-xs">{item.openSchedule}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </>
            )
        })
    )
}
