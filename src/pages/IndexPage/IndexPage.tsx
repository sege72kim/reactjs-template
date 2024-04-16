import { useEffect, useState, FC } from "react"
import { FormattedMessage } from "react-intl"

import { Page } from "~/components/Page/Page.tsx"

import AccessButton from "~/components/Tasks/AccessButton.tsx"
import Connect from "~/components/Tasks/ConnectButton.tsx"
import JoinButton from "~/components/Tasks/JoinButton.tsx"
import LinkButton from "~/components/Tasks/LinkButton.tsx"

import "./IndexPage.css"

export interface Task {
  id: number
  isCompleted: boolean
  isOpened: boolean
}

interface Data {
  tasks: Task[]
}

export const IndexPage: FC = () => {
  const [data, setData] = useState<Data>({} as Data)

  const saveDataToLocalStorage = (dataToSave: Data) => {
    localStorage.setItem("tasksData", JSON.stringify(dataToSave))
  }

  const completeTask = (id: number) => {
    const modifiedData = data

    modifiedData.tasks[id].isCompleted = !modifiedData.tasks[id].isCompleted
    if (modifiedData.tasks[id + 1]) {
      modifiedData.tasks[id + 1].isOpened = true
    }

    setData(modifiedData)
    saveDataToLocalStorage(modifiedData)
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasksData") as string)

    if (savedData) {
      setData(savedData)
    }

    if (!data || !data.tasks?.length) {
      setData({
        tasks: [
          {
            id: 0,
            isCompleted: false,
            isOpened: true
          },
          {
            id: 1,
            isCompleted: false,
            isOpened: false
          },
          {
            id: 2,
            isCompleted: false,
            isOpened: false
          },
          {
            id: 3,
            isCompleted: false,
            isOpened: false
          }
        ]
      })
    }
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
