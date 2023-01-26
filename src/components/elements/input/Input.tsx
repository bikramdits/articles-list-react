import styled from "styled-components";

export const InputContainer = styled.div<any>`
  margin: ${(props) => props.margin || "0 auto"};
  padding: ${(props) => props.padding || "auto"};
  width: 100%;
`;

const Input = ({}) => {
  return <InputContainer></InputContainer>;
};

export default Input;
