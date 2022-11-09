import styled from '@emotion/styled';

export const Button = styled.div`
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: #4676d7;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background: red;
        box-shadow: 0 0 0 4px #cbd6ee;
    }
    &:focus {
      background: red;
        outline: none;
    }
  }
`;

export const Button_Container = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0px;
`;

export const Button_List = styled.li`
  list-style: none;
`;
