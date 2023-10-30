const crypto = require('crypto');

class HashService {
    hashOtp(data) {
        return crypto
            .createHmac('sha256', 'abhishek')
            .update(data)
            .digest('hex');
    }
}

module.exports = new HashService();
