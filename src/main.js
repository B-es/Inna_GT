import { createApp } from 'vue'
import App from './App.vue'
import { DataVerseRepository } from './DataVerseRepository'

const app = createApp(App)


app.provide("dataVerseRepository", new DataVerseRepository());

app.mount('#app')
