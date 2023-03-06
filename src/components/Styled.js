import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	width: 80%;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	gap: 15px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledCard = styled.div`
	padding: 50px;
	height: 500px;
	background-color: ${({ bgcolor }) => bgcolor};
	color: white;
	border-radius: 15px;
`;

export { StyledCard, StyledContainer };
