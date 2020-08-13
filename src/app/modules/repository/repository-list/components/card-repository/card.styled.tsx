import styled from 'styled-components';

export const Container = styled.div`
  background: #f14f16;
  display: flex;
  justify-content: space-between;
  height: 150px;
  width: 100%;
  max-width: 400px;
  border-radius: 7px;
  padding: 24px;
  margin-top: 25px;
`;

export const ContainerData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContainerLike = styled.div`
  width: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  label {
  }
`;
