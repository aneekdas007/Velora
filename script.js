/* localStorage Keys :
	veloraUser
	veloraPhotoCaptions
	veloraVideoCaptions
	veloraUploadedPhotos
*/

// hardcoded data
var user = {
	userID: "max.xavier33",
	name: "Max Xavier",
	bio: "Just another person enjoying life",
	joinedDate: "30 September, 2024",
	age: 19,
	gender: "Male",
	currentEducation: "IIT Bhubaneswar",
	previousEducation: "Adamas International School",
	relationshipStatus: "Single",
	location: "Bhubaneswar, India",
	contact: "max.xavier@gmail.com"
};
var savedUser = localStorage.getItem("veloraUser");
if(savedUser != null)
	user = JSON.parse(savedUser);

var followers = [
	{
		name: "Rahul Chaurasia",
		image: "images/others1.png"
	},
	{
		name: "Priya Verma",
		image: "images/others4.png"
	},
	{
		name: "Brian Smith",
		image: "images/others2.png"
	},
	{
		name: "Aman Gupta",
		image: "images/others7.png"
	},
	{
		name: "Harry Stark",
		image: "images/others3.png"
	},
	{
		name: "Anushka Roy",
		image: "images/others5.png"
	}
];
var following = [
	{
		name: "Rahul Chaurasia",
		image: "images/others1.png"
	},
	{
		name: "Brian Smith",
		image: "images/others2.png"
	},
	{
		name: "Priya Verma",
		image: "images/others4.png"
	},
	{
		name: "Karan Chatterjee",
		image: "images/others6.png"
	},
	{
		name: "Anushka Roy",
		image: "images/others5.png"
	}
];
var friends = [
	{
		name: "Rahul Chaurasia",
		image: "images/others1.png"
	},
	{
		name: "Brian Smith",
		image: "images/others2.png"
	},
	{
		name: "Priya Verma",
		image: "images/others4.png"
	}
];

var photos = [
	"images/photo1.png",
	"images/photo2.png",
	"images/photo3.png",
	"images/photo4.png"
];
var videos = [
	{
		thumbnail: "images/thumbnail1.png",
		video: "videos/video1.mp4"
	},
	{
		thumbnail: "images/thumbnail2.png",
		video: "videos/video2.mp4"
	}
];
var reposts = [
	"images/repost1.png",
	"images/repost2.png",
	"images/repost3.png"
];

var photoTexts = [
	"This is photo 1.",
	"This is photo 2.",
	"This is photo 3.",
	"This is photo 4."
];
var videoTexts = [
	"This is video 1.",
	"This is video 2."
];
var repostTexts = [
	"This is repost 1.",
	"This is repost 2.",
	"This is repost 3."
];

var photoLikes = [120, 95, 180, 75];
var videoLikes = [210, 145];
var repostLikes = [80, 130, 65];
var photoComments = [15, 11, 24, 6];
var videoComments = [32, 18];
var repostComments = [10, 17, 5];
var photoShares = [8, 4, 16, 3];
var videoShares = [20, 12];
var repostShares = [7, 11, 2];
// end of hardcoded data


var savedPhotoTexts = localStorage.getItem("veloraPhotoCaptions");
var savedVideoTexts = localStorage.getItem("veloraVideoCaptions");
if(savedPhotoTexts != null)
	photoTexts = JSON.parse(savedPhotoTexts);
if(savedVideoTexts != null)
	videoTexts = JSON.parse(savedVideoTexts);

var uploadedPhotos = [];
var savedUploadedPhotos = localStorage.getItem("veloraUploadedPhotos");

if(savedUploadedPhotos != null)
	uploadedPhotos = JSON.parse(savedUploadedPhotos);

for(var i = 0; i < uploadedPhotos.length; i++) {
	photos.push(uploadedPhotos[i].image);
	photoTexts.push(uploadedPhotos[i].caption);
	photoLikes.push(uploadedPhotos[i].likes);
	photoComments.push(uploadedPhotos[i].comments);
	photoShares.push(uploadedPhotos[i].shares);
}

function displayUser() {
	document.getElementById("userID").innerHTML = user.userID;
	document.getElementById("name").innerHTML = user.name;
	document.getElementById("bio").innerHTML = user.bio;
	document.getElementById("aboutUserID").innerHTML = user.userID;
	document.getElementById("aboutName").innerHTML = user.name;
	document.getElementById("aboutAge").innerHTML = user.age;
	document.getElementById("aboutGender").innerHTML = user.gender;
	document.getElementById("currentEducation").innerHTML = user.currentEducation;
	document.getElementById("previousEducation").innerHTML = user.previousEducation;
	document.getElementById("relationshipStatus").innerHTML = user.relationshipStatus;
	document.getElementById("location").innerHTML = user.location;
	document.getElementById("contact").innerHTML = user.contact;
	document.getElementById("aboutBio").innerHTML = user.bio;
	document.getElementById("joinedDate").innerHTML = user.joinedDate;
}

displayUser();

document.getElementById("followers").innerHTML = followers.length;
document.getElementById("following").innerHTML = following.length;
document.getElementById("friends").innerHTML = friends.length;
document.getElementById("posts").innerHTML = photos.length + videos.length;

var photosGallery = document.getElementById("photosGallery");
var videosGallery = document.getElementById("videosGallery");
var repostsGallery = document.getElementById("repostsGallery");
var postBackground = document.getElementById("postBackground");
var currentPostType = null;
var currentPostIndex = null;


function openPost(type, index) {
	postBackground.style.display = "flex";
	currentPostType = type;
	currentPostIndex = index;
	var postImage = document.querySelector(".postImage");
	postImage.innerHTML = "";
	var image, video = null, text, likes, comments, shares;

	if(type == "photo") {
		image = photos[index];
		text = photoTexts[index];
		likes = photoLikes[index];
		comments = photoComments[index];
		shares = photoShares[index];
	}
	else if(type == "video") {
		image = videos[index].thumbnail;
		video = videos[index].video;
		text = videoTexts[index];
		likes = videoLikes[index];
		comments = videoComments[index];
		shares = videoShares[index];
	}
	else if(type == "repost") {
		image = reposts[index];
		text = repostTexts[index];
		likes = repostLikes[index];
		comments = repostComments[index];
		shares = repostShares[index];
	}

	if(video != null) {
		var videoElement = document.createElement("video");
		videoElement.src = video;
		videoElement.controls = true;
		postImage.appendChild(videoElement);
	}
	else {
		var imageElement = document.createElement("img");
		imageElement.src = image;
		postImage.appendChild(imageElement);
	}

	document.getElementById("postText").innerHTML = text;
	document.getElementById("postLikes").innerHTML = likes + " Likes";
	document.getElementById("postComments").innerHTML = comments + " Comments";
	document.getElementById("postShares").innerHTML = shares + " Shares";
	document.getElementById("postEditArea").style.display = "none";

	if(type == "repost")
		document.getElementById("editCaptionBtn").style.display = "none";
	else
		document.getElementById("editCaptionBtn").style.display = "inline-block";
}

function createGallery(type) {
	var gallery, posts, texts, likes, comments, shares, isVideo;

	if(type == "photo") {
		gallery = photosGallery;
		posts = photos;
		texts = photoTexts;
		likes = photoLikes;
		comments = photoComments;
		shares = photoShares;
		isVideo = false;
	}
	else if(type == "video") {
		gallery = videosGallery;
		posts = videos;
		texts = videoTexts;
		likes = videoLikes;
		comments = videoComments;
		shares = videoShares;
		isVideo = true;
	}
	else if(type == "repost") {
		gallery = repostsGallery;
		posts = reposts;
		texts = repostTexts;
		likes = repostLikes;
		comments = repostComments;
		shares = repostShares;
		isVideo = false;
	}
	gallery.innerHTML = "";

	for(var i = 0; i < posts.length; i++) {
		var galleryPost = document.createElement("div");
		galleryPost.className = "galleryPost";
		var image = document.createElement("img");

		if(isVideo)
			image.src = posts[i].thumbnail;
		else
			image.src = posts[i];

		galleryPost.appendChild(image);
		gallery.appendChild(galleryPost);

		galleryPost.onclick = function() {
			var postNumber = Array.from(gallery.children).indexOf(this);
			openPost(type, postNumber);
		};
	}
}

createGallery("photo");
createGallery("video");
createGallery("repost");

var aboutBtn = document.getElementById("aboutBtn");
var photosBtn = document.getElementById("photosBtn");
var videosBtn = document.getElementById("videosBtn");
var repostsBtn = document.getElementById("repostsBtn");
var aboutSection = document.getElementById("aboutSection");
var photosSection = document.getElementById("photosSection");
var videosSection = document.getElementById("videosSection");
var repostsSection = document.getElementById("repostsSection");

function hideSections() {
	aboutSection.style.display = "none";
	photosSection.style.display = "none";
	videosSection.style.display = "none";
	repostsSection.style.display = "none";
}
function removeActive() {
	aboutBtn.classList.remove("active");
	photosBtn.classList.remove("active");
	videosBtn.classList.remove("active");
	repostsBtn.classList.remove("active");
}

hideSections();

aboutBtn.onclick = function() {
	hideSections();
	removeActive();
	aboutSection.style.display = "block";
	aboutBtn.classList.add("active");
};

photosBtn.onclick = function() {
	hideSections();
	removeActive();
	photosSection.style.display = "block";
	photosBtn.classList.add("active");
};

videosBtn.onclick = function() {
	hideSections();
	removeActive();
	videosSection.style.display = "block";
	videosBtn.classList.add("active");
};

repostsBtn.onclick = function() {
	hideSections();
	removeActive();
	repostsSection.style.display = "block";
	repostsBtn.classList.add("active");
};

var editAboutBtn = document.getElementById("editAboutBtn");
var saveAboutBtn = document.getElementById("saveAboutBtn");
var cancelAboutBtn = document.getElementById("cancelAboutBtn");
var aboutEditButtons = document.getElementById("aboutEditButtons");

function showEditFields() {
	document.getElementById("aboutUserID").style.display = "none";
	document.getElementById("aboutName").style.display = "none";
	document.getElementById("aboutAge").style.display = "none";
	document.getElementById("aboutGender").style.display = "none";
	document.getElementById("currentEducation").style.display = "none";
	document.getElementById("previousEducation").style.display = "none";
	document.getElementById("relationshipStatus").style.display = "none";
	document.getElementById("location").style.display = "none";
	document.getElementById("contact").style.display = "none";
	document.getElementById("aboutBio").style.display = "none";

	document.getElementById("editUserID").style.display = "block";
	document.getElementById("editName").style.display = "block";
	document.getElementById("editAge").style.display = "block";
	document.getElementById("editGender").style.display = "block";
	document.getElementById("editCurrentEducation").style.display = "block";
	document.getElementById("editPreviousEducation").style.display = "block";
	document.getElementById("editRelationshipStatus").style.display = "block";
	document.getElementById("editLocation").style.display = "block";
	document.getElementById("editContact").style.display = "block";
	document.getElementById("editBio").style.display = "block";

	// default values
	document.getElementById("editUserID").value = user.userID;
	document.getElementById("editName").value = user.name;
	document.getElementById("editAge").value = user.age;
	document.getElementById("editGender").value = user.gender;
	document.getElementById("editCurrentEducation").value = user.currentEducation;
	document.getElementById("editPreviousEducation").value = user.previousEducation;
	document.getElementById("editRelationshipStatus").value = user.relationshipStatus;
	document.getElementById("editLocation").value = user.location;
	document.getElementById("editContact").value = user.contact;
	document.getElementById("editBio").value = user.bio;

	aboutEditButtons.style.display = "flex";
	editAboutBtn.style.display = "none";
}

function hideEditFields() {
	document.getElementById("aboutUserID").style.display = "inline";
	document.getElementById("aboutName").style.display = "inline";
	document.getElementById("aboutAge").style.display = "inline";
	document.getElementById("aboutGender").style.display = "inline";
	document.getElementById("currentEducation").style.display = "inline";
	document.getElementById("previousEducation").style.display = "inline";
	document.getElementById("relationshipStatus").style.display = "inline";
	document.getElementById("location").style.display = "inline";
	document.getElementById("contact").style.display = "inline";
	document.getElementById("aboutBio").style.display = "inline";

	document.getElementById("editUserID").style.display = "none";
	document.getElementById("editName").style.display = "none";
	document.getElementById("editAge").style.display = "none";
	document.getElementById("editGender").style.display = "none";
	document.getElementById("editCurrentEducation").style.display = "none";
	document.getElementById("editPreviousEducation").style.display = "none";
	document.getElementById("editRelationshipStatus").style.display = "none";
	document.getElementById("editLocation").style.display = "none";
	document.getElementById("editContact").style.display = "none";
	document.getElementById("editBio").style.display = "none";

	aboutEditButtons.style.display = "none";
	editAboutBtn.style.display = "inline-block";
}

editAboutBtn.onclick = function() {
	showEditFields();
};

cancelAboutBtn.onclick = function() {
	hideEditFields();
};

saveAboutBtn.onclick = function() {
	user.userID = document.getElementById("editUserID").value;
	user.name = document.getElementById("editName").value;
	user.age = document.getElementById("editAge").value;
	user.gender = document.getElementById("editGender").value;
	user.currentEducation = document.getElementById("editCurrentEducation").value;
	user.previousEducation = document.getElementById("editPreviousEducation").value;
	user.relationshipStatus = document.getElementById("editRelationshipStatus").value;
	user.location = document.getElementById("editLocation").value;
	user.contact = document.getElementById("editContact").value;
	user.bio = document.getElementById("editBio").value;

	localStorage.setItem("veloraUser", JSON.stringify(user));
	displayUser();
	hideEditFields();
};

var editCaptionBtn = document.getElementById("editCaptionBtn");
var postEditArea = document.getElementById("postEditArea");
var editCaption = document.getElementById("editCaption");
var saveCaptionBtn = document.getElementById("saveCaptionBtn");
var cancelCaptionBtn = document.getElementById("cancelCaptionBtn");

editCaptionBtn.onclick = function() {
	editCaption.value = document.getElementById("postText").innerHTML;
	postEditArea.style.display = "block";
	editCaptionBtn.style.display = "none";
};

cancelCaptionBtn.onclick = function() {
	postEditArea.style.display = "none";

	if(currentPostType == "repost")
		editCaptionBtn.style.display = "none";
	else
		editCaptionBtn.style.display = "inline-block";
};


saveCaptionBtn.onclick = function() {
	var newCaption = editCaption.value;

	if(currentPostType == "photo") {
		photoTexts[currentPostIndex] = newCaption;

		if(currentPostIndex >= 4) { // if newly uploaded
			var uploadedIndex = currentPostIndex - 4;
			if(uploadedPhotos[uploadedIndex] != null)
				uploadedPhotos[uploadedIndex].caption = newCaption;
		}

		localStorage.setItem("veloraPhotoCaptions", JSON.stringify(photoTexts));
		localStorage.setItem("veloraUploadedPhotos", JSON.stringify(uploadedPhotos));
	}
	else if(currentPostType == "video") {
		videoTexts[currentPostIndex] = newCaption;
		localStorage.setItem("veloraVideoCaptions", JSON.stringify(videoTexts));
	}

	document.getElementById("postText").innerHTML = newCaption;
	postEditArea.style.display = "none";
	editCaptionBtn.style.display = "inline-block";

	// rebuild galleries
	createGallery("photo");
	createGallery("video");
	createGallery("repost");
};

var uploadPhotoBtn = document.getElementById("uploadPhotoBtn");
var photoInput = document.getElementById("photoInput");

uploadPhotoBtn.onclick = function() {
	photoInput.click();
};

photoInput.onchange = function() {
	var file = photoInput.files[0];
	if(file == null)
		return;

	var reader = new FileReader();
	reader.onload = function(event) {
		var imageData = event.target.result;
		var caption = prompt("Enter a caption for this photo:");
		if(caption == null)
			caption = "";

		var newPhoto = {
			image: imageData,
			caption: caption,
			likes: 0,
			comments: 0,
			shares: 0
		};


		uploadedPhotos.push(newPhoto);
		localStorage.setItem("veloraUploadedPhotos", JSON.stringify(uploadedPhotos));
		photos.push(newPhoto.image);
		photoTexts.push(newPhoto.caption);
		photoLikes.push(0);
		photoComments.push(0);
		photoShares.push(0);

		localStorage.setItem("veloraPhotoCaptions", JSON.stringify(photoTexts));
		document.getElementById("posts").innerHTML = photos.length + videos.length;
		createGallery("photo");
		photoInput.value = "";
	};
	reader.readAsDataURL(file);
};

var followersDetail = document.getElementById("followersDetail");
var followingDetail = document.getElementById("followingDetail");
var friendsDetail = document.getElementById("friendsDetail");
var popupBackground = document.getElementById("popupBackground");
var popupTitle = document.getElementById("popupTitle");
var closePopup = document.getElementById("closePopup");
var peopleList = document.getElementById("peopleList");

function showPeople(people) {
	peopleList.innerHTML = "";
	for(var i = 0; i < people.length; i++) {
		var person = document.createElement("div");
		person.className = "person";
		var personPic = document.createElement("div");
		personPic.className = "personPic";
		var image = document.createElement("img");
		image.src =	people[i].image;
		var personName = document.createElement("div");
		personName.className = "personName";
		personName.innerHTML = people[i].name;

		personPic.appendChild(image);
		person.appendChild(personPic);
		person.appendChild(personName);
		peopleList.appendChild(person);
	}
}

followersDetail.onclick = function() {
	popupTitle.innerHTML = "Followers";
	showPeople(followers);
	popupBackground.style.display = "flex";
};

followingDetail.onclick = function() {
	popupTitle.innerHTML = "Following";
	showPeople(following);
	popupBackground.style.display = "flex";
};

friendsDetail.onclick = function() {
	popupTitle.innerHTML = "Friends";
	showPeople(friends);
	popupBackground.style.display = "flex";
};

closePopup.onclick = function() {
	popupBackground.style.display = "none";
};

document.getElementById("closePost").onclick = function() {
	postBackground.style.display = "none";
};

popupBackground.onclick = function(event) {
	if(event.target == popupBackground)
		popupBackground.style.display = "none";
};

postBackground.onclick = function(event) {
	if(event.target == postBackground)
		postBackground.style.display = "none";
};