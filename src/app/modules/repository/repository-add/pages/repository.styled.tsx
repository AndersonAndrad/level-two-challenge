import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background: #ebaa93;
    margin-bottom: 20px;
    width: 500px;
    height: 40px;
    border-radius: 7px;
    border: 0px;
    padding: 10px;
    font-weight: bold;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;

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
`;
