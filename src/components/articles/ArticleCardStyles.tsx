import styled from "styled-components";
import Colors from "styles/Colors";

export const Card = styled.li`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: ${Colors.Primary};
  color: ${Colors.White};
  border-radius: 8px;
`;
export const CardHead = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid ${Colors.White};
`;
export const Date = styled.p`
  font-size: 12px;
  line-height: 22px;
  padding: 0 0 3px;
  opacity: 0.8;
`;
export const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
`;
export const CardBody = styled.div`
  padding: 10px 15px;
  height: 250px;
  overflow: auto;
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
`;
export const CardFooter = styled.div`
  padding: 10px 15px;
`;
export const ReadMore = styled.button`
  padding: 10px;
  background-color: ${Colors.White};
  border: 1px solid ${Colors.White};
  color: ${Colors.Primary};
  font-size: 15px;
  width: 100%;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${Colors.White};
    background-color: transparent;
  }
`;
