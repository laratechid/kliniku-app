import { SafeAreaView } from 'react-native';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <SafeAreaView className={`m-6 flex flex-1  ${className}`}>{children}</SafeAreaView>;
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
