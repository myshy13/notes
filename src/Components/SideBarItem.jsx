function SideBarItem({ name }) {
	return (
		<div className="SideBarItem">
			{name}
			<div className="CloseIcon"></div>
		</div>
	);
}

export { SideBarItem };
