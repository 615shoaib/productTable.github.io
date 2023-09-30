import { TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, TableBody, TextField, Box, Table, FormControl, Select, MenuItem, Button } from "@mui/material"
import { useContext, useState } from "react"
import { AppProvider } from "../Context Api/Api"
import Option from "./option"
import SearchBar from "./Searchbar"

const TableData = () => {
    const { data, setData, search, setSearch } = useContext(AppProvider)





    return (
        <>
            <Paper sx={{ height: "70px" }} square>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box>
                        <SearchBar />
                    </Box>
                    <Box>
                        <Option />
                        
                    </Box>

                </Box>
            </Paper>
            <br />
            <br />
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign: "start" }}>Image</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign: "start" }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign: "start" }}>category</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign: "start" }}>Price</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign: "start" }}>Rating</TableCell>
                            <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", textAlign: "start" }}>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.filter((val) => {
                                if (search === "") {
                                    return val
                                } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            })
                                .map((val) => {
                                    return (
                                        <>
                                            <TableRow key={val.id}>
                                                <TableCell>
                                                    <img src={val.image} alt="imag" style={{ width: "50px", height: "50px" }} />
                                                </TableCell>
                                                <TableCell>{val.title.slice(0, 27)}</TableCell>
                                                <TableCell>{val.category}</TableCell>
                                                <TableCell>${val.price}</TableCell>
                                                <TableCell>{val.rating.rate}</TableCell>
                                                <TableCell>{val.description.slice(0, 37)}</TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })
                        }
                    </TableBody>

                </Table>
            </TableContainer>



        </>
    )
}

export default TableData;