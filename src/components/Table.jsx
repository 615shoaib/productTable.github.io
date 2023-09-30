import { useContext} from "react"
import { useEffect } from "react"
import { AppProvider } from "../Context Api/Api"
import axios from "axios"
import TableData from "./TableData"
import Loading from "./Loadings"






const Table = () => {
    const { data, setData, search, setSearch, loading, setLoading,setShow,sorting } = useContext(AppProvider)
    const API = "https://fakestoreapi.com/products"
    const getUser = () => {
        
        const res = axios.get(API).then((res) => {
            try {
                console.log(res.data)
                setData(res.data)
                setShow(res.data)
            } catch (error) {
                console.log("error msg", error)
            }

        })
    }
    
    const usernotConnect=()=>{
        if(navigation.online){
            return <Loading />
        }
    }

   
    
    useEffect(() => {
        getUser()
        setTimeout(() => {
            setLoading(false)
        }, 5000);
        usernotConnect()
       
    }, [])
    return (
        <>{
            loading  ? (
                <Loading />
            ) :
               <TableData />
        }

      {/* {
        search.length === 0 ? null: <p>No More data found</p>
      } */}
         
        </>
    )

}

export default Table