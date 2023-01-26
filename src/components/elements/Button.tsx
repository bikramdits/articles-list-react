import styled from "styled-components";
import Colors from "../../styles/Colors";

type ButtonContainerProps = {
  background?: string;
  width?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  height?: string;
  xsWidth?: string;
};

const ButtonContainer = styled.button<ButtonContainerProps>`
  -webkit-appearance: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width || "150px"};
  padding: ${(props) => props.padding || "1rem 2rem"};
  min-height: ${(props) => props.minHeight || null};
  min-width: ${(props) => props.minWidth || null};
  margin: ${(props) => props.margin || "0"};
  color: ${Colors.White};
  font-size: 1.2rem;
  transition: all 0.3s;
  height: ${(props) => props.height || "40px"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
  }

  @media screen and (max-width: 991px) {
    height: ${(props) => props.height || "35px"};
    font-size: 12px;
    width: ${(props) => props.width || "70px"};
  }

  @media screen and (max-width: 450px) {
    width: ${(props) => props.xsWidth || null};
  }
`;

type ButtonProps = {
  text: string;
  onClick: () => void;
  margin?: string;
  type?: "button" | "reset" | "submit" | undefined;
  width?: string;
  background?: string;
  height?: string;
  disabled?: boolean;
  xsWidth?: string;
  padding?: string;
  minWidth?: string;
  minHeight?: string;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  margin,
  type,
  width,
  background,
  height,
  disabled,
  xsWidth,
  padding,
  minWidth,
  minHeight,
  //   loading,
}) => {
  return (
    <ButtonContainer
      background={background}
      type={type}
      onClick={onClick}
      margin={margin}
      width={width}
      xsWidth={xsWidth || ""}
      height={height}
      disabled={disabled || false}
      padding={padding}
      minWidth={minWidth}
      minHeight={minHeight}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
