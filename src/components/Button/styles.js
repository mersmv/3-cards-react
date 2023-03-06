import styled from 'styled-components';

const StyledButton = styled.button`
	width: 150px;
	height: 40px;
	border: solid white;
	background-color: white;
	color: ${({ bgcolor }) => bgcolor};
	font-family: 'Lexend Deca', sans-serif;
	border-radius: 50px;
	margin-top: 160px;

	&:hover {
		border: solid 3px white;
		background-color: transparent;
		color: white;
		cursor: pointer;
	}
`;

export { StyledButton };
