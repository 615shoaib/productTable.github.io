import { createContext,useState } from "react";


export const AppProvider = createContext(null);



const Api=({children})=>{
    const [data,setData]=useState([])
    const [show,setShow]=useState([])
    const [search,setSearch]=useState("")
    const [loading,setLoading]=useState(true)
    const [sorting,setSorting]=useState("")

    return(
        <>
    <AppProvider.Provider value={{
        data,
        setData,
        search,
        setSearch,
        loading,
        setLoading,
        sorting,
        setSorting,
        show,
        setShow
    }}>
        {children}
    </AppProvider.Provider>
        </>
    )
}

export default Api;