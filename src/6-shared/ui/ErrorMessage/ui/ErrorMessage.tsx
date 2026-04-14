import { Alert, AlertTitle, Button } from '@mui/material';

interface ErrorMessageProps {
	onRetry?: () => void;
	message: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
	const { message, onRetry } = props;
	return (
		<Alert
			action={!!onRetry && <Button onClick={onRetry}>Retry</Button>}
			severity='error'>
			<AlertTitle>{message}</AlertTitle>
		</Alert>
	);
};
