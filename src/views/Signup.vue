<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-8 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" v-model="email" required class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" v-model="password" required class="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <button type="submit" class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
      </form>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import ref function
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SignUp',
  setup() {
    const email = ref(''); // Define email as a ref
    const password = ref(''); // Define password as a ref
    const router = useRouter();

    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push('/login');
      } catch (error) {
        console.error('Sign-up error::::', error);
      }
    }

    return { email, password, signUp };
  }
});
</script>
