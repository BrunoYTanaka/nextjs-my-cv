import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

export const Container = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  padding: '180px 0 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    maxWidth: 'none',
    paddingBottom: 60,
    textAlign: 'center',
  },
}))

export const LeftWrapper = styled(Grid)(({ theme }) => ({
  paddingRight: 30,
  [theme.breakpoints.down('sm')]: {
    paddingRight: 0,
  },
}))

export const RightWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 30,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
  },
}))
