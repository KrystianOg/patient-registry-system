import { createSlice } from '@reduxjs/toolkit'
import { useLocalStorage } from 'usehooks-ts'

// dark == true, light == false
const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>('darkTheme', false)

const slice = createSlice({
    name: 'theme',
    initialState: isDarkTheme,
    reducers: {
        toggle: (state: boolean) => {
            setDarkTheme(prev => !prev)
            state = !state
        }
    }
})

export const { toggle } =slice.actions
export default slice.reducer

export const selectDarkTheme = (state: boolean) => state