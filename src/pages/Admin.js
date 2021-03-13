import React, { useEffect, useState } from 'react';
import { Footer } from '../stylesComp/Footer';
import styled from 'styled-components';
import { getCount, setCount } from '../api/getCountCart';
// import { useAuth } from '../config/Auth';
import ProductCart from '../stylesComp/ProductCart';
// import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import kopi from '../api/kopi';
import { getId } from '../api/userId';
import { useAuth } from '../config/Auth';

const AdminContent = styled.div`
	min-height: 100vh;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AdminWrapper = styled.div`
	align-items: center;
	justify-content: space-around;
	margin: 6.5rem auto 3rem auto;
	display: flex;
	flex-wrap: wrap;
	border: 1px solid #ef962d;
	border-radius: 1rem;
	box-sizing: border-box;
	padding: 4rem;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const columns = [
	{ id: 'idp', label: 'Id Product', minWidth: 170 },
	{ id: 'price', label: 'Price Product', minWidth: 100 },
	{
		id: 'idt',
		label: 'Id Transaction',
		minWidth: 170,
		align: 'right',
	},
	{
		id: 'qty',
		label: 'Quantity',
		minWidth: 170,
		align: 'right',
	},
	{
		id: 'idu',
		label: 'Id User',
		minWidth: 170,
		align: 'right',
	},
];

const getAllTrans = async () => {
	await kopi.get(`/api/transactions/`).then((res) => {
		return res.data.message;
	});
};

function createData(idp, price, idt, qty, idu) {
	return { idp, price, idt, qty, idu };
}

const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', 60483973, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
});

const Admin = () => {
	const IdUser = getId();
	const { authTokens } = useAuth();
	let count = getCount();
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
   const [r, setR] = useState();
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(async () => {
		let data = await getAllTrans();
      setR(data);
	}, [1]);

	return (
		<>
			<AdminContent>
				<AdminWrapper>
               {r && console.log(r)}
					<Paper className={classes.root}>
						<TableContainer className={classes.container}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead>
									<TableRow>
										{columns.map((column) => (
											<TableCell
												key={column.id}
												align={column.align}
												style={{ minWidth: column.minWidth }}
											>
												{column.label}
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.slice(
											page * rowsPerPage,
											page * rowsPerPage + rowsPerPage
										)
										.map((row) => {
											return (
												<TableRow
													hover
													role="checkbox"
													tabIndex={-1}
													key={row.code}
												>
													{columns.map((column) => {
														const value = row[column.id];
														return (
															<TableCell
																key={column.id}
																align={column.align}
															>
																{column.format &&
																typeof value === 'number'
																	? column.format(value)
																	: value}
															</TableCell>
														);
													})}
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[10, 25, 100]}
							component="div"
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onChangePage={handleChangePage}
							onChangeRowsPerPage={handleChangeRowsPerPage}
						/>
					</Paper>
				</AdminWrapper>
			</AdminContent>
			<Footer>
				<p> Develop by kelompok 4 with love 💙</p>
			</Footer>
		</>
	);
};

export default Admin;
