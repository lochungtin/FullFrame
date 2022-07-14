import { initializeApp } from 'firebase/app';
import { child, getDatabase, onValue, set, ref, remove, } from 'firebase/database';

const database = getDatabase(initializeApp({
    apiKey: 'AIzaSyAKTOBZGDB19eVCggE4cSMnfwCyRh6KXJg',
    authDomain: 'fullframe-56641.firebaseapp.com',
    databaseURL: 'https://fullframe-56641-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'fullframe-56641',
    storageBucket: 'fullframe-56641.appspot.com',
    messagingSenderId: '265516170734',
    appId: '1:265516170734:web:9881692cd92fad5dfd22ff',
    measurementId: 'G-DJ0HNMQB04'
}));

const UID = 'h0TDIVtwf8Zu2UELMXDLfkN5TuI2';

const archiveRef = ref(database, `UserData/${UID}/archive`);
const activeRef = ref(database, `UserData/${UID}/active`);

export function bindData(activeCB, archiveCB) {
    onValue(activeRef, snapshot => activeCB(snapshot.val()));
    onValue(archiveRef, snapshot => archiveCB(snapshot.val()));
}

export const newActive = title => set(child(activeRef, new Date().getTime().toString()), title);

export const newArchive = title => set(child(archiveRef, new Date().getTime().toString()), title);

export const deleteActive = timeID => remove(child(activeRef, timeID));

export const deleteArchive = timeID => remove(child(archiveRef, timeID));
