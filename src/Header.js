import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import {Link,useHistory} from 'react-router-dom'
import './Header.css'

function Header({backButton}) {
    const history = useHistory()
    return (
        <div className='header'>
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIcon fontSize='large' className='header__' />
            </IconButton>
        ) : (
            <IconButton>
                <PersonIcon className='header__icon' fontSize="large" />
            </IconButton>
        )}
        
        <Link to='/'>
            <img className='header__logo' src="https://1000logos.net/wp-content/uploads/2019/06/tinder-logo-100x100.jpg" alt="logo"/>
        </Link>
        <Link to='/chat'>
            <IconButton>
                <ForumIcon className='header__icon' fontSize="large" />
            </IconButton>
        </Link>
        </div>
    )
}

export default Header
