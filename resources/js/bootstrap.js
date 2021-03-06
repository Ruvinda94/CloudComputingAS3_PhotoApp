window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

//window.$ =  window.jquery = require('jquery');
window.$ = window.jQuery = require('jquery')

require('bootstrap');

//Reference : [1]A. Ashik, "How to fix this error : " Module not found :can't resolve popper.js "", Stack Overflow, 2021. [Online]. Available: https://stackoverflow.com/questions/57459917/how-to-fix-this-error-module-not-found-cant-resolve-popper-js. [Accessed: 06- Jun- 2021].
require('popper.js');

//Reference: [5]A. Khalil and S. Angatia, "how to solve cors Allow Access control in vue js and laravel application", Stack Overflow, 2021. [Online]. Available: https://stackoverflow.com/questions/63537112/how-to-solve-cors-allow-access-control-in-vue-js-and-laravel-application. [Accessed: 13- Jun- 2021].
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
