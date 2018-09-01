webpackJsonp([0xc9ffdefd0504],{385:function(o,e){o.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"FLOCSSを導入した",time:"2018-02-01T08:48:00+0900"},html:'<p>このホームページのCSSを見直して<a href="https://github.com/hiloki/flocss">FLOCSS</a>を導入した。</p>\n<p>さまざまなCSSアーキテクチャが提唱されているけど、仕事でFLOCSSが採用されそうなので試しにやってみようということでやってみた。</p>\n<p>ディレクトリ構成はこんな感じ。</p>\n<pre><code>stylesheets/\n├── application.css\n├── foundation\n│   ├── _base.css\n│   └── _variable.css\n├── layout\n│   └── _base.css\n└── object\n    ├── project\n    │   ├── _homepage.css\n    │   ├── _post.css\n    │   └── _posts.css\n    └── utility\n        └── _align.css\n</code></pre>\n<p>markdownを変換したHTMLにstyleを与えるという制約上、クラスを使ったstyleを定義しにくい。なので、componentっぽいものもprojectにすべて含めてしまっている。これでいいのかはまだ分かっていないので、他のプロジェクトでも導入して試行錯誤してみたい。</p>\n<p>ついでなので、最近意識しているCSSの書き方を挙げておきたい。</p>\n<ul>\n<li><code>font-size</code>, <code>margin</code>, <code>padding</code>では単位に<code>rem</code>を使う。</li>\n<li><code>margin-top</code>を使わない。一貫して<code>margin-bottom</code>を使うことで、シンプルにレイアウトを組むことができる。</li>\n<li><code>margin-bottom</code>の値は<code>&#x3C;h1></code>~<code>&#x3C;h6></code>と<code>&#x3C;li></code>を<code>1</code>とすると、その他のブロック要素を<code>2</code>にする。例えば、このブログでは以下のような感じにしている。</li>\n</ul>\n<pre><code>h1,\nh2,\nh3,\nh4,\nh5,\nh6,\nli {\n  margin-bottom: 1rem;\n}\n\np,\nul,\nol,\npre,\ntable {\n  margin-bottom: 2rem;\n}\n</code></pre>',fileAbsolutePath:"contents/posts/16.md"}},pathContext:{id:"contents/posts/16.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-16-html-c0037086bce0c292a855.js.map