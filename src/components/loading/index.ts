import { App, VNode, render } from "vue"
import Loading from "./index.vue"
import { createVNode } from "vue";
export default {
    install(app: App) {
        const vnode: VNode = createVNode(Loading);
        render(vnode, document.body)
        // vnode.component?.exposed
        app.config.globalProperties.$myloading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }

        // app.config.globalProperties.$myloading.show();
        console.log("app", app, Loading, vnode, vnode.component?.exposed);

    }
}