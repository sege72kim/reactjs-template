import {
  useTonAddress,
  useTonConnectModal,
  useTonWallet
} from "@tonconnect/ui-react"
import { useEffect } from "react"
import { FormattedMessage } from "react-intl"
import tempicon from "~/pages/IndexPage/components/images/tempicon.svg"
import done from "~/pages/IndexPage/components/images/done.svg"
import lock from "~/pages/IndexPage/components/images/lock.svg"
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
      <img
        src={task.isCompleted ? done : task.isOpened ? tempicon : lock}
        alt=""
        className={
          task.isCompleted ? "check" : task.isOpened ? "walletpic" : "lock"
        }
      />
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
