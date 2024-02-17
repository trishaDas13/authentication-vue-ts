<template>
  <div class="store">
    <nav
      id="header"
      class="w-full py-1 bg-white shadow-lg border-b border-blue-400"
    >
      <div class="w-full flex items-center justify-between mt-0 px-6 py-1">
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <p
            class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
          >
            Welcome to Dashboard
          </p>
        </label>

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <p
              class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
            >
              Welcome to Dashboard
            </p>
          </nav>
        </div>

        <div
          class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div class="auth flex items-center w-full md:w-full">
            <button
              @click="logout"
              class="bg-blue-600 text-gray-200 p-2 rounded hover:bg-blue-500 hover:text-gray-100"
            >
              Log Out →
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="h-full bg-gray-200 p-8" v-if="user">
      <div class="bg-white rounded-lg shadow-xl pb-8">
        <div class="w-full h-[250px]">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            class="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div class="flex flex-col items-center -mt-20">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            class="w-40 border-4 border-white rounded-full"
          />
          <div class="flex items-center space-x-2 mt-2">
            <!-- <p class="text-2xl" v-if="userName">{{ userName }}</p> -->
            <span class="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p class="text-gray-700">Email: {{ user.email }}</p>
          <p class="text-sm text-gray-500">User ID: {{ user.uid }}</p>
        </div>
        <div
          class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2"
        >
          <div class="flex items-center space-x-4 mt-2">
            <button
              @click="toggleForm"
              class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
            >
              Add Details
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
      <form v-if="showForm" @submit.prevent="submitForm">
        <div class="flex items-end mb-5">
          <label
            for="name"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Name:</label
          >
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Name"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="profession"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Profession:
          </label>
          <input
            type="text"
            id="profession"
            v-model="formData.profession"
            required
            placeholder="profession"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="skills"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Skills:
          </label>
          <input
            type="text"
            id="skills"
            v-model="formData.skills"
            required
            placeholder="Skills"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="hobby"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Hobby:
          </label>
          <input
            type="text"
            id="hobby"
            v-model="formData.hobby"
            required
            placeholder="Your Hobbies"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="location"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Location:
          </label>
          <input
            type="text"
            id="location"
            v-model="formData.location"
            required
            placeholder="location"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="about"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >About Me:</label
          >
          <textarea
            id="about"
            v-model="formData.about"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            placeholder="Brief about your self"
          ></textarea>
        </div>

        <div class="flex items-end mb-5">
          <label
            for="birthday"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Birthday:</label
          >
          <input
            type="date"
            id="birthday"
            v-model="formData.birthday"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="mobile"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Mobile Number:</label
          >
          <input
            type="tel"
            id="mobile"
            v-model="formData.mobile"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400"
          />
        </div>

        <div class="flex items-end mb-5">
          <label
            for="mobile"
            class="inline-block w-20 mr-6 text-right font-bold text-gray-600"
            >Language:</label
          >
          <input
            type="language"
            id="language"
            v-model="formData.language"
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400"
          />
        </div>

        <div class="text-right">
          <button
            type="submit"
            class="py-3 px-8 bg-blue-500 text-white font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <div
      class="flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4"
    >
      <div
        v-if="submittedData"
        class="flex-1 bg-white rounded-lg shadow-xl p-8 mb-10"
      >
        <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
        <ul class="mt-2 text-gray-700">
          <li class="flex border-y py-2">
            <span class="font-bold w-24">Full name:</span>
            <span class="text-gray-700">{{ submittedData.name }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Birthday:</span>
            <span class="text-gray-700">{{ submittedData.birthday }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Mobile:</span>
            <span class="text-gray-700">{{ submittedData.mobile }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Email:</span>
            <span class="text-gray-700">{{ user.email }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Location:</span>
            <span class="text-gray-700">{{ submittedData.location }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Languages:</span>
            <span class="text-gray-700">{{ submittedData.language }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Profession:</span>
            <span class="text-gray-700">{{ submittedData.profession }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Hobby:</span>
            <span class="text-gray-700">{{ submittedData.hobby }}</span>
          </li>
          <li class="flex border-b py-2">
            <span class="font-bold w-24">Skills:</span>
            <span class="text-gray-700">{{ submittedData.skills }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const user = ref<User | null>(auth.currentUser);
    const router = useRouter();
    const showForm = ref(false);
    const formData = ref({
      name: "",
      profession: "",
      skills: "",
      hobby: "",
      location: "",
      about: "",
      birthday:"",
      mobile: "",
      language: ""
    });
    const submittedData = ref(null);

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    const toggleForm = () => {
      showForm.value = !showForm.value;
    };

    const submitForm = () => {
      submittedData.value = { ...formData.value };
      // Optionally, you can clear the form fields after submission
      formData.value = {
        name: "",
        profession: "",
        skills: "",
        hobby: "",
        location: "",
        about: "",
      };
      toggleForm();
    };

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        user.value = currentUser;
      } else {
        router.push("/login");
      }
    });

    return {
      user,
      logout,
      showForm,
      toggleForm,
      formData,
      submitForm,
      submittedData,
    };
  },
});
</script>
