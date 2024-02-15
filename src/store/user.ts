// src/store/user.ts
import { defineStore } from 'pinia';
import { auth } from '../firebase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    async signUp(email: string, password: string) {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        this.user = userCredential.user;
      } catch (error) {
        console.error("Sign-up error:", error);
        throw error; // Rethrow error for handling in the component
      }
    },
    async login(email: string, password: string) {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      this.user = userCredential.user;
    },
    logout() {
      auth.signOut();
      this.user = null;
    }
  }
});
