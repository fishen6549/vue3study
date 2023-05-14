import type { App } from "vue";
import { app } from "./main"

interface Use {
    install: (app: App, ...options: any[]) => void
}


const installList = new Set();

export function MyUse<T extends Use>(plugin: T, ...options: any[]) {
    plugin.install(app)
    if (installList.has(plugin)) {
        console.log("插件注册过了");
    } else {
        plugin.install(app, ...options);
        installList.add(plugin);
    }
}