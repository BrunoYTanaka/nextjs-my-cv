import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const CustomLink = styled('button')(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: theme.palette.text.primary,
  fontSize: '1.125rem', //18px
  lineHeight: '1.875rem', //30px
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all ease-in-out .2s',
  textTransform: 'capitalize',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.down('sm')]: {
    paddingBottom: '0.5rem', //8px
  },
}))

export const Underline = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  height: '0.25rem',
  borderRadius: '1rem',
  opacity: 0.85,
  backgroundColor: theme.palette.text.primary,

  [theme.breakpoints.down('sm')]: {
    left: 'unset',
  },
}))
