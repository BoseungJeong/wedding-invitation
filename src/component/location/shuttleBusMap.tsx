import shuttleMapImg from "../../images/shuttle-map.png"

export const ShuttleBusMap = () => {
  return (
    <div className="shuttle-map">
      <img
        className="shuttle-map-img"
        src={shuttleMapImg}
        alt="영천시청 주차장 지도"
      />
    </div>
  )
}
