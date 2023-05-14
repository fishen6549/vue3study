import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.less"
import Card from "./components/Card.vue"
import Loading from './components/loading'
// import { MyUse } from './myUse'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


export const app = createApp(App)
// app.use(Loading)
// 自定义use
// MyUse(Loading);

app.use(ElementPlus)

app.config.globalProperties.$tom = 'tom123';
app.config.globalProperties.$filters = {
    format<T>(str: T) {
        return "123" + str;
    }
};

type Filter = {
    format<T>(str: T): string;
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $tom: string
    }
}
app.component("Card", Card)
app.mount('#app')


type Lod = {
    show: () => void,
    hide: () => void
}

// 编写ts
declare module "vue" {
    export interface ComponentCustomProperties {
        $myloading: Lod
    }
}