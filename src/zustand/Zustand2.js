import create from "zustand";
const numStore = create(() => ({
    count: 0,
}))

const Item2 = () => {
    const {count} = numStore()
    return <div>
        itme2 의 현재 값 : {count}
    </div>
}

export default Item2