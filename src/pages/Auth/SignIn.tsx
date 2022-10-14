import { Button, Container, FormGroup, styled, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledContainer } from "./StyledContainer";

const SignIn = () => {
	return (
		<StyledContainer maxWidth="sm">
			<FormGroup>
				<TextField />
				<TextField type="password" />
				<Link to="/signup">Not a member? Sign Up!</Link>
				<Link to="/restore"> Restore password</Link>

				<Button>GO BACK</Button>
				<Button>SIGN IN</Button>
			</FormGroup>
		</StyledContainer>
	);
};

export default SignIn;
