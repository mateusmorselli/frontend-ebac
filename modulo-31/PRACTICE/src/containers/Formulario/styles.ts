import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(28, 27, 33);
  padding: 0 480px;
  height: 100vh;
  overflow-y: scroll;
  color: #fff;
`

export const Titulo = styled.h1`
  color: #fff;
  font-size: 18px;
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
`
export const Campo = styled.input`
  border-radius: 8px;
  color: #fff;
  background-color: rgb(42, 41, 49);
  padding: 8px;
  font-weight: bold;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .radio-options {
    display: flex;
    gap: 16px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  button {
    padding: 10px;
    background-color: rgb(102, 106, 110);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
