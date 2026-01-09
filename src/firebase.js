import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseConfig, VAPID_KEY } from './firebase-config';

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: VAPID_KEY })
        .then((currentToken) => {
            if (currentToken) {
                console.log('Current token for client: ', currentToken);
                // Track the token or send to your server
                return currentToken;
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log('Message received: ', payload);
            resolve(payload);
        });
    });
