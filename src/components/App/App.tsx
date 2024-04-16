import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration
} from "@tma.js/react-router-integration"
import { useBackButton } from "@tma.js/sdk-react"
import { TonConnectUIProvider } from "@tonconnect/ui-react"
import { type FC, useMemo } from "react"
import { IntlProvider } from "react-intl"
import { Navigate, Route, Router, Routes } from "react-router-dom"

import { LOCALES } from "~/i18n/locales.ts"
import { messages } from "~/i18n/messages.ts"
import { routes } from "~/navigation/routes.tsx"

export const App: FC = () => {
  const tmaNavigator = useMemo(createNavigator, [])
  const [location, navigator] = useNavigatorIntegration(tmaNavigator)
  const backButton = useBackButton()

  useBackButtonIntegration(tmaNavigator, backButton)

  const locale = LOCALES.ENGLISH

  return (
    <TonConnectUIProvider manifestUrl="https://notmeme.org/notmeme_watchdog_bot/tonconnect-manifest.json">
      <IntlProvider messages={messages[locale]} locale="en" defaultLocale="en">
        <Router location={location} navigator={navigator}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </IntlProvider>
    </TonConnectUIProvider>
  )
}
