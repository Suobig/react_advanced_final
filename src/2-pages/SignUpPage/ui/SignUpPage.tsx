import { WithProtection } from '../../../6-shared/store/HOCs/WithProtection';
import { SignUpForm } from '../../../3-widgets/SignUpForm';

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />;
});
