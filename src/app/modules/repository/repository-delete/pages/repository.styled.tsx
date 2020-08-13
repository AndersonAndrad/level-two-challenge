import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    background: #ebaa93;
    margin-bottom: 90px;
    width: 500px;
    height: 40px;
    border-radius: 7px;
    border: 0px;
    padding: 10px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 200px;
      background: #f14f16;
      color: #fff;
      border: 0px;
      padding: 10px;
      border-radius: 10px;
      /* font-weight: bold; */
      font-size: 18px;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  margin-top: 90px;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }
`;
