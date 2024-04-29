const fs = require('node:fs')
const crypto = require('crypto')

// Read example files.
const files = [
    'payload',
    'key',
    'signature'
]

const {
    payload,
    key,
    signature
} = files.reduce((results, file) => {
    return {
        [file]: fs.readFileSync(`${file}.txt`, { encoding: 'utf-8' }),
        ...results
    }
}, {})

console.log(`Payload:\n\n${payload}\n\n`)
console.log(`Signature:\n\n${signature}\n\n`)
console.log(`Verifying with:\n\n${key}\n\n`)

// Verify. IMPORTANT: Must use RSA-SHA256 algorithm and PSS padding. Signature is base64 encoded in HTTP headers.
const verified = crypto.verify(
    'RSA-SHA256',
    Buffer.from(payload, 'utf-8'),
    {
        key,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING
    },
    Buffer.from(signature, 'base64')
)

console.log(`Verified: ${verified}`)