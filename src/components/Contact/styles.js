import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;
  text-align: center;

  p {
    font-size: 18px;
    font-weight: 300;
    font-family: 'Roboto';
    color: #222;
    margin-top: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;

    width: 500px;
    margin-top: 60px;

    label {
      display: flex;
      width: 100%;
      flex-direction: column;
      text-align: left;

      margin-bottom: 16px;

      span {
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 400;
        color: rgba(0, 8, 36, 0.6);
        margin-bottom: 8px;
      }

      input,
      textarea {
        height: 42px;
        width: 100%;

        border: solid 1px #ccc;
        border-radius: 10px;
        padding: 0 16px;

        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 300;
        color: rgba(0, 8, 36, 0.6);
      }

      textarea {
        padding: 16px;
        height: 102px;
      }
    }

    .form-button {
      width: 100%;
      border: solid 1px #60A33D;
      background: #60A33D;
      border-radius: 10px;
      padding: 16px 0;
      color: #fff;
      font-family: 'Roboto';
      font-size: 16px;
      font-weight: 700;

      transition: all 0.3s ease;

      &:hover {
        background: #fff;
        color: #60A33D;
      }
    }
  }
`;
