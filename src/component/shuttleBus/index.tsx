import { useEffect, useRef, useState } from "react"
import BusIcon from "../../icons/bus-icon.svg?react"
import ClockIcon from "../../icons/clock-icon.svg?react"
import PersonIcon from "../../icons/person-icon.svg?react"
import nmapIcon from "../../icons/nmap-icon.png"
import knaviIcon from "../../icons/knavi-icon.png"
import tmapIcon from "../../icons/tmap-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"
import {
  SHUTTLE_BUSES,
  SHUTTLE_BUS_LOCATION,
  SHUTTLE_BUS_NMAP_URL,
  SHUTTLE_BUS_POSITION,
} from "../../const"
import "./index.scss"

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

const ContactPopover = ({ phone }: { phone: string }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    let cleanup: (() => void) | null = null
    const timer = window.setTimeout(() => {
      const handler = (e: Event) => {
        if (!ref.current?.contains(e.target as Node)) setOpen(false)
      }
      document.addEventListener("mousedown", handler)
      document.addEventListener("touchstart", handler, { passive: true })
      cleanup = () => {
        document.removeEventListener("mousedown", handler)
        document.removeEventListener("touchstart", handler)
      }
    }, 0)
    return () => {
      window.clearTimeout(timer)
      cleanup?.()
    }
  }, [open])

  return (
    <span className="contact-popover-wrap" ref={ref}>
      <button
        type="button"
        className={"contact-trigger" + (open ? " active" : "")}
        onClick={() => setOpen((prev) => !prev)}
      >
        (연락처)
      </button>
      {open && (
        <div className="contact-popover" role="tooltip">
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            onClick={() => setOpen(false)}
          >
            {phone}
          </a>
          <div className="popover-arrow" />
        </div>
      )}
    </span>
  )
}

export const ShuttleBus = () => {
  const kakao = useKakao()

  return (
    <LazyDiv className="shuttle-section">
      <div className="shuttle-header">
        <div className="tiny-title">
          <span className="deco-line" />
          WEDDING SHUTTLE
          <span className="deco-line" />
        </div>
        <div className="main-title">하객 버스 안내</div>
        <div className="intro">
          영천에서 오시는 하객분들을 위해
          <br />
          버스를 준비했습니다.
        </div>
      </div>

      <div className="buses-container">
        {SHUTTLE_BUSES.map((bus, idx) => (
          <div key={idx} className="bus-card">
            <div className="bus-tag-wrapper">
              <div className="bus-tag">{bus.number}</div>
            </div>

            <div className="bus-content">
              <div className="bus-block">
                <div className="block-header">
                  <ClockIcon />
                  <span>출발 시간</span>
                </div>
                <div className="route-timeline">
                  {bus.stops.map((stop, i) => (
                    <div key={i} className="route-stop">
                      <div className="stop-marker">
                        <div className="dot" />
                        {i < bus.stops.length - 1 && <div className="line" />}
                      </div>
                      <div className="stop-body">
                        <div className="stop-time">{stop.time}</div>
                        <div className="stop-name">{stop.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bus-divider" />

              <div className="bus-details">
                <div className="detail-row">
                  <div className="icon"><BusIcon /></div>
                  <div className="label">차량 정보</div>
                  <div className="value">
                    {bus.vehicle.number}
                    <span className="company"> ({bus.vehicle.company})</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="icon"><PersonIcon /></div>
                  <div className="label">기사님</div>
                  <div className="value">
                    {bus.driver.name} <ContactPopover phone={bus.driver.phone} />
                  </div>
                </div>
                <div className="detail-row">
                  <div className="icon"><PersonIcon /></div>
                  <div className="label">인솔자</div>
                  <div className="value">
                    {bus.escort.name} <ContactPopover phone={bus.escort.phone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shuttle-footer">
        <div className="footer-deco">
          <span className="deco-line" />
          <span className="diamond">✦</span>
          <span className="deco-line" />
        </div>
        <div className="footer-text">
          즐겁고 안전한 이동 되시길 바랍니다.
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
  )
}
