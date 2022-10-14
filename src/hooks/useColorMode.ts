import { useContext } from 'react';
import { ColorModeContext } from '../contexts/ThemeProvider';

const useColorMode = () => useContext(ColorModeContext);

export default useColorMode