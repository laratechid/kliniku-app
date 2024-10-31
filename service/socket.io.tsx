import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'http://10.0.2.2:5000';
class SocketService {
  private socket: Socket | null = null;

  connect(onConnect?: () => void) {
    this.socket = io(SOCKET_URL, {
      transports: ['websocket'],
    });

    this.socket.on('connect', () => {
      console.log('Socket connected');
      if (onConnect) {
        onConnect(); // Call the callback when connected
      }
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    this.socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });
  }

  onEvent(event: string, callback: (data: any) => void) {
    this.socket?.on(event, callback);
  }

  disconnect() {
    this.socket?.disconnect();
  }
}

export const socketService = new SocketService();
