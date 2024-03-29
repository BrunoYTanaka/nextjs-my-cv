import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DrawerContextProvider } from '@/hooks/useSettingsSidebar'
import { BackToTop } from '@/components/BackToTop'
import { useThemeMode } from '@/hooks/useThemeMode'
import { Sidebar } from '@/components/Sidebar'
import { ThemeProvider } from '@mui/material/styles'
import { IntlContextProvider } from '@/hooks/useIntl'
import CssBaseline from '@mui/material/CssBaseline'
import * as S from './styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme, toggleThemeMode } = useThemeMode()
  return (
    <ThemeProvider theme={theme}>
      <IntlContextProvider>
        <DrawerContextProvider>
          <Header />
          <S.Container>{children}</S.Container>
          <Sidebar toggleThemeMode={toggleThemeMode} />
          <BackToTop />
          <Footer />
        </DrawerContextProvider>
      </IntlContextProvider>
      <CssBaseline />
    </ThemeProvider>
  )
}

export { DefaultLayout }
