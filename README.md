# Schlage Home API - Webhook Signatures

Webhooks sent by the Schlage Home API are signed to provide partners a way to verify the authenticity of the requests beyond inspecting the webhook origin.

The request payload is signed using an `RSA_2048` key with the `RSASSA_PSS_SHA_256` signing algorithm.

## Notes

- The signature is generated using the JSON payload encoded as UTF-8. Ensure that you use the request payload before parsing when verifying the signature.
- The signature is in the request header `WebHook-Signature` as a base64 encoded string.


## Example
`index.js` contains a NodeJS example of verifying a webhook received from the Schlage Home API.

In your implementation, the payload and signature will be properties on the received webhook request, but for this example, files are used. `payload.txt` contains the UTF-8 encoded request payload, `key.txt` contains the Schlage Home API's webhook signature public key, and `signature.txt` contains the base64 encoded signature.

The example uses native NodeJS libraries for verification. Any language or package capable of verifying signatures created with the `RSASSA_PSS_SHA_256` algorithm may be used.

The `npm run verify` command will run the example. 

## Schlage Home API Public Key

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqJNrOq6SzG46f5injzHc
yK0sHYLsXjD7YeIGDIDtqnwvgkYFOCRRDdPenb2fOb9rUJKcVczRXMy7o2PFPNGD
QEDMFRe62ahGVnV7i4x5gOn9lFhX5YPJGVAhoUmQmqYalVJoJht7fe1PxhnwOg+T
BU/kg//6X9vKokjokgInSEhoV2VRZ6s9Qs3Lfa3vs7Bqobb1oK60Kml5mMi+EzEL
tbXxyMtgjqaaHvd1xKlA7X8gI6DQtZ5ON7VXp/0/CA8MzNaBoCfDF1ksIfmCBETD
QGbCWAdjRXYlk06qtT4bVjO7ubcDQzSBl49s7TF1vwTXeoXTqpeC6DfLLMW0SuCc
mQIDAQAB
-----END PUBLIC KEY-----
```