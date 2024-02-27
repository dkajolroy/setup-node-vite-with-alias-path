> # **Path alias with typescript~~**

## Vite app

Open `vite.config.ts` and config

```
export default defineConfig({
  plugins: [react()],
  // server: {   // if withCredential don't use to api call
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  resolve: {
    // for import optimize
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});

```

Open `tsconfig.json` and config

```
 "compilerOptions": {
   ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
```

## Node Express

setup project

```
npm i express mongoose dotenv  |  npm i express @prisma/client
npm i -D @types/express @types/node nodemon ts-node typescript    | prisma
```

`tsconfig.json`

```
{
  "compileOnSave": false,
  "compilerOptions": {
    "target": "es2017",
    "lib": [
      "es2017",
      "esnext.asynciterable"
    ],
    "typeRoots": [
      "node_modules/@types"
    ],
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "module": "commonjs",
    "pretty": true,
    "sourceMap": true,
    "declaration": true,
    "outDir": "dist",
    "allowJs": true,
    "noEmit": false,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "baseUrl": ".",
  },
  "include": [
    "src/**/*.ts",

  ],
  "exclude": [
    "node_modules",
    "client",
    "dist"
  ]
}
```

install package for alias path

`npm i -D tsc-alias tsconfig-paths `

Open `tsconfig.json` and config

```
{
 "compilerOptions": {
   ...
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "@root/*": ["src/*"],
      "@routes/*": ["src/routes/*"],
      "@controllers/*": ["src/controllers/*"],
    }
  },
 "exclude": [
    "node_modules",
    "client",
    "dist"
  ]
}
```

Open `Package.json` and config

```
 "scripts": {
    "dev": "nodemon -r tsconfig-paths/register src/index.ts ",
    "build": "tsc && tsc-alias",
    "start": "node dist/index.js"
  },
```

if ~ adjust with client build⚡

```
{
  "init": "npm i && npm install --prefix client", // for install server and client
  "build": "npm run init && tsc && npm run build --prefix client", // for build server and client
  "start": "node dist/index.js", // start server with client
}
```
