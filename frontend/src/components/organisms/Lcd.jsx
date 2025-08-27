import MessageRegion from "../molecules/MessageRegion"
import SoftkeyLabel from "../molecules/SoftkeyLabel"
import StatusRegion from "../molecules/StatusRegion"

const Lcd = () => {
  return (
    <div className="w-full h-75 bg-green-300 rounded-md ">
      <StatusRegion />
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <MessageRegion />
      <SoftkeyLabel />
    </div>
  )
}

export default Lcd
