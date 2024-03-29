let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function() {

    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax= document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value
    
    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)
})

function BookNow(userName, userEmail, userPax,userRemarks){
    let url = 'https://api.sheety.co/1cb45e112c672a280c3e7eb398f59d86/bookingApp/bookings';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks,
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    })
    
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
          alert(json.booking.name + " added in the list!")
      
    });
}
