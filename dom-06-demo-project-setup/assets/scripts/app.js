const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backDrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

const toggleBackDrop = () => {
	backDrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
	addMovieModal.classList.toggle("visible");
	toggleBackDrop();
};

const cancelAddMovie = () => {
	toggleMovieModal();
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageURLValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === "" ||
		imageURLValue.trim() === "" ||
		ratingValue.trim() === "" ||
		+ratingValue < 1 || +ratingValue > 5
	) {
    alert('Please enter valid values (rating between 1 and 5).')
    return;
	}
};

const backDropClickHandler = () => {
	toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", backDropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
