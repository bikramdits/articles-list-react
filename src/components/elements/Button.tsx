import styled from "styled-components";
import Colors from "styles/Colors";

const ButtonContainer = styled.button`
  padding: 10px;
  background-color: ${Colors.Primary};
  border: 1px solid ${Colors.Primary};
  color: ${Colors.White};
  font-size: 15px;
  width: 120px;
  border-radius: 0 6px 6px 0;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${Colors.Primary};
    background-color: transparent;
  }
`;

type ButtonProps = {
  text: string;
  onClick: () => void;
  "data-testid"?: string;
  children?: JSX.Element;
};

const Button: React.FC<ButtonProps> = ({ text, children: _, ...rest }) => {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
};

export default Button;
