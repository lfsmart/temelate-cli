// download-git-repo
import download from 'download-git-repo';
console.log( download );
// direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git#my-branch
// https://github.com/vuejs/core.git
// https://github.com/lizhanyi/tools.git
console.log( 'downloading...' );
download('direct:https://github.com/lizhanyi/tools.git', './toll10', { clone: true }, (error: any) => {
  console.log( error, 'download success' );
});

console.log(__dirname)

// download('github:lizhanyi/tools#dev', './toll2', (error: any) => {
//   console.log( error, 'download success' );
// });