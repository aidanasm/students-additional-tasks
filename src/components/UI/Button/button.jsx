import { Button } from "@mui/material";

export const ButtonWrap = (props)=>{
    return  <Button onClick={props.onClick} variant="contained">{props.children}</Button>
}