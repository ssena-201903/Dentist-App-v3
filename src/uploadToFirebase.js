import admin from 'firebase-admin';
import data from './patients_generated.json';

// `serviceAccount` JSON dosyasını require ile alıyoruz
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const serviceAccount = require('./dentistapp-b3f6d-firebase-adminsdk-8qn4x-fd99d2ce8e.json');

// Firebase'i başlat
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// JSON'daki her bir nesneyi Firestore'a ekleyin
data.forEach(async (item) => {
  await db.collection('patients').add(item);
  console.log('Added:', item);
});

console.log('Data upload complete!');
