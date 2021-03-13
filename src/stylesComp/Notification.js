import React from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



const NotifWrapper = styled(MuiAlert)`
	font-size: 1.3rem;
   text-align: left;
   background-color: white;
   color: #ef962d;
   display: flex;
   align-items: center;
`;

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
