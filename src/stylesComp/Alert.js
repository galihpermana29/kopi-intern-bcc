import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

const DialogMainTitle = styled.h3`
	font-size: 1.7rem;
`;

const MessageDialog = styled.p`
	font-size: 1.4rem;
`;

export default function AlertDialog({
	handleClickAlertOpen,
	handleAlertClose,
	openAlert,
}) {
	return (
			<Dialog
				open={openAlert}
				onClose={handleAlertClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle>
					<DialogMainTitle>Hapus Produk</DialogMainTitle>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<MessageDialog>
							Anda yakin ingin mengapus produk dari keranjang?
						</MessageDialog>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={(e) => handleAlertClose(e)} color="primary">
						<MessageDialog>Tidak</MessageDialog>
					</Button>
					<Button onClick={(e) => handleAlertClose(e)} color="primary" autoFocus>
						<MessageDialog>Iya</MessageDialog>
					</Button>
				</DialogActions>
			</Dialog>
	);
}
