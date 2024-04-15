import "./styles.css"
import { useTonWallet } from "@tonconnect/ui-react"
import { useTonAddress } from "@tonconnect/ui-react"
import TruncateText from "./TruncateText"
import { useTonConnectModal } from "@tonconnect/ui-react"
import walletpic from "./imgs/wallet.png"
import done from "./imgs/done.png"
import { Task } from "~/pages/IndexPage/IndexPage.tsx"
import { FormattedMessage } from "react-intl"
import { useEffect } from "react"

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
        <img src={done} className="check" />
      ) : (
        <img src={walletpic} className="walletpic" />
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
