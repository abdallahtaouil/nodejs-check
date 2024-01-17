const nodemailer = require ('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abdallah.taouil@gmail.com',
      pass: 'vgvr cjqr yuzv ftso'
    }
  });
  
  var mailOptions = {
    from: 'abdallah.taouil@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: 
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });