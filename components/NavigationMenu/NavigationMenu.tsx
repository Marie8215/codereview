import Image from 'next/image';
import { Dropdown } from '../Dropdown/Dropdown';
import IconWithText from '../IconWithText/IconWithText';
import './NavigationMenu.css';

const navigationData = [
  {
    category: "Разработка",
    items: ["Frontend", "Backend", "Mobile", "DevOps", "GameDev"]
  },
  {
    category: "Дизайн",
    items: ["UI/UX", "Графический дизайн", "Веб-дизайн", "Motion"]
  },
  {
    category: "Маркетинг",
    items: ["SMM", "PR", "Контекстная реклама", "SEO"]
  },
  {
    category: "Менеджмент",
    items: ["Project Manager", "Product Manager", "Team Lead", "CTO"]
  }
];

export const NavigationMenu = () => {
  return (
    <Dropdown
      align="center"
      trigger={
      <IconWithText text='Data Science' icon={<Image
        src="/images/menu-icon.svg"
        alt="menu"
        width={18}
        height={18}
        priority/>}/>
      }
    >
      <div className="nav-menu">
        <div className="nav-grid">
          {navigationData.map((section, index) => (
            <div key={index} className="nav-section">
              <h3 className="nav-category">{section.category}</h3>
              <ul className="nav-items">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="nav-link">
                      {item}
                      <span className="nav-count">24</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="nav-footer">
          <a href="#" className="nav-all">
            Все специализации
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
    </Dropdown>
  );
};