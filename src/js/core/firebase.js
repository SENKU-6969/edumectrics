// firebase init

if (typeof FIREBASE_CONFIG === 'undefined') {
  console.error('Firebase config not found. Make sure firebase-config.js is loaded before firebase.js');
}

firebase.initializeApp(FIREBASE_CONFIG);

const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence (so app works even with bad network)
db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === 'failed-precondition') {
    console.warn('Firestore persistence unavailable (multiple tabs open).');
  } else if (err.code === 'unimplemented') {
    console.warn('Firestore persistence not supported in this browser.');
  }
});
