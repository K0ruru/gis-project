import { useState, useEffect } from "react";
import "./sidenav.scss";

export default function SideNav() {
	const [collapsed, setCollapsed] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	// Detect window resize to handle mobile/desktop switch
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={`sidenav ${collapsed ? "collapsed" : ""}`}>
			{/* Header is only visible on desktop */}
			{!isMobile && (
				<div className="sidenav-header">
					<div className="logo" onClick={toggleCollapse}>
						<i className="fas fa-globe"></i>
					</div>
				</div>
			)}

			{/* Content is inside a collapsible area for mobile */}
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

			{/* Footer is only visible on mobile */}
			{isMobile && (
				<div className="sidenav-footer" onClick={toggleCollapse}>
					<div className="logo">
						<i className="fas fa-globe"></i>
					</div>
				</div>
			)}
		</div>
	);
}
