import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useEffect } from "react";

import "./Error.css";

export default function Error({ message }) {
	const navigate = useNavigate();
	const { mode } = useTheme();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, [navigate]);

	return <div className={`error ${mode}`}>{message}</div>;
}
