
const pkg = require( './../../package.json' );

import inquirer from 'inquirer';
import { Command } from 'commander';
import { verifyDir, rmDir, mkdir, download } from '@/utils';
const program = new Command();

program
  .name( pkg.name )
  .version( pkg.version )
  .command( 'create' )
  .argument('<dir>', '<dir>')
  .argument('[user]', '[user]', 'admin')
  .option('-f, --force', 'force overwrite of current file directory' )
  .helpOption( '-h, --help')
  .usage(`<command> <dir> [option]`)
  .action( ( dir, user, opts, d ) => {
    if( verifyDir( dir ) ){
      if( opts.force ){
        rmDir( dir );
        download( dir )
      }else {
        inquirer.prompt([{
          type: 'confirm',
          name: 'confirm',
          message: 'folder already exist and overwrite it?'
        }]).then( (answer) => {
          if( answer.confirm ){
            rmDir( dir );
            download( dir )
          }else{
            process.stdout.write( 'operation canceled!' );
          }
        }).catch( err => {
          process.stdout.write( err );
        });
      }
    }else {
      download( dir );
    }
  })
program.parse( process.argv );



// inquirer.prompt([
//   {
//     type: 'list',
//     // input, number, confirm, list, rawlist, expand, checkbox, password, editor
//     name: 'one',
//     message: `please select project type: `,
//     choices: [
//       {
//         name: 'a'
//       }, {
//         name: 'b'
//       }, {
//         name: 'c'
//       },
//     ],
//     validate( input, answer ) {
//       // console.log( input, answer, '--------' )
//       //   return JSON.stringify(answer) + '!';
//       return true;
//     },

//     // filter( input, answers ) {
//     //   console.log( input, answers ); 
//     //   return input
//     // },
//   }, {
//     type: 'confirm',
//     name: 'confirm',
//     message: 'ok?'
//   }

// ]).then( answer => {
//   console.log( answer, 'cb' );
// }).catch( e => {
//   console.log( e );
// });