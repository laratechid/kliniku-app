import React from "react"
import { View, TextInput, Image } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

export const MainSearch = () => {
    return (
        <>
            <View className="h-80 bg-slate-200 rounded-xl py-5">
                <View className="flex flex-row items-center mx-auto">
                    <View className="basis-5/6">
                        <TextInput className="border mx-2 my-3 rounded-full px-3 py-1 border-sky-300 placeholder:text-slate-300 focus:outline-sky-500 focus:border-sky-500 focus:shadow focus:shadow-sky-200 text-slate-500" placeholder='Cari klinik' />
                    </View>
                    <View >
                        <FontAwesomeIcon icon={faCircleUser} size={40} color="gray" />
                    </View>
                </View>
                <View className="p-5 ">
                    <Image source={require("../assets/home/banner/mainbanner.jpg")} style={{ width: "auto", height: 155, borderRadius: 10 }} resizeMode="cover" />
                </View>
            </View>
        </>
    )
}