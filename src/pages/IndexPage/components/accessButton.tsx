import { FormattedMessage } from "react-intl"

import done from "~/pages/IndexPage/components/images/done.png"
import lock from "~/pages/IndexPage/components/images/lock.png"
import type { Task } from "~/pages/IndexPage/IndexPage.tsx"

import "./styles.css"

interface TaskProps {
  task: Task
  completeTask: () => void
}

const AccessButton = ({ task }: TaskProps) => {
  return (
    <div className="connectButton">
      <img src={done} className="check" />
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
