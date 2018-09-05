webpackJsonp([0x6f4a4a4a246a],{380:function(t,e){t.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"GitHub Pagesに移行した",time:"2017-11-29T17:12:00+0900",description:"はてなブログからGitHub Pagesに移行した"},html:'<p>ブログをはてなブログからGitHub Pagesに移行した。</p>\n<p>dev.toを見てからWebプログラマーのブログは高速に表示されるべきだと思うようになったので、GitHub Pagesに移行して、マークアップからすべてフルスクラッチすることにした。</p>\n<p>移行にあたっていくつかStatic Site Generatorを試してみたが、どれもしっくりこなかったので、gulpのプラグインを組み合わせてHTMLやCSSを組み立てることにした。コードは<a href="https://github.com/naoty/homepage">naoty/homepage</a>にある。</p>\n<p>以下、やったこととか気をつけたこと。</p>\n<ul>\n<li>ページの各コンテンツをmarkdownで書くようにして、ejsで書いたレイアウトに展開するようにした。これは既存のgulpプラグインではできなかったため、独自にgulpプラグインを書いた。</li>\n<li>各投稿からindexページを生成するようにした。ejsで書いたレイアウトに展開するようになっている。また、同時にファイルのmtimeを見てソートするようにしている。これも独自のgulpプラグインを書いて実現した。</li>\n<li>CSSはSASSで書いてCSSに変換して圧縮している。CSSはすべてHTMLの<code>&#x3C;style></code>タグ内につっこんでいる。こうすることで、CSSのレンダリングブロックを回避できるため、初回のレンダリングが少し速くなる。</li>\n<li>CSSを書く際に、モバイルファーストを念頭にまずスマホ表示を前提に書き始めた。そして、画面を広げながら、余白が気になる部分でメディアクエリを使って広い画面向けのスタイルを追加している。</li>\n<li>最終的なHTMLは圧縮している。ここらへん、できる限りファイルサイズを抑えてパフォーマンスを最適化しようとしている。結果的に、PageSpeed Insightsでほぼ100点をとれるようになった。</li>\n</ul>\n<p><img src="/images/posts/1/pagespeed-insights.png" alt="pagespeed-insights"></p>\n<ul>\n<li>ファイル名をURLに使おうとすると、濁点や半濁点を含むファイル名が表示できなくなることがある。これは、macOSのファイル名はUTF-8-MACと呼ばれるエンコーディングが使われているためで、濁点や半濁点が通常のUTF-8と異なるために起きているらしい。</li>\n<li>ファイル名には自然数を使うようにし、タイトルはfront matterで指定するようにした。front matterでは、タイトルの他に<code>description</code>や<code>og:image</code>を設定できるようにした。</li>\n<li>Lighthouseを参考にmanifest.jsonを書くなどPWAの要件を満たすようにした。</li>\n</ul>\n<p><img src="/images/posts/1/lighthouse.png" alt="lighthouse"></p>\n<ul>\n<li><a href="https://github.com/naoty/homepage">naoty/homepage</a>のpublicディレクトリをgitサブモジュールにして<a href="https://github.com/naoty/naoty.github.io">naoty/naoty.github.io</a>にpushするようにしている。</li>\n</ul>',fileAbsolutePath:"contents/posts/1.md"}},pathContext:{id:"contents/posts/1.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-1-html-c233c0230a10194da1bc.js.map