import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            주차가능 무료
          </div>
          <div />
          <div className="content">
            <b>유성IC</b>
            <br />
            유성IC삼거리에서 '공주, 계룡산' 방면 좌회전 후 직진
            <br />→ '서대전, 유성' 방면 좌회전 후 직진
            <br />→ 구암역삼거리 좌회전
            <br />→ 유성온천역사거리 우회전
            <br />→ 도안고등학교
            <br />→ 목원대사거리 우회전 500M
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">지하철+버스</div>
          <div />
          <div className="content">
            <b>유성온천역 6번 출구</b>
            <br />→ <b>106번, 706번</b> 중 승차
            <br />→ 106번 <b>흥도초</b> 하차,
            <br />
            {"  "}706번 <b>등기소/아이파크시티</b> 하차
            <br />→ 목원대사거리 우측방향 500M 도보
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
