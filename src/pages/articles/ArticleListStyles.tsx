import styled from "styled-components";
import Colors from "styles/Colors";

export const Container = styled.section`
  padding: 40px;
  @media (max-width: 767px) {
    padding-bottom: 100px;
  }
`;
export const MainHeading = styled.h1`
  font-size: 35px;
  font-weight: 700;
  padding: 0 0 5px;
  color: ${Colors.Primary};
`;

export const Text = styled.p`
  font-size: 18px;
  padding: 0 0 25px;
  line-height: 28px;
`;
export const CardContainer = styled.ul`
  display: grid;
  padding-left: 0px;
  grid-template-columns: auto auto auto;
  gap: 30px;
  position: relative;
  @media (max-width: 1199px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;
export const LoadMore = styled.div`
  padding: 20px 0;
  position: relative;
  @media (min-width: 991px) {
    text-align: center;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${Colors.Primary};
  color: ${Colors.Primary};
  font-size: 15px;
  width: 200px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${Colors.White};
    background-color: ${Colors.Primary};
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ArticleCountInput = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.Gray};
  border-radius: 6px 0 0 6px;
  font-size: 15px;
  line-height: 15px;
  width: 150px;
  &:placeholder {
    color: ${Colors.Gray};
    font-size: 15px;
    line-height: 15px;
  }
  &:focus {
    border-color: ${Colors.Primary};
    outline: none;
  }
`;
export const ArticleCount = styled.div`
  text-align: right;
  position: fixed;
  right: 40px;
  display: inline-flex;
  align-items: center;
  bottom: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
  padding: 10px;
  border-radius: 5px;
  background-color: ${Colors.White};
`;
export const GetCountButton = styled.button`
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

export const LoaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Loader = styled.div`
  border: 3px solid ${Colors.White};
  border-radius: 50%;
  border-top: 3px solid ${Colors.Primary};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
