# App starter
This template is to speed up development of Vue applications.

## What's included
This template includes Vite, Tailwind, Pinia, Router and Axios bundled in. 
Happy keyboard smashing!

### Axios
Axios is provided app wide as `$api` and can be injected in any component that needs it. See `main.js` and `/src/views/Home.vue` for example usage.

Basically, you need to `import { inject } from 'vue'` in your component, and define `const $api = inject('$api')`. Then you can use it as `$api.post(...)` etc in your project.


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
