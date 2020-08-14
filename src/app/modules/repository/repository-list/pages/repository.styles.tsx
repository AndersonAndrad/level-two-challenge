import styled from 'styled-components';

export const Container = styled.div``;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 24px;
    color: #fff;
    li {
      list-style: none;
    }
  }
`;
