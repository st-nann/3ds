# assignment-3ds

## Step docker

```
1. [BUILD DOCKER] Run docker build -t <IMAGE_NAME> .
  example: docker build -t 3ds .
2. [START DOCKER] Run docker run -it -p 8080:80 --rm --name <NAME> <IMAGE_NAME>
  example: docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1

```

## View image (docker)

```
Run docker image ls

```

## Step run local

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
    - assets: folder สำหรับเก็บไฟล์ภาพ, font, หรือไฟล์ที่เกี่ยวข้อง resource ของ project
    - components: folder สำหรับเก็บ component ส่วนกลางของ project
    - interface: folder สำหรับประกาศ type ตัวแปลของ request / param / response
    - plugins: folder สำหรับเก็บ plugin ที่ลงเพิ่มเติมของ project
    - router: folder เก็บ route ของหน้า website
    - service: folder สำหรับเก็บ data หรือ service function กลางของ project เช่น validate, HTTP Request เป็นต้น
    - store: folter สำหรับเก็บ state, action, mutation, getter ของ vuex
    - styles: folder สำหรับเก็บ style ของ vuetify stylus
    - views: folder สำหรับเก็บหน้า website ต่างๆ
    - App: file สำหรับแสดงหน้า website เริ่มต้นของ vue
    - main: file ตั้งต้นในการเรียกใช้งานส่วต่างๆ
  - .dockerignore: file สำหรับใส่ค่าไฟล์ที่ไม่ต้องการ push ขึ้น docker
  - .env.*: file สำหรับตั้งค่า environment ต่างๆ ของ project
  - gitignore: file สำหรับใส่ค่าไฟล์ที่ไม่ต้องการ push ขึ้น git
  - DockerFile: file สำหรับ run คำสั่งใน docker
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
