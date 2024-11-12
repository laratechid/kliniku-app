import '../global.css';
import { Slot } from 'expo-router';
import { SessionProvider } from '~/components/middleware/context';

export default function Root() {

  return (
    // <Stack />
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}