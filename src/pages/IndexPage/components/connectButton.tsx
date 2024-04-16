import {
  useTonAddress,
  useTonConnectModal,
  useTonWallet
} from "@tonconnect/ui-react"
import { useEffect } from "react"
import { FormattedMessage } from "react-intl"

import done from "~/pages/IndexPage/components/images/done.png"
import walletpic from "~/pages/IndexPage/components/images/wallet.png"
import type { Task } from "~/pages/IndexPage/IndexPage.tsx"

import "./styles.css"

import TruncateText from "./TruncateText"

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
      {wallet ? (
        <img src={done} className="check"  alt=''/>
      ) : (
        <img src={walletpic} className="walletpic"  alt=''/>
      )}
      <div className="connect__text">
        <h1>
          <FormattedMessage id="connect" />
        </h1>
        {wallet ? (
          <p>
            <TruncateText text={userFriendlyAddress} maxLength={8} />
          </p>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
export default Connect
