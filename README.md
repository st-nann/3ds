# assignment-3ds

## Step

```
1. Run yarn
2. Run yarn dev

```

## ENV Build
```
VUE_APP_NODE_ENV        string          Environment
VUE_APP_TITLE           string          Website Name
VUE_APP_LOGO            string          Logo
VUE_APP_BASEURL         string          API Base URL
```

## Structure Project
```
public
  - index: ไฟล์ index html สำหรับแสดหน้า website
  - src
    - assets: folder สำหรับเก็บไฟล์ภาพ (ในส่วนของ project นี้จะเก็บไว้ที่ storage ของ firebase)
    - components: folder สำหรับเก็บ component ส่วนกลางของ project
    - interface: folder สำหรับประกาศ type ตัวแปลของ request / param / response
    - plugins: folder สำหรับเก็บ plugin ที่ลงเพิ่มเติมของ project
    - router: folder เก็บ route ของหน้า website
    - service: folder สำหรับเก็บ data หรือ service function กลางของ project เช่น validate, HTTP Request, Sidebar Menu เป็นต้น
    - store: folter สำหรับเก็บ state, action, mutation, getter ของ vuex
    - styles: folder สำหรับเก็บ style ของ vuetify stylus
    - views: folder สำหรับเก็บหน้า website ต่างๆ
    - App: file สำหรับแสดงหน้า website เริ่มต้นของ vue
    - main: file ตั้งต้นในการเรียกใช้งานส่วต่างๆ
  - .env.*: file สำหรับตั้งค่า environment ต่างๆ ของ project
  - gitignore: file สำหรับใส่ค่าไฟล์ที่ไม่ต้องการ push ขึ้น git
  - .travis.yaml: file สำหรับตั้งค่าการ deploy (ci/cd)
  - package.json: file สำหรับเก็บค่า package ต่างๆ
  - tsconfig.json / tslint.json: file สำหรับตั่งค่า config / lint typescript
  - vue.config.js: file สำหรับตั้งค่าของ vue cli 3
```

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
