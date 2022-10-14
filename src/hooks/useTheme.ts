import { useContext } from 'react';
import { ColorModeContext } from '../contexts/ThemeProvider';

const useTheme = () => useContext(ColorModeContext);

export default useTheme