import MessageRegion from "../molecules/MessageRegion"
import SoftkeyLabel from "../molecules/SoftkeyLabel"
import StatusRegion from "../molecules/StatusRegion"


const Lcd = () => {
  return (
    <>
    <div>
      <div className="w-full h-75 bg-green-300 rounded-md ">
      <StatusRegion />
      <MessageRegion />
      <SoftkeyLabel />
      </div>
    </div>
    </>
  )
}

export default Lcd
