import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import PersonIcon from "../../icons/person-icon.svg?react"
import nmapIcon from "../../icons/nmap-icon.png"
import knaviIcon from "../../icons/knavi-icon.png"
import tmapIcon from "../../icons/tmap-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"
import {
  LOCATION,
  SHUTTLE_BUS_DRIVER_PHONE,
  SHUTTLE_BUS_ESCORT_NAME,
  SHUTTLE_BUS_ESCORT_PHONE,
  SHUTTLE_BUS_LOCATION,
  SHUTTLE_BUS_NMAP_URL,
  SHUTTLE_BUS_POSITION,
  SHUTTLE_BUS_ROUTE,
  SHUTTLE_BUS_VEHICLE,
} from "../../const"

const checkDevice = () => {
  const userAgent = window.navigator.userAgent
  if (userAgent.match(/(iPhone|iPod|iPad)/)) {
    return "ios"
  } else if (userAgent.match(/(Android)/)) {
    return "android"
  } else {
    return "other"
  }
}

export const Location = () => {
  const kakao = useKakao()
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
        </div>
        <Map />
      </LazyDiv>

      <LazyDiv className="card location shuttle-bus-card">
        <div className="shuttle-header">
          <div className="english script">for our guests</div>
          <div className="main-title">하객 버스 안내</div>
          <div className="divider">
            <span></span>
            <span className="heart">♥</span>
            <span></span>
          </div>
          <div className="intro">
            영천에서 오시는 하객분들을 위해
            <br />
            버스를 준비했습니다.
          </div>
        </div>

        <div className="shuttle-section">
          <div className="section-label">운행 경로</div>
          <div className="route-timeline">
            {SHUTTLE_BUS_ROUTE.map((stop, idx) => (
              <div key={idx} className="route-stop">
                <div className="stop-marker">
                  <div className="dot" />
                  {idx < SHUTTLE_BUS_ROUTE.length - 1 && (
                    <div className="line" />
                  )}
                </div>
                <div className="stop-body">
                  <div className="stop-time">{stop.time}</div>
                  <div className="stop-name">{stop.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shuttle-section">
          <div className="section-label">차량 · 인솔 안내</div>
          <div className="shuttle-info">
            <div className="info-row">
              <div className="icon-wrap"><BusIcon /></div>
              <div className="label">차량번호</div>
              <div className="value">{SHUTTLE_BUS_VEHICLE}</div>
            </div>
            <div className="info-divider" />
            <div className="info-row">
              <div className="icon-wrap"><PhoneIcon /></div>
              <div className="label">기사님</div>
              <div className="value">
                <a href={`tel:${SHUTTLE_BUS_DRIVER_PHONE.replace(/-/g, "")}`}>
                  {SHUTTLE_BUS_DRIVER_PHONE}
                </a>
              </div>
            </div>
            <div className="info-divider" />
            <div className="info-row">
              <div className="icon-wrap"><PersonIcon /></div>
              <div className="label">인솔자</div>
              <div className="value">
                {SHUTTLE_BUS_ESCORT_NAME}
                <br />
                <a href={`tel:${SHUTTLE_BUS_ESCORT_PHONE.replace(/-/g, "")}`}>
                  {SHUTTLE_BUS_ESCORT_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <button
            onClick={() => {
              window.open(SHUTTLE_BUS_NMAP_URL, "_blank")
            }}
          >
            <img src={nmapIcon} alt="naver-map-icon" />
            네이버 지도
          </button>
          <button
            onClick={() => {
              switch (checkDevice()) {
                case "ios":
                case "android":
                  if (kakao)
                    kakao.Navi.start({
                      name: SHUTTLE_BUS_LOCATION,
                      x: SHUTTLE_BUS_POSITION[0],
                      y: SHUTTLE_BUS_POSITION[1],
                      coordType: "wgs84",
                    })
                  break
                default:
                  window.open(
                    `https://map.kakao.com/link/search/${encodeURIComponent(
                      SHUTTLE_BUS_LOCATION,
                    )}`,
                    "_blank",
                  )
                  break
              }
            }}
          >
            <img src={knaviIcon} alt="kakao-navi-icon" />
            카카오 내비
          </button>
          <button
            onClick={() => {
              switch (checkDevice()) {
                case "ios":
                case "android": {
                  const params = new URLSearchParams({
                    goalx: SHUTTLE_BUS_POSITION[0].toString(),
                    goaly: SHUTTLE_BUS_POSITION[1].toString(),
                    goalName: SHUTTLE_BUS_LOCATION,
                  })
                  window.open(`tmap://route?${params.toString()}`, "_self")
                  break
                }
                default: {
                  alert("모바일에서 확인하실 수 있습니다.")
                  break
                }
              }
            }}
          >
            <img src={tmapIcon} alt="t-map-icon" />
            티맵
          </button>
        </div>
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
