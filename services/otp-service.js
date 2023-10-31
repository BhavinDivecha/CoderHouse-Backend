require('dotenv')
const crypto = require('crypto');
const hashService = require('./hash-service');

// const smsSid = 'AC704a4ed6afcf3643fcc67214300d69e0';
// const smsAuthToken = '493872347cf84fc97e29d77fb6cb41fa';
const twilio = require('twilio')('AC704a4ed6afcf3643fcc67214300d69e0', '493872347cf84fc97e29d77fb6cb41fa', {
    lazyLoading: true,
});

console.log('+13045841640', "this is from number" )

class OtpService {
    
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }
    async sendBySms(phone, otp) {
        console.log(phone);
        return await twilio.messages.create({
            to: "+91"+phone,
            from: '+13045841640',
            
            body: `Your codershouse OTP is ${otp}`,

        });
        
        
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }
}

module.exports = new OtpService();
