import '../global.css';
import { Slot } from 'expo-router';
import { SessionProvider } from '~/components/middleware/context';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    // <Stack />
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}