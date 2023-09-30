import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useContext } from "react";
import { AppProvider } from "../Context Api/Api";

const Option = () => {
    const { data, setData, sorting, setSorting, show } = useContext(AppProvider)

    const handleChange = (event) => {
        setSorting(event.target.value);
    };
    // option functions


    const handleClick = () => {
        const numDescending = [...data].sort((a, b) => b.price - a.price);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handleLow = () => {
        const numDescending = [...data].sort((a, b) => a.price - b.price);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handleTitleatoz = () => {
        const numDescending = [...data].sort((a, b) => a.title > b.title ? 1 : -1);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handletitleztoa = () => {
        const numDescending = [...data].sort((a, b) => a.title < b.title ? 1 : -1);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }

    const handleClickhighrating = () => {
        const numDescending = [...data].sort((a, b) => b.rating.rate - a.rating.rate);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }
    const handleClickLowrating=()=>{
        const numDescending = [...data].sort((a, b) => a.rating.rate - b.rating.rate);
        // console.log(numDescending)
        const x = setData(numDescending)
        // console.log(x)
    }

    const handlereset=()=>{
        setData(data)
        setSorting("")
    }

    return (
        <>
            <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">---Select---</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sorting}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="select" onClick={handlereset}>---Select---</MenuItem>
                    <MenuItem value='Sort by high' onClick={() => handleClick("price")}>Sort by  High (price)</MenuItem>
                    <MenuItem value="sort by low" onClick={handleLow}>Sort by  low (price)</MenuItem>
                    <MenuItem value="sort by title A-z" onClick={handleTitleatoz}>Sort  by title A to z</MenuItem>
                    <MenuItem value="sort by title z-A" onClick={handletitleztoa} >Sort by  title Z to A</MenuItem>
                    <MenuItem value='Sort by rating' onClick={handleClickhighrating}>Sort by  High (rating)</MenuItem>
                    <MenuItem value='Sort by low rating' onClick={handleClickLowrating}>Sort by  Low (rating)</MenuItem>

                </Select>
            </FormControl>

        </>
    )
}


export default Option;