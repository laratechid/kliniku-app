import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link } from 'expo-router';
import { type Href } from 'expo-router';
import { View, Pressable, Text } from 'react-native';

export const PressableSection = ({ title, href }: { title: string; href: Href }) => {
  return (
    <View className="flex flex-row items-center">
      <Pressable>
        <Link href={href}>
          <Text className="mr-2 text-sm">{title}</Text>
        </Link>
      </Pressable>
      <FontAwesomeIcon icon={faChevronRight} size={12} color="gray" />
    </View>
  );
};
