import { exec, spawn, execSync } from 'node:child_process';
import os from 'node:os';
import { delay } from '@/utils';
import * as CONF from '@/conf';

console.log( os.userInfo() );

/**
 * 功能：获取 git 用户名称，不处理异常情况
 */
export const getUserName =  async (): Promise<string | undefined> => {
  try{
    process.stdout.write( '正在获取中\n' );
    const name: string = execSync( `git config user.name` ).toString().trim();
    await delay( 3000 );

    process.stdout.write( `获取成功: ${name}\n` );
    return name;
  }catch(e){}
}

/**
 * 功能：git clone 模版
 */
console.log( CONF.TEMPLATE_URL );
export const gitCloneTemplate = () => {
  console.log( '正在下载...' );
  exec(`git clone ${ CONF.TEMPLATE_URL }`, ( err: any, stout: any, stderr: any ) => {
    if( !err ){
      process.stdout.write( 'download success!' );
    }else {
      console.log( err );
    }
    process.exit(0);
  });
}

getUserName();
gitCloneTemplate();

console.log( process.argv, '------------' )





