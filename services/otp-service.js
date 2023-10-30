require('dotenv')
const crypto = require('crypto');
const hashService = require('./hash-service');

// const smsSid = 'AC704a4ed6afcf3643fcc67214300d69e0';
// const smsAuthToken = '493872347cf84fc97e29d77fb6cb41fa';
const twilio = require('twilio')(process.env.SMS_SID, process.env.SMS_AUTH_TOKEN, {
    lazyLoading: true,
});

console.log(process.env.SMS_FROM_NUMBER, "this is from number" )

class OtpService {
    
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }
    async sendBySms(phone, otp) {
        console.log(phone);
        return await twilio.messages.create({
            to: "+91"+phone,
            from: process.env.SMS_FROM_NUMBER,
            
            body: `Your codershouse OTP is ${otp}`,

        });
        
        
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }
}

module.exports = new OtpService();
