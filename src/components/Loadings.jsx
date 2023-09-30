import { Box} from "@mui/material";
import { useContext } from "react";
import { RingLoader } from 'react-spinners';
import { AppProvider } from "../Context Api/Api";


const Loading = () => {
    const { loading } = useContext(AppProvider)

    return (
        <>
         
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
                <RingLoader color="#007bff" loading={loading} size={150} />
            </Box>
        </>
    )
}

export default Loading;