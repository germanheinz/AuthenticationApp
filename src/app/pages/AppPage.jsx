import { Typography } from "@mui/material"
import { HomeLayout } from "../../auth/layout/HomeLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const AppPage = () => {
  return (
  <HomeLayout>
    <NothingSelectedView/>
  </HomeLayout>
  )
}
