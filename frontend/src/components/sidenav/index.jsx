import { useState, useEffect } from "react";
import "./sidenav.scss";

export default function SideNav() {
	const [collapsed, setCollapsed] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showAddPlaceModal, setShowAddPlaceModal] = useState(false); // New state for "Add Place" modal

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	const toggleLoginModal = () => {
		setShowLoginModal(!showLoginModal);
	};

	const toggleAddPlaceModal = () => {
		setShowAddPlaceModal(!showAddPlaceModal); // Toggle "Add Place" modal
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<div className={`sidenav ${collapsed ? "collapsed" : ""}`}>
				{!isMobile && (
					<div className="sidenav-header">
						<div className="logo" onClick={toggleCollapse}>
							<i className="fas fa-globe"></i>
						</div>
						<div className="login-icon" onClick={toggleLoginModal}>
							<i className="fa-solid fa-right-to-bracket"></i>
						</div>
						<div className="add-place" onClick={toggleAddPlaceModal}>
							{" "}
							{/* Trigger Add Place modal */}
							<i className="fa-solid fa-upload"></i>
						</div>
					</div>
				)}

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
				</div>

				{isMobile && (
					<div className="sidenav-footer" onClick={toggleCollapse}>
						<div className="logo">
							<i className="fas fa-globe"></i>
						</div>
					</div>
				)}
			</div>

			{/* Login Modal */}
			{showLoginModal && (
				<div className="modal">
					<div className="modal-backdrop" onClick={toggleLoginModal}></div>
					<div className="modal-content">
						<h2>Login</h2>
						<form>
							<div className="form-group">
								<label>Email:</label>
								<input type="email" placeholder="Enter your email" />
							</div>
							<div className="form-group">
								<label>Password:</label>
								<input type="password" placeholder="Enter your password" />
							</div>
							<button type="submit">Login</button>
						</form>
					</div>
				</div>
			)}

			{/* Add Place Modal */}
			{showAddPlaceModal && (
				<div className="modal">
					<div className="modal-backdrop" onClick={toggleAddPlaceModal}></div>
					<div className="modal-content">
						<h2>Add a New Place</h2>
						<form>
							<div className="form-group">
								<label>Longitude:</label>
								<input type="text" placeholder="Enter Longitude" />
							</div>
							<div className="form-group">
								<label>Latitude:</label>
								<input type="text" placeholder="Enter Latitude" />
							</div>
							<div className="form-group">
								<label>Name:</label>
								<input type="text" placeholder="Enter Place Name" />
							</div>
							<div className="form-group">
								<label>Description:</label>
								<textarea placeholder="Enter Description"></textarea>
							</div>
							<button type="submit">Add Place</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
