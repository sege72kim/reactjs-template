import React, { useState } from "react"
import "./styles.css"
import { FormattedMessage } from "react-intl"

const Notification: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const showNotification = () => {
    setIsVisible(true)

    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  return (
    <div>
      <button onClick={showNotification}>Показать уведомление</button>

      <div className={`notification ${isVisible ? "show" : ""}`}>
        <FormattedMessage id="noti" />
      </div>
    </div>
  )
}

export default Notification
