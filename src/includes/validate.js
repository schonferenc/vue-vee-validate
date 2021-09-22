// import the vee components
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
// import the rules you want to use
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  /*
   if you install a plugin then the first thing the app is looking for
   is the install method within the export
   everything should be placed inside this
  */
  install(app) {
    /*
     register the components in the application | available globally
     the first argument is the name we want to use in the template (VeeExample: <vee-example />)
    */
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    /*
    with defineRule you can specify rules globally
    the first argument is the name by which we can refer to the rule
    the second argument is the validator function that will verify the field value
    */
    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('passwords_mismatch', confirmed);
    defineRule('excluded', excluded);
    /*
     if you need the same rule more than once,
      only with a different error message, you can make one with a different name
    */
    defineRule('country_excluded', excluded);

    // configuration
    configure({
      // here you can overwrite the original error messages or generate your own
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          // for the same rule, another error message
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: 'Due to restrictions, we do not accept users from this location.',
          // -----------------------------------------
          passwords_mismatch: "The passwords don't match.",
          tos: 'You must accept the Terms of Service.',
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      // If validation should be triggered on blur event, default is true
      validateOnBlur: true,
      // If validation should be triggered on change event, default is true
      validateOnChange: true,
      // If validation should be triggered on input event, default is false
      validateOnInput: false,
      // If validation should be triggered on update:modelValue (v-model) event, default is true
      validateOnModelUpdate: true,
    });
  },
};
