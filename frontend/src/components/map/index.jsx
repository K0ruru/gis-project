import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./map.scss";

// Custom hook to debounce updates
const useDebouncedEffect = (effect, deps, delay) => {
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay);

		return () => clearTimeout(handler);
	}, [delay, effect]);
};

// eslint-disable-next-line react/prop-types
const LocationMarker = ({ position }) => {
	const map = useMap();

	useDebouncedEffect(
		() => {
			if (position) {
				map.setView(position, 13); // Pan to the user's location
			}
		},
		[position, map],
		300
	); // Add a small debounce

	return position === null ? null : (
		<Marker
			position={position}
			icon={
				new L.Icon({
					iconUrl:
						"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
					shadowUrl:
						"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
					shadowSize: [41, 41],
				})
			}
		>
			<Popup>You are here</Popup>
		</Marker>
	);
};

export default function Map() {
	const [position, setPosition] = useState(null); // Initialize as null

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setPosition([latitude, longitude]);
				},
				(error) => {
					console.error("Error getting location:", error);
				},
				{
					enableHighAccuracy: true,
					timeout: 10000, // Increase timeout to allow more accurate fix
					maximumAge: 0,
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	}, []);

	return (
		<MapContainer
			className="map-container"
			center={position || [51.505, -0.09]} // Default to London if no position
			zoom={13}
			style={{ height: "100vh", width: "100%" }}
		>
			<TileLayer
				url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
			/>
			<LocationMarker position={position} />
		</MapContainer>
	);
}
