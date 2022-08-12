import React from 'react';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import {StyledToolbar} from "./styled"
import {goToFeed, goToLogin} from "../../routes/coordinator";
import { logout } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../pages/SignUpPage/SignUpForm';

const Header = ({page}) => {
const navigate = useNavigate();

return(
    <AppBar position="static">
    <StyledToolbar>
        <Button onClick={() => goToFeed(navigate)} color="inherit">Jilddit</Button>
        {page === 'signUp' ? (<Button onClick={() => goToLogin(navigate)} color="inherit">ENTRAR</Button>):(<Button onClick={() => logout(navigate)} color="inherit">LOGOUT</Button>)}
        
    </StyledToolbar>
</AppBar>
);
};

export default Header;
