import { FormattedMessage } from "react-intl"
import type { FC, PropsWithChildren, ReactNode } from "react"

import "./Page.css"

export interface PageProps extends PropsWithChildren {
  title: string
  disclaimer?: ReactNode
}

export const Page: FC<PageProps> = ({ children, disclaimer }) => {
  return (
    <div className="page">
      <img
        className="page__img"
        src="https://notmeme.org/notmeme_watchdog_bot/notmeme_banner_1920x1080.jpg"
        alt="Get access"
      />
      <h1 className="page__title">
        <FormattedMessage id="title" />
      </h1>
      {disclaimer && <div className="page__disclaimer">{disclaimer}</div>}
      {children}
    </div>
  )
}
