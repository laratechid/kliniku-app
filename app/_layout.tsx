import '../global.css';
import { router, Slot } from 'expo-router';
import { useEffect } from 'react';
import { SessionProvider, useSession } from '~/components/middleware/context';

export default function Root() {
    // refresh token even app triggered open
    const { refreshSession, session } = useSession()
    if(!session) router.push('/sign-in')
    
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