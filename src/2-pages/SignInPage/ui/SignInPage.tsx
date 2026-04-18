import { SignInForm } from '3-widgets/SignInForm'
import { WithProtection } from '6-shared/store/HOCs/WithProtection'

export const SignInPage = WithProtection(() => {
	return <SignInForm />
})
