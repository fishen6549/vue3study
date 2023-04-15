import type { Plugin } from "vite";
import * as babel from "@babel/core"; // @babel/core核心功能 将源代码转换成目标代码
import jsx from "@vue/babel-plugin-jsx" // Vue给babel写的插件支持tsx v-model等

export default function (): Plugin {
    return {
        config() {
            return {
                esbuild: {
                    include: /.ts$/
                }
            }
        },
        name: "vite-plugin-vue-tsx",
        async transform(code, id) {
            // console.log("vite-plugin-vue-tsx", code, id);
            if (/.tsx$/.test(id)) {
                console.log("原始代码", code, "文件名", id);
                // @ts-ignore 忽略报错 实际我这里没报错 不太懂
                const ts = await import("@babel/plugin-transform-typescript").then(r => r.default);
                const res = await babel.transformAsync(code, {
                    ast: true,
                    configFile: false,
                    babelrc: false,
                    plugins: [jsx, [ts, { isTSX: true, allowExtensions: true }]]
                })
                console.log("编译后的代码", res.code);
                return res.code
            }
            return code;
        }
    }
}