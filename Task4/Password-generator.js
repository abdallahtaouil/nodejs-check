const generate_password=require('generate-password')
function randompassword() {
    const password=generate_password.generate({
        length:15,
        uppercase:true,
        lowercase:true,
        numbers:true,
        symbols:true

    });
    console.log(password)
    
}
randompassword();