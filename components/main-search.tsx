import React from "react"
import { View, TextInput } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

export const MainSearch = () => {
    return (
        <>
            <View className="h-80 bg-slate-300 rounded-b-xl py-5">
                <View className="flex flex-row items-center mx-auto">
                    <View className="basis-5/6">
                        <TextInput className="border mx-3 rounded-lg p-3 border-sky-300 placeholder:text-slate-300 focus:outline-sky-500 focus:border-sky-500 focus:shadow focus:shadow-sky-200 text-slate-500" placeholder='Cari klinik' />
                    </View>
                    <View>
                        <FontAwesomeIcon icon={faCircleUser} size={40} color="gray" />
                    </View>
                </View>
            </View>
        </>
    )
}