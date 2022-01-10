import { Footer } from '@/components'
import { useThemeMode } from '@/hooks/useThemeMode'
import { ThemeProvider } from '@mui/material/styles'
import * as S from './styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme } = useThemeMode()
  return (
    <ThemeProvider theme={theme}>
      <S.Container>{children}</S.Container>
      <Footer />
    </ThemeProvider>
  )
}

export { DefaultLayout }
