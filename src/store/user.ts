// src/store/user.ts
import { defineStore } from "pinia";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    // async signUp(email: string, password: string) {
    //   console.log(auth)
    //     console.log(email)
    //     console.log(password)
    //   try {
        
    //     const userCredential = await createUserWithEmailAndPassword(
    //       auth,
    //       email,
    //       password
    //     );
    //     console.log(userCredential);
    //     // this.user = userCredential.user;
    //   } catch (error) {
    //     console.error("Sign-up error:", error);
    //     throw error; // Rethrow error for handling in the component
    //   }
    // },
    // async login(email: string, password: string) {
    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   // this.user = userCredential.user;
    // },
    logout() {
      auth.signOut();
      this.user = null;
    },
  },
});
