import { View, Text } from "react-native"


export const ClinicSchedules = ({data}: { data: any[] }) => {
    return (
        <View className='mt-5 flex'>
            <Text className="text-xs ms-1 my-2 text-slate-700">Jadwal Buka</Text>
            {data.map((res) => (
                <View className='flex-row'>

                    <View className={`rounded m-1 w-28 ${res.isToday ? 'bg-yellow-500': 'bg-indigo-100'}`}>
                        <Text className='p-1 mx-2 text-xs text-slate-700'>{res.day}</Text>
                    </View>
                    <View className={`rounded m-1 w-48 ${res.isToday ? 'bg-yellow-500': 'bg-indigo-100'}`}>
                        <Text className='p-1 mx-2 text-xs text-center text-slate-700'>{`${res.startTime} - ${res.endTime}`}</Text>
                    </View>

                </View>
            ))}

        </View>
    )
}