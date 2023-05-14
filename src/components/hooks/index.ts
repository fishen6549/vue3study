import { onMounted } from "vue";

type Options = {
    el: string
}

export default function (options: Options): Promise<{ baseUrl: string }> {
    return new Promise((resolve) => {
        onMounted(() => {
            const img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
            console.log("useBase64", img);
            img.onload = () => {
                resolve({
                    baseUrl: base64(img)
                })
            }
        })

        const base64 = (el: HTMLImageElement) => {
            const canvas = document.createElement('canvas');
            canvas.width = el.naturalHeight;
            canvas.height = el.naturalWidth;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL();
        }
    })

}