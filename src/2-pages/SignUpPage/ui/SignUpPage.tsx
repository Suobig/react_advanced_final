import { SignUpForm } from '3-widgets/SignUpForm'
import { WithProtection } from '6-shared/store/HOCs/WithProtection'

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />
})
