import styled from "styled-components";

const Alert = styled.form`
  width: 500px;
  margin-bottom: 20px;
  text-align: start;
  position: relative;

  & .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.6;
    transition: 0.3s;
  }
  & .content {
    width: 100%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  & .title {
    width: 100%;
    padding: 10px 15px;
    border-radius: 6px 6px 0 0;
    color: #fff;
    background-color: #4a0c54;
    font-size: 18px;
    font-weight: 500;
  }

  & .message-container {
    padding: 10px 15px;
    border-radius: 0 0 6px 6px;
    background-color: #fff;
  }
  & .message-container .message {
    margin: 15px 0 40px;
  }
  & .btn {
    display: flex;
    justify-content: end;
  }

  & .btn Button {

  }
`;

export default Alert;
