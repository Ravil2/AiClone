import { FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { SiHomebridge } from 'react-icons/si'
import { TbNotebook } from 'react-icons/tb'

const iconsSize = 24

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <div className={`sideBar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <div className="upperSide">
          <div className="upperSideTop">
            <div className="logoBlock">
              <img
                src="/neyroAilogo.webp"
                alt="Logo"
                className="logo"
                width={collapsed ? 40 : 50}
              />
              {!collapsed && <span className="brand">NeyroAi</span>}
            </div>
            {!collapsed && (
              <button className="new-chat-btn">
                <FiPlus fontSize={20} />
                Новый чат
              </button>
            )}
          </div>

          {!collapsed && (
            <div className="upperSideBottom">
              <div className="recent-chats">
                <h3>Недавние чаты</h3>
                <button className="chat-item">
                  <HiOutlineChatAlt2 fontSize={iconsSize} />
                  <span>Что такое программирование?</span>
                </button>
                <button className="chat-item">
                  <HiOutlineChatAlt2 fontSize={iconsSize} />
                  <span>Что такое API?</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="lowerSide">
          {!collapsed && (
            <div className="menu-items">
              <button className="menu-item">
                <SiHomebridge fontSize={iconsSize} />
                <span>Главная</span>
              </button>
              <button className="menu-item">
                <TbNotebook fontSize={iconsSize} />
                <span>Сохранить</span>
              </button>
              <button className="menu-item premium">
                <IoIosRocket fontSize={iconsSize} />
                <span>Премиум</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <button className="sidebar-toggle" onClick={onToggle}>
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>
    </div>
  )
}
