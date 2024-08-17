import React from "react"
import Page from "../page"

export default function myTripLayout ({children}: {children: React.ReactNode}) {
  return (
    <Page>
      {children}
    </Page>
  )
}