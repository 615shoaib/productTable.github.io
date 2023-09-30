import { TextField, } from "@mui/material"
import { useContext } from "react";
import { AppProvider } from "../Context Api/Api";
const SearchBar = () => {
    const { search, setSearch } = useContext(AppProvider)

    return (
        <>
            <TextField value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search here ..." sx={{ width: "450px" }} />

        </>
    )
}

export default SearchBar;