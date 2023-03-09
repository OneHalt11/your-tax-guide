// var video = document.getElementById("myVideo");

document.getElementById('link-to-buy').addEventListener('click', function () {
  gtag('event', 'click', {
    'event_category': 'link',
    'event_label': 'buy_full_course_cta'
  });

  fetch('/api/clicks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      click: 'CTA button'
    })
  })

  modal.style.display = "block";
  console.log("CTA clicked")
});


// video.playbackRate = 1.25;

// video.addEventListener('play', function () {
//   gtag('event', 'play', {
//     'event_category': 'media',
//     'event_label': 'preview_video_play'
//   });
//   console.log("Played")
// });

// video.addEventListener('ended', function () {
//   gtag('event', 'ended', {
//     'event_category': 'media',
//     'event_label': 'preview_video_ended'
//   });
//   console.log("Ended")
// });


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

var emailInput = document.getElementById("email");
var registerButton = document.getElementById("registerBtn");


registerButton.onclick = function () {
  var email = emailInput.value;
  gtag('event', 'click', {
    'event_category': 'submit',
    'event_label': 'email_submission',
    'value': 20
  });

  fetch('/api/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(response => {
      alert("Thank you for registering with the email: " + email);
      modal.style.display = "none";
    })
    .catch(error => {
      alert("Please enter a valid email!")
    });
}


