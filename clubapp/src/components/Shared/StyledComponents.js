import TextField from '@mui/material/TextField';
import { FormControl, Select} from '@mui/material';
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
  ${props => props.sx || ''}
`;

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
