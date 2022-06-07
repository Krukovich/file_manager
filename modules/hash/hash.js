import fs from 'fs';
import crypto from 'crypto';

//TODO ASK HOW I CAN REWRITE IN ON STREAMS
export const getHashFromFile = (options) => {
  const [path] = options;
  const receiveData = fs.readFileSync(path);
  const hash = crypto.createHash('sha256');
  let hexCode;

  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      hexCode = data.toString('hex');
    }
  });

  hash.write(receiveData);
  hash.end();
  console.log(hexCode);
}