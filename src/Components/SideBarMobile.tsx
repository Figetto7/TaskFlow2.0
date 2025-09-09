import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { menuItems } from "../Helpers/Types/ElementsOfTypes";

export default function SideBarMobile({ closeMenu }: { closeMenu: () => void }): JSX.Element {
  const isActive = (path: string) =>  window.location.pathname.toLowerCase() === path.toLowerCase();


  return (
    <div className="fixed inset-10 z-50 flex items-center justify-center mt-20">
      <Sidebar className="fixed text-center overflow-hidden ultraThinBorder w-3/4 h-[70vh] rounded-lg" backgroundColor='var(--sidebar-bg)' >
      <Menu rootStyles={{
      ['& .ps-menuitem-root']: {backgroundColor: 'transparent', position: 'relative',},
      ['& .ps-menuitem-root::before']: {content: '""', position: 'absolute', top: '0', left: '8px', right: '8px', bottom: '0', backgroundColor: 'transparent', borderRadius: '0.5rem', transition: 'background-color 0.3s', zIndex: '-1',},
      ['& .ps-menuitem-root:hover .ps-menu-button']: {backgroundColor: 'transparent', color: 'var(--highlight-text-color)',},
      ['& .ps-menuitem-root.ps-active .ps-menu-button']: {backgroundColor: 'transparent', color: 'var(--sidebar-nav-item-active)', fontWeight: 'bold'}
      }}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            component={<Link to={item.path} />}
            active={isActive(item.path)}
            className="menuItem"
            onClick={closeMenu}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
      <div className='absolute bottom-0 w-full mb-4'>
        <p> Version 2.00</p>
      </div>
    </Sidebar>
    </div>
  )
}