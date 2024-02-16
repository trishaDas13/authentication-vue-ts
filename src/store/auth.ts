// auth.ts (Pinia Store)
import { defineStore } from 'pinia';
import firebase from 'firebase/app';
import 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as firebase.User | null,
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error(error);
      }
    },

    async signup(email: string, password: string) {
      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
