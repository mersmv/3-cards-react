import Card from './components/Card/Card';
import { StyledContainer } from './components/Styled';
import { cardsArray } from './constants/cards';

const App = () => {
	return (
		<StyledContainer>
			{cardsArray.map(card => {
				return (
					<Card
						bgcolor={card.bgcolor}
						icon={card.icon}
						title={card.title}
						text={card.text}
					/>
				);
			})}
		</StyledContainer>
	);
};

export default App;
