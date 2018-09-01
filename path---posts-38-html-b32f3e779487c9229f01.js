webpackJsonp([0xb69f03f31f5],{409:function(e,o){e.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"multi-stage buildでのfreshの運用",time:"2018-08-05T18:55:00+0900"},html:'<p>Goで書いているWebアプリケーションをDockerイメージにするとき、multi-stage buildを使ってビルド用のイメージと実行用のイメージを分けると思う。実行用のイメージをalpine linuxベースにするとイメージのサイズが異常に小さくなる。</p>\n<pre><code>FROM golang as builder\nENV CGO_ENABLED 0\nWORKDIR /go/src/github.com/naoty/hello\n\nRUN curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh \\\n  &#x26;&#x26; go get github.com/pilu/fresh\n\n# dep\nCOPY Gopkg.toml Gopkg.lock /go/src/github.com/naoty/hello/\nRUN dep ensure -v --vendor-only=true\n\nCOPY . /go/src/github.com/naoty/hello/\nRUN make install\n\nFROM alpine\nRUN apk --no-cache add ca-certificates \nWORKDIR /root/\nCOPY --from=builder /go/bin/hello /root/\nCMD ["./hello"]\n</code></pre>\n<p>一方で、Goの開発では<a href="https://github.com/pilu/fresh">pilu/fresh</a>を使ってファイルの更新時に自動的にビルドと実行をし直したい。だけど、multi-stage buildを使っていると、実行用のイメージにはGoのビルド環境がないため、少し工夫が必要になる。</p>\n<p>docker-composeを使うとき、<code>target</code>オプションを使うとビルド用のコンテナまででビルドを中断できる。ただし、3.4からの機能なので<code>version</code>を3.4以上にする必要がある。</p>\n<pre><code>version: "3.4"\nservices:\n  app:\n    build:\n      context: .\n      target: builder\n    command: ["fresh"]\n</code></pre>',fileAbsolutePath:"contents/posts/38.md"}},pathContext:{id:"contents/posts/38.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-38-html-b32f3e779487c9229f01.js.map