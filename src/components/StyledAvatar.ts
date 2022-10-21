import { styled, Avatar } from '@mui/material'

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}));

export default StyledAvatar