const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1);
    });

function getInstallerConfig() {
    console.log('Creating Windows executable.');
    const rootPath = path.join('./');
    const outPath = path.join(rootPath, 'release-builds');

    return Promise.resolve({
        appDirectory: path.join(outPath, 'issac-win32-ia32/'),
        authors: 'cm3z4',
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows-installer'),
        exe: 'issac.exe',
        setupExe: 'issac.exe',
        setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'issac.ico')
    });
};