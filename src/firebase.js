import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { cityDb } from "./temp/m-city-export";

const firebaseConfig = {
  apiKey: "AIzaSyDy9XnKz5tbhkIyCkLs_BO0RGpO9JWUAMA",
  authDomain: "m-city-82cf0.firebaseapp.com",
  projectId: "m-city-82cf0",
  storageBucket: "m-city-82cf0.appspot.com",
  messagingSenderId: "1075718646974",
  appId: "1:1075718646974:web:cf3f1f9d4064cadb3542ef",
  measurementId: "G-S44RYL8GRC",
};
firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("position");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

// cityDb.matches.forEach((item) => {
//   matchesCollection.add(item);
// });
// cityDb.players.forEach((item) => {
//   playersCollection.add(item);
// });
// cityDb.positions.forEach((item) => {
//   positionsCollection.add(item);
// });
// cityDb.promotions.forEach((item) => {
//   promotionsCollection.add(item);
// });
// cityDb.teams.forEach((item) => {
//   teamsCollection.add(item);
// });

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
