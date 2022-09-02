import create from "zustand";
const numStore = create(() => ({
    count: 0
}))

const Item1 = () => {
    const { count } = numStore()
    const plus = () => {
        numStore.setState({count : count + 1})
    }
    return (
        <div>
            현재 값 : {count}
            <button onClick={()=>plus()}>plus</button>
        </div>
    )
}

export default Item1