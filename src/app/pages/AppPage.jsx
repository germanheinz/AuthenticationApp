import { Typography } from "@mui/material"
import { HomeLayout } from "../../auth/layout/HomeLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

import { NoteView } from "../views/NoteView"

export const AppPage = () => {
  return (
  <HomeLayout>
    {/* <NothingSelectedView/> */}
    <NoteView/>
  </HomeLayout>
  )
}
