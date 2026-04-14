import { Alert } from '@mui/material';

interface SuccessMessageProps {
	message: string;
}

export const SuccessMessage = (props: SuccessMessageProps) => {
	return <Alert severity='success'>{props.message}</Alert>;
};
