importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// These are placeholders - they should match your firebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyBHqgRjYU0KhReK4rrf7zmoRPM5HeGmSkI",
    authDomain: "fir-6c1ad.firebaseapp.com",
    projectId: "fir-6c1ad",
    storageBucket: "fir-6c1ad.firebasestorage.app",
    messagingSenderId: "1006164721042",
    appId: "1:1006164721042:web:312954fa7b768ec8b9154b",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo192.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
