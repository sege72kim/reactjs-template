import type { FC } from "react"
import { Page } from "~/components/Page/Page.tsx"
import "./IndexPage.css"
import Connect from "./components/connectbutton"
import LinkButton from "./components/linkbutton"
import AccessButton from "./components/accessbutton"
import JoinButton from "./components/joinbutton"
import { FormattedMessage } from "react-intl"
import { useState, useEffect } from "react"
import { useMainButton } from "@tma.js/sdk-react"

export interface Task {
  id: number
  isCompleted: boolean
}

interface Data {
  tasks: Task[]
}
interface TaskProps {
  task: Task
  completeTask: () => void
}

export const IndexPage: FC = () => {
  const [data, setData] = useState<Data>({} as Data)

  const saveDataToLocalStorage = (data: Data) => {
    localStorage.setItem("tasksData", JSON.stringify(data))
  }

  const completeTask = (id: number) => {
    const modifiedData = data

    modifiedData.tasks[id].isCompleted = !modifiedData.tasks[id].isCompleted

    setData(modifiedData)
    saveDataToLocalStorage(modifiedData)
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasksData") as string)

    if (savedData) {
      setData(savedData)
    }

    if (!data || !data.tasks?.length)
      setData({
        tasks: [
          {
            id: 0,
            isCompleted: false
          },
          {
            id: 1,
            isCompleted: false
          },
          {
            id: 2,
            isCompleted: false
          },
          {
            id: 3,
            isCompleted: false
          }
        ]
      })
  }, [])

  if (!data?.tasks?.length) return <></>

  return (
    <Page title="Not meme. Group access">
      <div className="description">
        <FormattedMessage id="getaccess" />
      </div>
      <h1 className="taskstitle">
        <FormattedMessage id="tasktxt1" />
      </h1>
      <div className="taskstitle2">
        <FormattedMessage id="tasktxt2" />
      </div>
      <div className="buttons">
        <Connect task={data.tasks[0]} completeTask={() => completeTask(0)} />
        <LinkButton task={data.tasks[1]} completeTask={() => completeTask(1)} />
        <AccessButton
          task={data.tasks[2]}
          completeTask={() => completeTask(2)}
        />
        <JoinButton task={data.tasks[3]} completeTask={() => completeTask(3)} />
      </div>
    </Page>
  )
}
