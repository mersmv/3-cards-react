import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { StyledCard } from '../Styled';
import Text from '../Text/Text';
import Title from '../Title/Title';

const Card = ({ icon, title, text, bgcolor }) => {
	return (
		<StyledCard bgcolor={bgcolor}>
			<Icon icon={icon} />
			<Title title={title} />
			<Text text={text} />
			<Button bgcolor={bgcolor} />
		</StyledCard>
	);
};

export default Card;
