import { Button} from 'react-native-paper';
import { useNotificacion } from '../hooks/useNotification';

async function sendPushNotification(expoPushToken: string, title,body,data) {
  console.log(title + body + data) 
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
    data: { someData: data},
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export default function NotificationService({title,body,data}) {
  
  const expoPushToken = useNotificacion()

    return (
        <Button
          buttonColor="#004771"
          textColor="white"
          onPress={async () => {
            await sendPushNotification(expoPushToken,title,body,data);
          }}
        >Prueba de Notificación</Button>
    );
  }
