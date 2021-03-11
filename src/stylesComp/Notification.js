import React, { useState } from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


const NotifWrapper = styled(MuiAlert)`
	font-size: 1.3rem;
   text-align: left;
   background-color: white;
   color: #ef962d;
   display: flex;
   align-items: center;
`;

// const useStyles = makeStyles((theme) => ({
// 	rootNotif: {
// 		width: '100%',
// 		'& > * + *': {
// 			marginTop: theme.spacing(2),
// 		},
// 		fontSize: '1.3rem',
// 	},
// }));

const Notification = ({ openNotif, showNotif, closeNotif, message }) => {


	return (
		<div>
			<Snackbar
				open={openNotif}
				autoHideDuration={5000}
				onClose={closeNotif}
			>
				<NotifWrapper
					elevation={6}
					variant="filled"
					onClose={closeNotif}
					severity="success"
				>
					{message}
				</NotifWrapper>
			</Snackbar>
		</div>
	);
};

export default Notification;
