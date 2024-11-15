import { ImageBackground, SafeAreaView } from 'react-native';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return(
    <ImageBackground
    className={`fixed h-[30%]`}
    source={require('../assets/app/background.png')}
    resizeMode="stretch"
    >
      <SafeAreaView className={`flex flex-1 ${className}`}>{children}</SafeAreaView>
    </ImageBackground>
  )
};

export const ContainerFull = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <SafeAreaView className={`flex flex-1  ${className}`}>{children}</SafeAreaView>;
};
