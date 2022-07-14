import { AppRouter } from "./app/routes/ApplicationRouter"
import { AppTheme } from "./themes"

export const AuthApp = () => {
  return (
  <AppTheme>
    <AppRouter/>
  </AppTheme>
  )
}
