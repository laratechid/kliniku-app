import '../global.css';
import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { SessionProvider, useSession } from '~/components/middleware/context';

export default function Root() {
    // refresh token even app triggered open
    const { refreshSession, session } = useSession()
    refreshSession()
    
    // refresh token every 40 minutes
    useEffect(() => {
      const interval = setInterval(() => {
        refreshSession()
      }, 40 * 60 * 1000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
    // <Stack />
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}