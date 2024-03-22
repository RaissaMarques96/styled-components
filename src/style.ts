import  styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.Violet};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.form`
  background-color: #fef2f2;
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  height: 42px;
  border-radius: 8px;
  background-color: #d6d3d1;
  font-size: 16px;
  border: none;
  color: #27272a;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px;
  height: 42px;
  border-radius: 8px;
  background-color: #fee2e2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #71717a;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;