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

const AccessButton = ({ task }: TaskProps) => {
  return (
    <div
      className={task.isOpened ? "connectButton" : "connectButton__disabled"}
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
          <FormattedMessage id="anon" />
        </h1>
        <p>
          <FormattedMessage id="inform" />
        </p>
      </div>
    </div>
  )
}
export default AccessButton
