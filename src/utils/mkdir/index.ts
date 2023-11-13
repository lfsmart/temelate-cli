import { exec, spawn, execSync } from 'node:child_process';

/**
 * @author lantian
 * @desc 检测创建参数目录是否已经存在
 */
export const mkdir = (dir: string): void => {
  execSync( `mkdir ${dir}` );
  console.log( 'mkdir success!' );
}






