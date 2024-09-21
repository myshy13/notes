function add(name) {
    document.getElementById("SideBar").innerHTML +=
        `<div className="SideBarItem">
            ${name}
			<div className="CloseIcon"></div>
		</div>`;
}

export { add };