import { col } from '../../utils';

export const help = () => {
  console.log(`azot client: Widevine client utilities\n`);
  console.log(`Usage: azot client <subcommand> [...flags]\n`);
  console.log(`Commands:`);
  console.log(
    col(`info <input>`) +
      'print info about client that is on <input> path (*.wvd filepath or directory with id and private key)',
  );
  console.log(
    col(`pack <input> <output>`) +
      'pack client id and private key from <input> directory into single *.wvd file with <output> path',
  );
  console.log(
    col(`unpack <input> <output>`) +
      'unpack *.wvd from <input> path to separate client id and private key placed in <output> directory',
  );
  console.log('');
  console.log(`Flags:`);
  console.log(col(`-h, --help`) + 'Display this menu and exit');
};
