import { exec, spawn, execSync } from 'node:child_process';

/**
 * @author lantian
 * @desc 检测创建参数目录是否已经存在
 */
export const verifyDir = (createDir: string): boolean => {
  const str = execSync( 'ls' ).toString();
  const dirs = str.split( '\n' ).slice( 0, -1 ); 
  console.log( dirs, '---dirs---' )
  return dirs.includes( createDir );
}





