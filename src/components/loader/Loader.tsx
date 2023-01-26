import styled from "styled-components";
import Colors from "styles/Colors";

export const LoaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Spinner = styled.div`
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

const Loader = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default Loader;
