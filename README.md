# React + Vite Setup:

```
npm create vite@latest project-name

select react

select javascript+swc

cd project-name

npm install

npm run dev
```

## Port Setup

Inside vite.config.js, import defineConfig from vite and export a configuration object:

```
import { defineConfig } from 'vite';

export default defineConfig({
   server: {
      port: 3000, // Replace 3000 with your desired port number
   },
});
```
