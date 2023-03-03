var video = document.getElementById("myVideo");

document.getElementById('link-to-buy').addEventListener('click', function () {
  gtag('event', 'click', {
    'event_category': 'link',
    'event_label': 'buy_full_course_cta'
  });
  modal.style.display = "block";
  console.log("CTA clicked")
});


video.playbackRate = 1.25;

video.addEventListener('play', function() {
  gtag('event', 'play', {
    'event_category': 'media',
    'event_label': 'preview_video_play'
  });
  console.log("Played")
});

video.addEventListener('ended', function() {
  gtag('event', 'ended', {
    'event_category': 'media',
    'event_label': 'preview_video_ended'
  });
  console.log("Ended")
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Disable the Register button until a valid email is entered
var emailInput = document.getElementById("email");
var registerButton = document.getElementById("registerBtn");

// registerButton.disabled = true;

emailInput.addEventListener(('keyup'), ()=> {
  if(emailInput.checkValidity()){
    registerButton.disabled = false;
  }
  else{
    registerButton.disabled = true;
  }
})

registerButton.onclick = function () {
  var email = emailInput.value;
  gtag('event', 'click', {
    'event_category': 'submit',
    'event_label': 'email_submission',
    'value': 20
  });
  // Do something with the email, such as sending it to a server
  alert("Thank you for registering with the email: " + email);
  modal.style.display = "none";
}


