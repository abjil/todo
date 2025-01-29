import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { HeaderContainer, HeaderWrapper } from './Header.styled'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../future/themeList'

export const Header = () => {
    const dispatch = useDispatch()

    const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
            </HeaderContainer>
            <div className={classes.toggleButton}>
                <button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
            </div>
        </HeaderWrapper>
    )
}