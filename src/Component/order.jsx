import { Select, MenuItem, Button, CircularProgress, Container, Grid, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, Box, Typography, TextField, TablePagination, Menu } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchOrder, orderModal } from "../Actions/orderAction";

const Order = () => {
    const dispatch = useDispatch()

    const {order,pending,isOpen,size,page,currentPage} = useSelector((reduxData) => reduxData.orderReducers)

    useEffect(() => {
        dispatch(fetchOrder())
    }, [])

    const handleShow =  (value) => {
        dispatch(orderModal())
        console.log(value)
    }

    const createOrder = () => {

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Container>
            <Grid container mt={5}>

                {
                    pending ?
                        <Grid item lg={12} md={12} sm={12} xs={12} textAlign="center">
                            <CircularProgress />
                        </Grid>
                        :
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            {/* <Select
                                value={size}
                                onChange={onChangeSelectPagination}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={5} >5</MenuItem>
                                <MenuItem value={10} >10</MenuItem>
                                <MenuItem value={15} >15</MenuItem>
                                <MenuItem value={20} >20</MenuItem>
                            </Select> */}
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 750 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="left">OrderCode</TableCell>
                                            <TableCell align="left">kichCo</TableCell>
                                            <TableCell align="left">duongKinh</TableCell>
                                            <TableCell align="left">suon</TableCell>
                                            <TableCell align="left">salad</TableCell>
                                            <TableCell align="left">loaiPizza</TableCell>
                                            <TableCell align="center">thanhTien</TableCell>
                                            <TableCell align="center">giamGia</TableCell>
                                            <TableCell align="center">soLuongNuoc</TableCell>
                                            <TableCell align="center">email</TableCell>
                                            <TableCell align="center">soDienThoai</TableCell>
                                            <TableCell align="center">diaChi</TableCell>
                                            <TableCell align="center">loiNhan</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {order.map((list, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {list.id}
                                            </TableCell>
                                            <TableCell align="left">{list.hoTen}</TableCell>
                                            <TableCell align="left">{list.orderCode}</TableCell>
                                            <TableCell align="left">{list.kichCo}</TableCell>
                                            <TableCell align="left">{list.duongKinh}</TableCell>
                                            <TableCell align="left">{list.suon}</TableCell>
                                            <TableCell align="left">{list.salad}</TableCell>
                                            <TableCell align="left">{list.loaiPizza}</TableCell>
                                            <TableCell align="left">{list.thanhTien}</TableCell>
                                            <TableCell align="left">{list.giamGia}</TableCell>
                                            <TableCell align="left">{list.soLuongNuoc}</TableCell>
                                            <TableCell align="left">{list.email}</TableCell>
                                            <TableCell align="left">{list.soDienThoai}</TableCell>
                                            <TableCell align="left">{list.diaChi}</TableCell>
                                            <TableCell align="left">{list.loiNhan}</TableCell>
                                            <TableCell align="center"><Button onClick={() => handleShow(list)}>Chi tiết</Button></TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                }
                <Button onClick={createOrder()}></Button>
                {/* <Grid item lg={12} md={12} sm={12} xs={12} mt={4} style={{ display: "flex", justifyContent: "center" }} >
                    <Pagination count={page} page={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
                </Grid>


                <Modal
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            First Name
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={firstname}
                        // value={}
                        />
                        <Typography style={{ marginTop: 2 }} id="modal-modal-description" sx={{ mt: 2 }}>
                            Last Name
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={lastname}
                        />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Country
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={country}
                        />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Subject
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={subject}
                        />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Customer Type
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={customerType}
                        />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Register Status
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={registerStatus}
                        />
                    </Box>
                </Modal> */}
            </Grid>
        </Container>
    )
}

export default Order