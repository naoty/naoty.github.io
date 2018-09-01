webpackJsonp([0xa0e50c421fc9],{393:function(e,n){e.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"Assets precompileに必要最小限のファイル",time:"2018-03-09T20:55:00+0900"},html:'<p>Dockerfileで<code>rails assets:precompile</code>を実行する前に<code>COPY</code>するファイルを必要最小限にしておけると、キャッシュを有効活用できてビルド時間を短縮できる。</p>\n<pre><code class="language-dockerfile">WORKDIR /myapp\n\nCOPY app/assets /myapp/\nCOPY bin/rails /myapp/bin/\nCOPY config/environments /myapp/config/environments/\nCOPY config/initializers /myapp/config/initializers/\nCOPY config/application.rb /myapp/config/application.rb\nCOPY config/boot.rb /myapp/config/boot.rb\nCOPY config/environment.rb /myapp/config/environment.rb\nCOPY config/secrets.yml.enc /myapp/config/secrets.yml.enc\nCOPY lib/assets /myapp/lib/assets/\nCOPY vendor/assets /myapp/vendor/assets/\nCOPY Rakefile /myapp/\nRUN bin/rails assets:precompile\n</code></pre>\n<p>とりあえずこれだけで動いた。<code>config/initializers/</code>以下も削れそうな気がするけど、プロジェクトによってケースバイケースだと思うので、これで十分だとおもう。</p>',fileAbsolutePath:"contents/posts/23.md"}},pathContext:{id:"contents/posts/23.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-23-html-67b09a0b4f06102a5b8d.js.map