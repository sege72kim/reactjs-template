import { postEvent, Utils } from "@tma.js/sdk"
import { FormattedMessage } from "react-intl"
import type { Task } from "~/pages/IndexPage/IndexPage.tsx"

import "./styles.css"

interface TaskProps {
  task: Task
  completeTask: () => void
}

const utils = new Utils("7.0", () => Math.random().toString(), postEvent)

const LinkButton = ({ task, completeTask }: TaskProps) => {
  const handleClick = () => {
    completeTask()

    utils.openLink(
      "https://getgems.io/collection/EQB_oI5-DE8iAXC3D8rGvXFeCWLNWG6Uc6_tw3Ocs_Ck14-u"
    )
  }

  return (
    <div
      className={task.isOpened ? "connectButton" : "connectButton__disabled"}
      onClick={handleClick}
    >
      <img
        src={
          task.isCompleted
            ? "./images/done.svg"
            : task.isOpened
              ? "./images/tempicon.svg"
              : "./images/lock.svg"
        }
        alt=""
        className={
          task.isCompleted ? "check" : task.isOpened ? "wallet-pic" : "lock"
        }
      />

      <div className="connect__text">
        <h1>
          <FormattedMessage id="getnft" />
        </h1>
        <div className="connect__text__p">
          <FormattedMessage id="getgems" />
        </div>
      </div>
    </div>
  )
}
export default LinkButton
