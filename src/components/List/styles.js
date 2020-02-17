import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow-y: hidden;
  flex: 0 0 320px;
  opacity: ${({ done }) => {
    return done ? 0.65 : 1
  }};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
      cursor: default;
      &:hover {
        color: #3b5bfd;
      }
    }

    button {
      height: 42px;
      width: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, .2);
      border: 0;
      cursor: pointer;
      &:active {
        background: #3f7fff;
        opacity: .8;
      }
      &:hover {
        background-color: #4b5bed;
        box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, .1);
      }
    }
  }
  div.list {
    width: 100%;
    height: calc(100% - 80px);
    margin-top: 30px;
    overflow-y:auto;
    padding: 0 15px;
    border-left: 1px solid rgba(0, 0, 0, .05);
    ul {}
  }
`;
