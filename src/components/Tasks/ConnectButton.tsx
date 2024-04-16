import {
  useTonAddress,
  useTonConnectModal,
  useTonWallet
} from "@tonconnect/ui-react"
import { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import type { Task } from "~/pages/IndexPage/IndexPage.tsx"

import "./styles.css"

import TruncateText from "./TruncateText.tsx"

interface TaskProps {
  task: Task
  completeTask: () => void
}

const Connect = ({ task, completeTask }: TaskProps) => {
  const wallet = useTonWallet()
  const userFriendlyAddress = useTonAddress()
  const { open } = useTonConnectModal()

  useEffect(() => {
    if (wallet) completeTask()
  }, [wallet])

  return (
    <div className="connectButton" onClick={open}>
      <img
        src={wallet ? "./images/done.svg" : "./images/wallet.svg"}
        alt=""
        className={wallet ? "check" : "wallet-pic"}
      />
      <div className="connect__text">
        <h1>
          <FormattedMessage id="connect" />
        </h1>
        {wallet ? (
          <div className="connect__text__p">
            <TruncateText text={userFriendlyAddress} maxLength={8} />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
export default Connect
