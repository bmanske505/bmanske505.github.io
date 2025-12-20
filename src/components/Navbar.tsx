import React from "react";
import { ActiveTab } from "../types";

interface NavbarProps {
	activeTab: ActiveTab;
	setActiveTab: (tab: ActiveTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
	return (
		<nav className="sticky top-0 z-50 bg-black/25 backdrop-blur border-y-4 border-black py-6">
			<div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
				<div className="flex gap-40 mt-0">
					<button
						onClick={() => setActiveTab("home")}
						className={`text-interactable uppercase ${activeTab === "home" ? "active" : ""}`}>
						About
					</button>

					<button
						onClick={() => setActiveTab("projects")}
						className={`text-interactable uppercase ${activeTab === "projects" ? "active" : ""}`}>
						Projects
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
