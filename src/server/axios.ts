export const axios = {
    get<T>(url: string): Promise<T> {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onreadystatechange = () => {
                // 0 未初始化 没有调用send()方法
                // 1 载入 已调用send()方法 正在发送请求
                // 2 载入完成 seng()方法执行完成 已经接受到全部相应内容
                // 3 交互 正在解析响应内容
                // 4 完成 响应内容解析完成 可以在客户端调用了
                if (xhr.readyState === 4 && xhr.status === 200) {
                    setTimeout(() => {
                        resolve(JSON.parse(xhr.responseText));
                    }, 2000);
                }
            }
            xhr.send(null);
        })
    }
}