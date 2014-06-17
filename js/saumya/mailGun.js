//MailGun API
var mailgun = {
    sendMail: function(){
        console.log('MailGun : SendMail');
        var userAuth = "api:key-8mb-1y09c1wxufa1bf-yg7f180bfhj84";
        //var userAuth = "api:pubkey-9wvpab0v7xo7e10xx7cuz3t6kogsjua8";

        //sample
        //https://api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0@api.mailgun.net/v2/samples.mailgun.org/log
        
        //var mailgunURI = 'https://api.mailgun.net/v2/saumya.mailgun.org/messages';
        var mailgunURI = 'https://'+userAuth+'@api.mailgun.net/v2/saumya.mailgun.org/messages';

        var mailData = {
            "from":"Excited User <me@samples.mailgun.org>",
            "to":"2saumyaray@gmail.com",
            "subject":"Hello Gun",
            "text":"Hello World! This is from MailGun"
        };

        $.ajax({
            url:mailgunURI,
            headers : {  },
            data: mailData,
            dataType: "json",        
            type: 'POST',
            success: function(data, status){
                console.log('SUCCESS : Sending Mail');
            },
            error: function(error) {
                console.log('ERROR : Sending Mail');
                console.log(error);
            }
        });
    },
    destroy: function(){
        console.log('MailGun : Destroy');
    }
};