import { styled, Container } from '@mui/material';
import { Link } from 'react-router-dom'

const StyledContainer = styled(Container)(() =>({
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const StyledTextLink = styled(Link)(({theme})=>({
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    '&:hover': {
        cursor: 'pointer',
    }
}))

export {
    StyledContainer,
    StyledTextLink
}