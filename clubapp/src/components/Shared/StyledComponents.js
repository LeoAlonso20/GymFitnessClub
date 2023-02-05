import TextField from '@mui/material/TextField';
import { FormControl, Select} from '@mui/material';
import styled from "styled-components";


export const TextFieldCustom = styled(TextField)`
  & label.Mui-focused {
    color: rgb(33, 43, 54);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid rgb(33, 43, 54)
    }
  }
`;

export const SelectCustom = styled(Select)`
  &.MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid rgb(33, 43, 54);
      color: red
    }
  }
`;

export const FormControlCustom = styled(FormControl)`
    & label.Mui-focused {
        color: rgb(33, 43, 54);
    }
`
