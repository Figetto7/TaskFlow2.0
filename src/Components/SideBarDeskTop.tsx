import { Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { menuItems } from '../Helpers/Types/ElementsOfTypes';
import { useLocation } from 'react-router-dom';


export default function SideBarDeskTop() {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname.toLowerCase() === path.toLowerCase();
  };
  
  return (
    <Sidebar className="ultraThinBorder h-[80vh] ml-[4.17%] mt-5 !fixed text-center overflow-hidden z-50" backgroundColor='var(--sidebar-bg)'>
      <Menu rootStyles={{
      ['& .ps-menuitem-root']: {backgroundColor: 'transparent', position: 'relative',},
      ['& .ps-menuitem-root::before']: {content: '""', position: 'absolute', top: '0', left: '8px', right: '8px', bottom: '0', backgroundColor: 'transparent', borderRadius: '0.5rem', transition: 'background-color 0.3s', zIndex: '-1',},
      ['& .ps-menuitem-root:hover::before']: {backgroundColor: 'var(--sidebar-nav-item-hover-bg)',},
      ['& .ps-menuitem-root:hover .ps-menu-button']: {backgroundColor: 'transparent', color: 'var(--highlight-text-color)',},
      ['& .ps-menuitem-root.ps-active .ps-menu-button']: {backgroundColor: 'transparent', color: 'var(--sidebar-nav-item-active)', fontWeight: 'bold'}
      }}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            component={<Link to={item.path} />}
            active={isActive(item.path)}
            className="menuItem"
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
      <div className='absolute bottom-0 w-full mb-4 z-10'>
        <p> Version 2.00</p>
      </div>
    </Sidebar>
  );
}