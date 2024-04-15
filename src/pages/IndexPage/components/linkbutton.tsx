import "./styles.css"
import lock from "./imgs/lock.png"
import done from "./imgs/done.png"
import { Task } from "~/pages/IndexPage/IndexPage.tsx"
import { useEffect } from "react"
import { FormattedMessage } from "react-intl"

interface TaskProps {
  task: Task
  completeTask: () => void
}
const LinkButton = ({ task, completeTask }: TaskProps) => {
  const handleClick = () => {
    completeTask()

    window.open(
      "https://getgems.io/collection/EQB_oI5-DE8iAXC3D8rGvXFeCWLNWG6Uc6_tw3Ocs_Ck14-u",
      "_blank"
    )
  }

  return (
    <div className="connectButton" onClick={handleClick}>
      <img src={done} className="check" />
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
