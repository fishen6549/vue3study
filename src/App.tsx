
// 写法1
// export default function () {
//     return <div>
//         tom123
//     </div>
// }


// 写法2 optionsApi
// import { defineComponent } from "vue";
// export default defineComponent({
//     data() {
//         return {
//             age: 18
//         }
//     },
//     render() {
//         return <div>
//             tom111 --- {this.age}
//         </div>
//     }
// })
// 写法3 setup 函数模式 v-show支持 v-if不支持
// props emits
// slots
import { defineComponent, ref } from "vue";
const A = (_: any, { slots }: any) => (
    <>
        <div>{slots.default()}</div>
        <div>{slots.foo()}</div>
    </>
)
interface Props {
    name?: string
}
export default defineComponent({
    props: {
        name: String
    },
    emits: ['on-click'],
    setup(props: Props, { emit }) {
        // const flag = false;
        const flag = ref(false); // 手动解包
        const data: Array<number> = [1, 2, 3, 4, 5]
        // return () => <div v-show={flag.value}>
        //     tom123setup
        // </div>

        // return () => (
        //     <>
        //         <div>{flag.value ? <div>true</div> : <div>false</div>}</div>
        //     </>
        // )
        const fn = (item: any) => {
            console.log("触发了", item);
            emit('on-click', item)
        }

        const slot = {
            default: () => (<div>default slot</div>),
            foo: () => (<div>foo slot</div>)
        }

        const v = ref<string>("");
        return () => (
            <>
                <A v-slots={slot}></A>
                <div>props---{props.name}</div>
                {data.map(item => <div onClick={() => fn(item)} id={item as any}>{item}</div>)}
                <hr />
                <input type="text" v-model={v.value} />
                <div>{v.value}</div>
            </>
        )
    }
})