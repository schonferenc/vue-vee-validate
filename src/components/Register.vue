<template>
  <div class="text-white text-center font-bold p-4 mb-4"
    v-if="info.show_alert" :class="info.alert_variant">
    {{ info.alert_msg }}
  </div>
  <vee-form :validation-schema="registerSchema"
    @submit="register">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field type="text" name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Name" />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field type="email" name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Email" />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input class="block w-full py-1.5 px-3 text-gray-800 border
          border-gray-300 transition duration-500 focus:outline-none
          focus:border-black rounded" type="password"
          placeholder="Password" v-bind="field" />
        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field type="password" name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password" />
      <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>
    <!-- Countries -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <vee-field as="select" name="counties"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
          >
        <option
         v-for="country in countries" :key="country"
        :value="country">{{ country }}</option>

      </vee-field>
      <ErrorMessage class="text-red-600" name="counties" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field type="checkbox" name="tos" value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block" />
      <label class="inline-block">Term of service</label>
      <ErrorMessage class="text-red-600 block" name="tos" />
    </div>
    <button type="submit" :disabled="reg_in_submission"
      class="block w-full bg-purple-600 mt-5 text-white py-2 px-3 rounded transition
        hover:bg-purple-700">
      Register
    </button>
  </vee-form>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      countries: [
        'Hungary', 'Narnia',
      ],
      registerSchema: {
        name: 'required|min:3|max:50|alpha_spaces',
        email: 'required|email',
        password: 'required|min:6|max:32',
        confirm_password: 'required|passwords_mismatch:@password',
        counties: 'required|excluded:Narnia',
        tos: 'tos',
      },
      reg_in_submission: false,
      info: {
        show_alert: false,
        alert_variant: 'bg-blue-500',
        alert_msg: 'Register...',
      },
    };
  },
  methods: {
    changeInfo(show, color, msg) {
      this.info.show_alert = show;
      this.info.alert_variant = color;
      this.info.alert_msg = msg;
    },
    register() {
      this.login_in_submission = true;
      this.changeInfo(true, 'bg-blue-500', 'Register...');
    },
  },
};
</script>
