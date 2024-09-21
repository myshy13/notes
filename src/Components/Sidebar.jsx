import { SideBarItem } from "./SideBarItem";

function Sidebar() {
	return (
		<>
			<div className="SideBar" id="SideBar">
				<button className="btn btn-icon" id="add-button">
					+
				</button>
				<SideBarItem name="item" />
			</div>
		</>
	);
}

export { Sidebar };
