import { Button, FormGroup, TextField } from "@mui/material";
import { StyledContainer } from "./StyledContainer";

const SignUp = () => {
	return (
		<StyledContainer maxWidth="sm">
			<FormGroup>
				<TextField />
				<TextField type="password" />
				<TextField type="password" />
				<p>Already a member? Sign in!</p>

				<Button>GO BACK</Button>
				<Button>SIGN UP</Button>
			</FormGroup>
		</StyledContainer>
	);
};

export default SignUp;
