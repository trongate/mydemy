'use strict';

module.exports = function(Lesson) {

    Lesson.afterRemote('findById', function(context, unused, next) {

        if(context.result.video) {

            var cfUtil = require('aws-cloudfront-sign');

            // Sample private key. This would need to be replaced with the private key from
            // your CloudFront key pair.
            var cfPk =
            '-----BEGIN RSA PRIVATE KEY-----\n' +
            'MIIEpAIDCCKCAQEAs/9jz0zqsXZwXJWxIe3cRZUumLRmLmCbY2PqeTkLsMYrwNM6\n' +
            'AqX1ubKXhRHP7c1Ly8oT+BHH64y7i/LFq0qRY0kZZPHK/h+FgN85089onV7liYpK\n' +
            'ZQ5+Pgz1gVrMh7+LuLWvmpyC6qwNm89UwVMoUOphI6059G/vM0BL7j51mCcUIjx6\n' +
            'NKY4ld6IxnVed/7YOo+UnI9hI2vJpT4yesW69PP4Aclz+3Nc6EsIoP/768WoHxW9\n' +
            'OOIJQxBe2Ncigs3jbOByOattpysm6fVoQz1iXJyh8safO3f4aJK/97B/MLHmr69F\n' +
            '86tZd0t5h/PfQWsDmy5UcbJ5y6OIDBoJI7JRyQIDAQABAoIBAQCm14Rho48rfXg7\n' +
            'KXmt1HfHe7dcTmMke+Gsp/Gv+aOPcLEfo+ryh3iUbykpbFBKwW+PbzlBSOIBwUoa\n' +
            'N6bn1k+bMye5vLIHCZrK0J8eaPM0Y8Dp02iP8XYs+AAcrdhFv9O4G5iw/IARG/fl\n' +
            'Q7HxHK6TCh2OX0QIAjU7UU7Qf86qf4SDovK8xvQXulOm2oaDqiNSUKNm5A+XS9G2\n' +
            'mfvTwPg8RhcfX1trgvsfA4dYV2mgsQ4xPiagFi7SpgcZXYGeCZRZwt7Uh2L0aaMa\n' +
            'yL4uxf3MM5Dmz3R41VIK0N3FwJg0yYjUsMv4310oieTwj1uizch+FkBSOddZ0VbZ\n' +
            'QUf1/hCxAoGBAPfg/mbCixQV/n0uaNpiRtPxDtqG4WftOcNOnSag3hkCOgNKLa3u\n' +
            'HPgfOCK3Kh7/0sQzd4lttkHSXXVinrocqbYFCkxaKmaBck8XO80UPlephcUDVUf8\n' +
            'Ioq29BEdloQWvlF5/a31/1DN3YypKglo5MZxGKLFuYSuybieHsMjSjKNAoGBALnl\n' +
            'EDcoc5hPsDEC1O3aHm0TVFgZHLmPFXPTZEnSdYzQGvk7nti/MR7icMjlHdQ5Htyc\n' +
            'mJgBnXUd1e/u4x7znYpcakQiMEgk0EFF9oSz7rWY4kYKQ73yPFzqoUOLDd+nFg1q\n' +
            'JS2RIB0krGcqGEx3ZvOShr4QT9j+JtSUwX7wQOstAoGBAMnZPnCBZO2TR2u6egmz\n' +
            'U4fM2VKb2Tte0tW204OcJZ9pz8HUCsSCjLaD/ZtPWg5qNcAtRN71JyAMZKxtBWH6\n' +
            'azxceFlaZwKX0HSVL848+NM7qUGYCD8ZEyuv9almVaX0O0BvvWKGWkT7jri3HBMT\n' +
            'hpANkokhx4NDLeKXZ+dxej8VAoGAFzd1i/4AWeBx990LrN0V+bd1TD9up/onyrx3\n' +
            'BQVE6x4+kCwTDazrPJk5Ts3WqN+tbA4evLVO7gaY5otmUEJKxbH/D51ZfFkkrVJI\n' +
            'lJBIWuPKNscnaLytL0madG4UgH9EsM418Hf0k881vPiz6jDrabY+H9S3tDkhrmEZ\n' +
            'vXnSEc0CgYBRguRbbHHPaY8jTvleVD9OUo5ZqbzBCp8iubw4wEpG45VjZrxTNdC+\n' +
            'ZDc3AbyiFNmM46nmFTenx9Dsla2jNDzugezrNStq0PGNkVU6EY34dvhHPaUqoWN1\n' +
            'AyX9MJCiipHtJqggU16pFJzmNQpwOxwp11+BC72qrazpatTAJ6q2BQ==\n' +
            '-----END RSA PRIVATE KEY-----'

            // Sample key pair ID. This would need to be replaced by the Access Key ID from
            // your CloudFront key pair.
            var cfKeypairId = 'AZKAJ3NYFXFVFAF2WPA';
            var video = context.result.video;
            var cfURL = 'http://d3t2dtruj9se4w.cloudfront.net/' + video + '.mp4';

            context.result.cfURL = cfUtil.getSignedUrl(cfURL, {
              keypairId: cfKeypairId,
              expireTime: Date.now() + 60000,
              privateKeyString: cfPk
            });

        }

        next();
    });


};
