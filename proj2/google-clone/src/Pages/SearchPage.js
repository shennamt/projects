import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
	// when grabbing values from the data layer, it gives us a state and dispatch
	// destructure the state to get the search term
	const [{ term }, dispatch] = useStateValue();

	// Live API Call
	const { data } = useGoogleSearch(term);

	// Mock API Result
	// const data = Response;

	// when i hit enter, it'll redirect us to the searchpage, push tesla search term into data layeR
	// then we pull it using useStateValue, the term will pass through the hook useGoogleSearch
	// then the API returns the result as an object
	// console.log(data);

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				{/* checking if the value pulls through */}
				{/* <h1>{term}</h1> */}

				<Link to="/">
					<img
						className="searchPage__logo"
						src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
						alt=""
					/>
				</Link>

				<div className="searchPage__headerBody">
					<Search hideButtons />
					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>

							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>

							<div className="searchPage__option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>

							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="/shopping">Shopping</Link>
							</div>

							<div className="searchPage__option">
								<RoomIcon />
								<Link to="/maps">Maps</Link>
							</div>

							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="/more">More</Link>
							</div>
						</div>

						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>

							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="searchPage__results">
				{/* app will only render search results if you provide a search term */}
				{true && (
					<div className="searchPage__results">
						<p className="searchPage__resultCount">
							About{" "}
							{data?.searchInformation.formattedTotalResults}{" "}
							results (
							{data?.searchInformation.formattedSearchTime}{" "}
							seconds) for {term}.
						</p>

						{data?.items.map((item) => (
							<div className="searchPage__result">
								<a
									className="searchPage__resultLink"
									href={item.link}
								>
									{item.pagemap?.cse_image?.length > 0 &&
										item.pagemap?.cse_image[0]?.src && (
											<img
												className="searchPage__resultImage"
												src={
													item.pagemap?.cse_image[0]
														?.src
												}
											/>
										)}
									{item.displayLink} ▽
								</a>
								<a
									className="searchPage__resultTitle"
									href={item.link}
								>
									<h2>{item.title}</h2>
								</a>
								<p className="searchPage__resultSnippet">
									{item.snippet}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchPage;
