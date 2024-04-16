import { createSlice, } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
const preferredTheme = localStorage.getItem('preferredTheme');
const themeSlice = createSlice({
    name : "Theme",
    initialState : {
        backgroundColor : "white",
        color : "black",
        theme : <FontAwesomeIcon icon={faSun}/>,
        isDarkMode: false,
    },
    reducers : {
        toogleTheme : (state)=>{
            state.isDarkMode = !state.isDarkMode;
            state.backgroundColor = state.isDarkMode ? "black" : "white";
            state.color = state.isDarkMode ? "white" : "black";
            state.theme = state.isDarkMode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>
        }
    }
})
export default themeSlice.reducer
export const {toogleTheme} = themeSlice.actions