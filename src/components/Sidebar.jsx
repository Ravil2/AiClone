import { FiPlus } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { SiHomebridge } from 'react-icons/si'
import { TbNotebook } from 'react-icons/tb'

let iconsSize = 30
export default function Sidebar() {
  return (
    <div className="sideBar glass">
      <div className="upperSide">
        <div className="upperSideTop">
          <div className="logoBlock">
            <img
              src="/neyroAilogo.webp"
              alt="Logo"
              className="logo"
              width={60}
            />
            <span className="brand">NeyroAi</span>
          </div>
          <button className="midBtn">
            <FiPlus fontSize={iconsSize} />
            Новый чат
          </button>
        </div>

        <div className="upperSideBottom">
          <button className="query">
            <HiOutlineChatAlt2 fontSize={iconsSize} />
            Что такое программирование ?
          </button>
          <button className="query">
            <HiOutlineChatAlt2 fontSize={iconsSize} />
            Что такое API ?
          </button>
        </div>
      </div>

      <div className="lowerSide">
        <div className="listItems">
          <SiHomebridge fontSize={iconsSize} />
          Главная
        </div>
        <div className="listItems">
          <TbNotebook fontSize={iconsSize} />
          Сохранить
        </div>
        <div className="listItems">
          <IoIosRocket fontSize={iconsSize} />
          Обновить план
        </div>
      </div>
    </div>
  )
}
