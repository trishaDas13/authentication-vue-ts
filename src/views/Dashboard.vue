<template>
    <div>
      <h1>Welcome to Dashboard</h1>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { signOut } from "firebase/auth";
  import { auth } from "../firebase";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    setup() {
      const router = useRouter();
  
      const logout = async () => {
        try {
          await signOut(auth);
          router.push("/login"); // Navigate to the login page after logout
        } catch (error) {
          console.error("Logout error:", error);
        }
      };
  
      return { logout };
    },
  });
  </script>
  