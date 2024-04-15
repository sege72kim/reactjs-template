import "./styles.css"
import lock from "./imgs/lock.png"
import done from "./imgs/done.png"
import { Task } from "~/pages/IndexPage/IndexPage.tsx"
import { FormattedMessage } from "react-intl"

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
