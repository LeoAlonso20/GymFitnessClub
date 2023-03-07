import TextField from '@mui/material/TextField';
import { Button, FormControl, Select} from '@mui/material';
import styled from "styled-components";



export const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 100%;
  border-radius: 12px;
  transition: all 0.2s ease;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  background-color: rgb(255, 255, 255);
  overflow-y:hidden;
  ${props => props.sx || ''}
`;

export const StyledInput = styled.input`
  background-color: trasnparent;
  outline: none;
  color: rgb(33, 43, 54);
  width: 80%;
  height: auto;
  font-size: 1.3em;
  font-weight: 550;
  height: 1.4375em;
  &:focus {
      border: none;
  }

  &:active {
      border: none;
  }

  &::placeholder {
    color: rgb(88, 88, 88, 0.7);
  }
`

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: rgb(33, 43, 54);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid rgb(33, 43, 54)
    }
  }
`;

export const StyledSelect = styled(Select)`
  &.MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid rgb(33, 43, 54);
      color: red
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
    & label.Mui-focused {
        color: rgb(33, 43, 54);
    }
`

export const StyledButton = styled(Button)`
    &:hover{
      background: red;
    }
`
