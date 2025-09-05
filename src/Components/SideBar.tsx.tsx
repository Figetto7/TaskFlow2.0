import { Link, useLocation } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

export default function SideBar() {
  const location = useLocation();
  
  return (
    <Sidebar>
      <div >
        <div>
          
        </div>
        <div >
        <h1>TaskFlow</h1>
        <p>Gestione Task</p>
        </div>
      </div>
      <Menu>
        <MenuItem active={location.pathname === '/Home'} component={<Link to="/Home" />}> Home </MenuItem>
        <MenuItem active={location.pathname === '/AddTask'} component={<Link to="/AddTask" />}> Aggiungi Task </MenuItem>
        <MenuItem active={location.pathname === '/ModifyTask'} component={<Link to="/ModifyTask" />}> Modifica Task </MenuItem>
        <MenuItem active={location.pathname === '/Analytics'} component={<Link to="/Analytics" />}> Analytics </MenuItem>
        <MenuItem active={location.pathname === '/About'} component={<Link to="/About" />}> About </MenuItem>
      </Menu>
      <div>
        <p> V 1.00</p>
      </div>
    </Sidebar>
  );
}