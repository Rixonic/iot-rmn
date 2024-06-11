import { useEffect, useRef } from 'react';

const useWebSocket = <T>(
  url: string,
  onMessage: (data: T) => void,
): WebSocket | null => {
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    const connectWebSocket = () => {
      webSocket.current = new WebSocket(url);

      webSocket.current.onopen = () => {
        //console.log('WebSocket connected');
      };

      webSocket.current.onmessage = (event: MessageEvent) => {
        const receivedData = JSON.parse(event.data) as T;
        onMessage(receivedData);
      };

      webSocket.current.onclose = () => {
        //console.log('WebSocket disconnected, retrying...');
        //setTimeout(connectWebSocket, 3000); // Reconnect after 3 seconds
      };
    };

    connectWebSocket();

    return () => {
      if (webSocket.current) {
        webSocket.current.close();
      }
    };
  }, [url, onMessage]);

  return webSocket.current;
};

export default useWebSocket;