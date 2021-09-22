<template>
  <div
    v-if="info.show_alert"
    class="text-white text-center font-bold p-4 mb-4"
    :class="info.alert_variant"
  >
    {{ info.alert_msg }}
  </div>
  <vee-form @submit="login" :validation-schema="loginSchema">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white mt-5 py-2 px-3 rounded transition
        hover:bg-purple-700"
      :disabled="login_in_submission"
    >
      Login
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:6|max:32',
      },
      login_in_submission: false,
      info: {
        show_alert: false,
        alert_variant: 'bg-blue-500',
        alert_msg: 'Login...',
      },
    };
  },
  methods: {
    changeInfo(show, color, msg) {
      this.info.show_alert = show;
      this.info.alert_variant = color;
      this.info.alert_msg = msg;
    },
    login() {
      this.login_in_submission = true;
      this.changeInfo(true, 'bg-blue-500', 'Login...');
    },
  },
};
</script>
