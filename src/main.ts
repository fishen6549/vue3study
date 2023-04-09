import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.less"
import Card from "./components/Card.vue"



export const app = createApp(App)

app.component("Card", Card)
app.mount('#app')
