/**
 * 功能： 延时函数
 */
export const delay = ( ms: number=50 ): Promise<void> => new Promise( resolve => setTimeout( resolve, ms ) );