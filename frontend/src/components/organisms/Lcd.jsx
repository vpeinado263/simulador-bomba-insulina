import MessageRegion from "../molecules/MessageRegion"
import StatusRegion from "../molecules/StatusRegion"

const Lcd = () => {
  return (
    <div className="w-full h-60 bg-green-300 rounded-md ">
      <StatusRegion />
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <div>00.00</div>
      <MessageRegion />
    </div>
  )
}

export default Lcd
