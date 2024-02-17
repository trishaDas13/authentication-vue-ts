<template>
  
<div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div class="w-full flex-1 mt-8">
                    
                    <form  @submit.prevent="signUp" class="mx-auto max-w-xs">
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" id="email" v-model="email" placeholder="Email" required/>
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" id="password" v-model="password" placeholder="Password" required/>
                        <button type="submit"
                            class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Sign Up
                            </span>
                        </button>
                        <p class="mt-6 text-xs text-gray-600 text-center">
                            I agree to abide by templatana's
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and its
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                      </form>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');">
            </div>
        </div>
    </div>
</div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import ref function
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Import Firestore from your firebase configuration
import { useRouter } from 'vue-router';
import { addDoc, collection } from 'firebase/firestore';

export default defineComponent({
  name: 'SignUp',
  setup() {
    const name = ref(''); // Define name as a ref
    const email = ref(''); // Define email as a ref
    const password = ref(''); // Define password as a ref
    const router = useRouter();

    const signUp = async () => {
      try {
        // Create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        
        // Optionally, you can store the user's name in your database
        const user = userCredential.user;
        if (user) {
          // Here, you would store the user's name along with other user data in your database
          // For example, if you're using Firestore:
           addDoc(collection(db, "users"), { name: name.value, email: user.email });
        }
        
        router.push('/login'); // Redirect to login after sign up
      } catch (error) {
        console.error('Sign-up error:', error);
      }
    }

    return { name, email, password, signUp };
  }
});

</script>
