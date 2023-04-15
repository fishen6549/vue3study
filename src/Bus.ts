type BusClass = {
    emit: (name: string) => void,
    on: (name: string, callback: Function) => void
}

type ParamsKey = string | number | symbol

type List = {
    [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass {
    list: List
    constructor() {
        this.list = {};
    }
    emit(name: string, ...args: Array<any>) {
        const callbackArray: Array<Function> = this.list[name];
        callbackArray.forEach(cb => {
            cb.apply(this, args)
        })
    }

    on(name: string, callback: Function) {
        const fn: Array<Function> = this.list[name] || [];
        fn.push(callback);
        this.list[name] = fn;
    }

}

export default new Bus()