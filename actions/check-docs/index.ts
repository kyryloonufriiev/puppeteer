import {spawn} from 'child_process';
import {setFailed} from '@actions/core';
import {Readable} from 'stream';

async function buildDocuments() {
  return new Promise<void>((resolve, reject) => {
    const child = spawn('npm', ['run', 'docs']);

    child.on('error', error => {
      console.log(error);
      reject(error);
    });

    child.on('exit', code => {
      if (code === 0) {
        resolve();
      } else {
        console.log(code);
        reject();
      }
    });
  });
}

async function getDiff() {
  return new Promise<string>((resolve, reject) => {
    const child = spawn('git', ['diff', '--color']);
    let changes = '';

    child.on('error', error => {
      reject(error);
    });

    child.stdout.on('data', (data: Readable) => {
      changes += data.toString();
    });

    child.on('exit', code => {
      if (code === 0) {
        resolve(changes);
      } else {
        reject();
      }
    });
  });
}

async function main() {
  await buildDocuments();
  const diff = await getDiff();
  if (diff !== '') {
    const diffMessage = `
Please update the documentation by running 'npm run docs'. The following diff was observed:

${diff}`;

    setFailed(diffMessage);
  }
}

main().catch(error => {
  setFailed(error);
});
