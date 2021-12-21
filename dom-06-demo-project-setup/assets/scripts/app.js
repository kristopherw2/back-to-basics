const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backDrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const toggleBackDrop = () => {
	backDrop.classList.toggle("visible");
};

const updateUI = () => {
	if (movies.length === 0) {
    entryTextSection.style.display = 'block'
	} else {
		entryTextSection.style.display = "none";
	}
};

const closeMovieDeletionModal = () => {
	toggleBackDrop();
	deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
	let movieIndex = 0;
	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	const listRoot = document.getElementById("movie-list");
	listRoot.children[movieIndex].remove();
	closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add("visible");
	toggleBackDrop();
	const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
	let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

	confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

	cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

	cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
	confirmDeletionButton.addEventListener(
		"click",
		deleteMovieHandler.bind(null, movieId)
	);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement("li");
	newMovieElement.className = "movie-element";
	newMovieElement.innerHTML = `
      <div class="movie-element__image"> 
      <img src="${imageUrl}" alt="${title}">
      </div>

      <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
      </div>
  `;
	newMovieElement.addEventListener(
		"click",
		startDeleteMovieHandler.bind(null, id)
	);
	const listRoot = document.getElementById("movie-list");
	listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
	addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
	addMovieModal.classList.add("visible");
	toggleBackDrop();
};

const clearMovieInputs = () => {
	for (const usrInput of userInputs) {
		usrInput.value = "";
	}
};

const cancelAddMovieHandler = () => {
	closeMovieModal();
	toggleBackDrop();
	clearMovieInputs();
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageURLValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === "" ||
		imageURLValue.trim() === "" ||
		ratingValue.trim() === "" ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert("Please enter valid values (rating between 1 and 5).");
		return;
	}

	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		image: imageURLValue,
		rating: ratingValue,
	};

	movies.push(newMovie);

	console.log(movies);
	closeMovieModal();
	toggleBackDrop();
	clearMovieInputs();
	renderNewMovieElement(
		newMovie.id,
		newMovie.title,
		newMovie.image,
		newMovie.rating
	);
	updateUI();
};

const backDropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
	clearMovieInputs();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
