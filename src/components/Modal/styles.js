import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 500px;
  display: none;
  max-height: calc(100vh - 80px);
  height: 85vh;
  min-height: 300px;
  background: #fff;
  border-radius: 5px;
  right: 25px;
  bottom: 25px;
  border-top: 30px solid rgba(192,208,230,.2);
  flex-direction: column;
  overflow-y: none;
  &.active {
    animation: appear 300ms ease forwards 1;
    opacity: 1;
    display: flex;
  }
  .closeBtn {
    position: absolute;
    top: -75px;
    width: 38px;
    height: 38px;
    right: 10px;
    background: #fff;
    color: #3b5bfd;
    border: none;
    transition: all ease-in 200ms;
    font-size: .8rem;
    font-weight: bold;
    &:hover {
      background: #333;
      color: #fff;
    }
    &:active {
      color: rgba(20, 20, 20, .2);
    }
  }
  .content {
    flex: 1;
    overflow-y: auto;
    padding: 60px 40px 40px;
    h2 {
      margin-bottom: 2rem;
    }
    .inputGroup {
      margin-bottom: 1.5rem;
      input {
        margin-top: 10px;
        width: 100%;
        height: 42px;
        border: 1px solid #c0d0e6;
        border-radius: 3px;
        caret-color: #3b5bfd;
        color: #213547;
        line-height: 1.4;
        padding: 0 10px;
        &:hover {
          border: 1px solid #3b5bfd;
        }
        &:focus {
          box-shadow: 0 0 0 3px rgba(59,91,253,.1);
          border: 1px solid #3b5bfd;
        }
      }
    }
  }
  .add {
    background: #3b5bfd;
    border-radius: 0 0 3px 3px;
    /* bottom: 0; */
    font-size: 16px;
    font-weight: 600;
    height: 70px;
    /* left: 0; */
    /* position: absolute; */
    right: 0;
    width: 100%;
    border: none;
    color: #fff;
    &:hover {
      opacity: .8;
    }
  }
  @keyframes appear {
    0% {
      display: none;
      opacity: 0;
    }
    1%  {
      display: flex;
      opacity: 0;
    }
    100% {
      display: flex;
      opacity: 1;
    }
  }
`;


export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background-color: ${({ color }) => color};
  &:not(:first-child){
    margin-left: 3px;
  }
`