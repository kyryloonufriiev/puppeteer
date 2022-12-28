import {spawn} from 'child_process';
import {setOutput, setFailed} from '@actions/core';
import {Readable} from 'stream';

enum Packages {
  Core = 'core',
  Puppeteer = 'puppeteer',
  Schematics = 'ng-schematics',
  Website = 'website',
  Docker = 'docker',
}

const packagesFolders: Record<Packages, string[]> = {
  [Packages.Core]: ['packages/puppeteer-core/'],
  [Packages.Puppeteer]: [
    'packages/puppeteer/',
    'test/',
    'tools/mochaRunner/',
    '.mocharc.cjs',
    'versions.js',
  ],
  [Packages.Schematics]: ['packages/ng-schematics/'],
  [Packages.Website]: ['website/', 'docs/'],
  [Packages.Docker]: ['docker/'],
};

const packageDependsOn: Record<Packages, Packages[]> = {
  [Packages.Core]: [],
  [Packages.Puppeteer]: [Packages.Core],
  [Packages.Schematics]: [],
  [Packages.Website]: [],
  [Packages.Docker]: [Packages.Core, Packages.Puppeteer],
};

function getFilesDiff(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['diff', '--name-only', 'HEAD~1']);
    const files: string[] = [];

    child.on('error', error => {
      reject(error);
    });

    child.stdout.on('data', (data: Readable) => {
      files.push(
        ...data
          .toString()
          .trim()
          .split('\n')
          .filter(fileName => {
            return fileName !== '';
          })
      );
    });

    child.on('exit', code => {
      if (code === 0) {
        resolve(files);
      } else {
        reject();
      }
    });
  });
}

function getChangedPackages(files: string[]): Packages[] {
  const changesSet = new Set<Packages>();
  const dependencySet = new Set<Packages>();

  for (const file of files) {
    for (const packageName in packagesFolders) {
      if (!changesSet.has(packageName as Packages)) {
        for (const path of packagesFolders[packageName as Packages]) {
          if (file.startsWith(path)) {
            changesSet.add(packageName as Packages);
            break;
          }
        }
      }
    }
  }

  for (const packageName in packageDependsOn) {
    for (const dependency of packageDependsOn[packageName as Packages]) {
      if (changesSet.has(dependency)) {
        dependencySet.add(packageName as Packages);
      }
    }
  }

  return [...changesSet, ...dependencySet];
}

async function main() {
  const files = await getFilesDiff();
  const packages = getChangedPackages(files);

  // Use a array rather then individual export as we can't easily remap
  // from step output to job output
  setOutput('packages', packages);
}

main().catch(error => {
  setFailed(error);
});
