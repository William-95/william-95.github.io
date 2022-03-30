function sendMail(params) {
  let tempParams = {
    user_email: document.getElementById("user_email").value,
    user_name: document.getElementById("user_name").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_i1mfj9b", "template_0d85kaf", tempParams)
    .then(function(res) {
      console.log("success", res.status);
    });
};
