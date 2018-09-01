webpackJsonp([77457937127327],{388:function(t,a){t.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"webpacker用のDockerfile",time:"2018-02-12T22:58:00+0900"},html:'<p>webpackerを導入する際にDockerイメージにNode.jsとYarnが必要になるため、以下のようにDockerfileにインストールコマンドを追加する。いつも調べるのが面倒なので、メモしておく。</p>\n<pre><code>FROM ruby:2.5.0\n\n# Node.js\nRUN curl -sL https://deb.nodesource.com/setup_8.x | bash - &#x26;&#x26; \\\n  apt-get install -y nodejs\n\n# Yarn\nRUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - &#x26;&#x26; \\\n  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list &#x26;&#x26; \\\n  apt-get update &#x26;&#x26; \\\n  apt-get install -y yarn\n</code></pre>\n<h1>参考</h1>\n<ul>\n<li><a href="https://nodejs.org/ja/download/package-manager/">https://nodejs.org/ja/download/package-manager/</a></li>\n<li><a href="https://yarnpkg.com/ja/docs/install#linux-tab">https://yarnpkg.com/ja/docs/install#linux-tab</a></li>\n</ul>',fileAbsolutePath:"contents/posts/19.md"}},pathContext:{id:"contents/posts/19.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-19-html-b46d24f9dd1e99782de7.js.map