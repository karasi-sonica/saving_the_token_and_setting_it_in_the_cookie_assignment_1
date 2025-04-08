const { encrypt, decrypt } = require('./script');

const result = encrypt({ user: 'kalvian' });

try {
  const data = decrypt(result);
  console.log('Success:', data);
} catch (error) {
  console.log('Decryption failed:', error.message);
}