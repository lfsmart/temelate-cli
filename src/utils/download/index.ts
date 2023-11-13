import { exec, spawn, execSync } from 'node:child_process';
import { rmDir } from '@/utils';
import * as CONF from '@/conf';

/**
 * @author lantian
 * @desc 下载
 */

export const download = (dir: string): void => {
  console.log( 'downloading...' );
  exec(`git clone ${ CONF.TEMPLATE_URL } ${dir}`, ( err: any, stout: any, stderr: any ) => {
    if( !err ){
      process.stdout.write( 'download success!' );
    }else {
      console.log( err );
      rmDir( dir );
    }
    process.exit(0);
  });
}

// export const download = (dir: string) => {
//   // 进入创建的目录
//   // execSync( `cd ${dir}`); 
//   // console.log( `cd ${dir} success!` );
//   gitCloneTemplate( dir );
// } 






