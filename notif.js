document.getElementById("generateOTP").addEventListener("click", function() {
    var otp = generateOTP();
    alert("Your OTP is: " + otp);
  });
  
  function generateOTP() {
    var digits = '0123456789';
    var OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  