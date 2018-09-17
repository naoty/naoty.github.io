webpackJsonp([0x80b4d177a9b6],{387:function(t,e){t.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"PostCSSを導入した",time:"2018-01-24T16:27:00+0900",description:"PostCSSを導入することでSASSからcssnextに移行した"},html:"<p>このGitHub pagesのstylesheetは、これまでSASSで記述されGulpのパイプラインで処理されたCSSだった。今回、PostCSSを導入した。理由としては、PostCSSを通してマルチブラウザへの効率的な対応やCSSのlintを行いたかったからだ。</p>\n<p>PostCSSの導入にともなって、SASSで記述していたstylesheetをcssnextで書き換えた。SASSのような独自記法を覚えるよりも標準的な規格を覚える方が学習コストを回収しやすい。ちょうどCoffeeScriptからECMAScript 6への移行と同じような感じだ。</p>\n<p>導入したPostCSSプラグインは以下の通り。</p>\n<ul>\n<li><code>postcss-cssnext</code>：cssnextを導入する。これでcssで変数を利用したり、ネストした書き方ができる。<code>autoprefixer</code>が内部で使われており、サポートするブラウザに基づいてベンダープレフィックスを付与してくれる。</li>\n<li><code>postcss-import</code>：<code>@import</code>で宣言した外部のファイルを1つのファイルにまとめることができる。</li>\n<li><code>stylelint</code>：CSSのlintを行う。</li>\n<li><code>cssnano</code>：CSSの圧縮を行う。</li>\n</ul>",fileAbsolutePath:"contents/posts/15.md"}},pathContext:{id:"contents/posts/15.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-15-html-40f4be111d3d3a2706dc.js.map