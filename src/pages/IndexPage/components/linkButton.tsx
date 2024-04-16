import { postEvent, Utils } from "@tma.js/sdk"
import { FormattedMessage } from "react-intl"

import done from "~/pages/IndexPage/components/images/done.png"
import lock from "~/pages/IndexPage/components/images/lock.png"
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
    <div className="connectButton" onClick={handleClick}>
      <img src={task.isCompleted ? done : task.isOpened ? 'PATH' : lock} alt='' className="check" />
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
