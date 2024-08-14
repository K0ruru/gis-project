import { useState } from "react";
import "./sidenav.scss";

export default function SideNav() {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className={`sidenav ${collapsed ? "collapsed" : ""}`}>
			<div className="sidenav-header">
				<div className="logo" onClick={toggleCollapse}>
					<i className="fas fa-globe"></i>
				</div>
			</div>
			<div className="sidenav-content">
				<input type="text" placeholder="Search a place..." />
				<h2>Places near you</h2>
				<div className="place-card">
					<div className="place-info">
						<h3>Masakan Padang Bunda Yati</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
						<span className="distance">2.2 KM</span>
					</div>
					<div className="place-image">{/* Placeholder for the image */}</div>
				</div>
				<div className="place-card">
					<div className="place-info">
						<h3>Masakan Padang Bunda Yati</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
						<span className="distance">2.2 KM</span>
					</div>
					<div className="place-image">{/* Placeholder for the image */}</div>
				</div>
				<div className="place-card">
					<div className="place-info">
						<h3>Masakan Padang Bunda Yati</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
						<span className="distance">2.2 KM</span>
					</div>
					<div className="place-image">{/* Placeholder for the image */}</div>
				</div>
				<div className="place-card">
					<div className="place-info">
						<h3>Masakan Padang Bunda Yati</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
						<span className="distance">2.2 KM</span>
					</div>
					<div className="place-image">{/* Placeholder for the image */}</div>
				</div>
			</div>
		</div>
	);
}
