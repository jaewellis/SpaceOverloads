// CIS131-W01-FA18
// Author: Chris Gillispie
// Date:   2018-09-21 

// Create the thumbnail gallery for the for loop
// EDIT IMAGES TO BE USED HERE

var thumbnailGalleryArr = ['falcon9.jpg','falcon_heavy.jpg','bfr.png'];

// Add a bunch of images by iterating over the image array
// see page 173 of the textbook

function createGallery(imgArr) {
	for (var i = 0; i < imgArr.length; i++) {
	
	// Create the thumbnail <img> elements
	// see https://stackoverflow.com/questions/226847/what-is-the-best-javascript-code-to-create-an-img-element
	var newThumbnailImg = document.createElement("img");
	
	// Use the array values
	newThumbnailImg.src = imgArr[i]; 
	newThumbnailImg.alt = 'gallery_image';
	newThumbnailImg.style.width = '100px';
	
	// Set the onclick event
	// see https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation
	// see https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
	newThumbnailImg.setAttribute("onclick",`changeImage('${imgArr[i]}')`);
	
	// Write it to the HTML
	document.getElementById('thumbnailGallery').appendChild(newThumbnailImg);
	}
}

// Change big image
// Initiated by onclick event in each thumbnail

function changeImage(imageSource) {
	document.getElementById('bigImage').src=imageSource;
}