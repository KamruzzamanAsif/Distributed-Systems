const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: 'postObj',
    port: 9000,
    useSSL: false,
    /* home */
    // accessKey: 'tymR6ieVSAHiRtYzuie2',
    // secretKey: '5FrOOFcFxNIObYqTBEHUz6OCBsfzQFcPJmMJJy3i',

    /* iit */
    accessKey: 'sudo_user',
    secretKey: 'sudo_pass',
});

module.exports = minioClient;