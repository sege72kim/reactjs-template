import { FormattedMessage } from "react-intl"
import type { Task } from "~/pages/IndexPage/IndexPage.tsx"

import "./styles.css"

interface TaskProps {
  task: Task
  completeTask: () => void
}

const JoinButton = ({ task }: TaskProps) => {
  return (
    <div
      className={task.isOpened ? "connectButton" : "connectButton__disabled"}
    >
      <img
        src={
          task.isCompleted
            ? "./images/done.svg"
            : task.isOpened
              ? "./images/plus.svg"
              : "./images/lock.svg"
        }
        alt=""
        className={
          task.isCompleted ? "check" : task.isOpened ? "wallet-pic" : "lock"
        }
      />
      <div className="connect__text">
        <h1>
          <FormattedMessage id="join" />
        </h1>
      </div>
    </div>
  )
}
export default JoinButton
