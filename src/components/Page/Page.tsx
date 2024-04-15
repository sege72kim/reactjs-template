import type { FC, PropsWithChildren, ReactNode } from "react"

import "./Page.css"
import { FormattedMessage } from "react-intl"

export interface PageProps extends PropsWithChildren {
  title: string
  disclaimer?: ReactNode
}

export const Page: FC<PageProps> = ({ title, children, disclaimer }) => {
  return (
    <div className="page">
      <img
        className="page__img"
        src="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"
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
