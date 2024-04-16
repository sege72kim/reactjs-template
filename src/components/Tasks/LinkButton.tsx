import { postEvent, Utils } from "@tma.js/sdk"
import { FormattedMessage } from "react-intl"
import tempicon from "../../../public/images/tempicon.svg"
import done from "../../../public/images/done.svg"
import lock from "../../../public/images/lock.svg"
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
        src={task.isCompleted ? done : task.isOpened ? tempicon : lock}
        alt=""
        className={
          task.isCompleted ? "check" : task.isOpened ? "wallet-pic" : "lock"
        }
      />

      <div className="connect__text">
        <h1>
          <FormattedMessage id="getnft" />
        </h1>
        <p>
          <FormattedMessage id="getgems" />
        </p>
      </div>
    </div>
  )
}
export default LinkButton
