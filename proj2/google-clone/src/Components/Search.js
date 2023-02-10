import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
	// gives us the state and dispatch
	const [{}, dispatch] = useStateValue();

	// how we write variables inside react, using useState hooks
	const [input, setInput] = useState("");

	// browser's history
	const navigate = useNavigate();

	const search = (e) => {
		// prevent refreshing
		e.preventDefault();
		// console.log("Search button clicked >", input);

		// dispatch the action
		// im using the the object like in reducer.js to avoid possible string mistakes
		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		});

		// navigates to search page
		navigate("/search");
	};

	return (
		// the div is now a form so that the search button accepts the enter key
		<form className="search">
			<div className="search__input">
				<SearchIcon className="search__inputIcon" />
				{/* whatever is keyed into the search bar is captured by input but it's values is stored using setInput  */}
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<MicIcon />
				<CameraAltIcon />
			</div>

			{/* using a ternary operator to hide the extra buttons while passing hideButtons as a prop */}
			{!hideButtons ? (
				<div className="search__buttons">
					<Button variant="outlined" type="submit" onClick={search}>
						Google Search
					</Button>
					<a
						className="search_buttonLucky"
						href="https://www.google.com/doodles"
					>
						<Button variant="outlined">I'm Feeling Lucky</Button>
					</a>
				</div>
			) : (
				<div className="search__buttons">
					<Button
						variant="outlined"
						type="submit"
						className="search__buttonsHidden"
						onClick={search}
					>
						Google Search
					</Button>
					<Button
						variant="outlined"
						className="search__buttonsHidden"
					>
						I'm Feeling Lucky
					</Button>
				</div>
			)}
		</form>
	);
};

export default Search;
