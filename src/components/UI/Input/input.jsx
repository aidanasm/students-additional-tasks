import { TextField, styled } from "@mui/material";

export const InputField = (props) => {
	return <StyledInput onChange={props.onChange} />;
};

const StyledInput = styled(TextField)`
	width: 350px;
	height: 36px;
	& input {
		padding: 7.5px 14px;
	}
`;
