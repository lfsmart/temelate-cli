import { exec, spawn, execSync } from 'node:child_process';

/**
 * @author lantian
 * @desc 删除已存在的目录
 */
export const rmDir = (dir: string) => {
  // 如果没有这个目录会报错
  const str = execSync( `rm -r ${dir}` );
}






