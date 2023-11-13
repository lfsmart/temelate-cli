import { exec, spawn, execSync } from 'node:child_process';
import * as CONF from '@/conf';

/**
 * @author lantian
 * @desc 下载
 */

export const gitCloneTemplate = (dir: string) => {
  console.log( '正在下载...' );
  exec(`git clone ${ CONF.TEMPLATE_URL } ${dir}`, ( err: any, stout: any, stderr: any ) => {
    if( !err ){
      process.stdout.write( 'download success!' );
    }else {
      console.log( err );
    }
    process.exit(0);
  });
}

export const download = (dir: string) => {
  // 进入创建的目录
  execSync( `cd ${dir}`); 
  console.log( `cd ${dir} success!` );
  gitCloneTemplate( dir );
} 






