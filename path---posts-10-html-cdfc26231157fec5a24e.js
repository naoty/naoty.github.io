webpackJsonp([0xa3763da3eda6],{379:function(n,p){n.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"画像アップロードの実装パターン",time:"2017-12-22T17:12:00+0900"},html:'<p>画像アップロードの実装は考えれば考えるほど難しい。サーバーサイドはもちろんのこと、インフラやフロントエンドにわたって幅広く知識が求められる。</p>\n<p>これまでの経験を基に画像アップロードの実装パターンを3パターンにまとめてみた。</p>\n<ol>\n<li>同期アップロード</li>\n<li>非同期アップロード</li>\n<li>ダイレクトアップロード</li>\n</ol>\n<p>以下では、画像のアップロード先としてS3を想定する。また、画像のリサイズについては、画像リクエスト時にリサイズする方法などを考慮に加えると論点が発散しそうなので、いったん保留する。</p>\n<h1>同期アップロード</h1>\n<p><img src="/images/posts/10/synchronous-upload.png" alt="同期アップロードのシーケンス図"></p>\n<p>同期アップロードは、リクエストを受け取ったサーバーがS3に画像をアップロードするまでクライアントを待たせる。</p>\n<p>そのため、非常に大きい画像や複数の画像をアップロードした場合、レスポンスタイムが非常に長くなることが予想できる。通常、Webサーバーはリクエストボディのサイズに上限を設定したり、リクエストのタイムアウト時間を設定しているため、そのようなリクエストはタイムアウトになってしまうだろう。</p>\n<p>同期アップロードの実装は非同期アップロードに比べると簡単だし、非同期処理に伴う問題もない。だから、社内システムのようにユーザーを待たせても問題がない場合は同期アップロードを採用してもいいと思う。だけど、UI/UXが非常に悪いため、ユーザーが使う機能の実装としては採用できないと思う。</p>\n<h1>非同期アップロード</h1>\n<p><img src="/images/posts/10/asynchronous-upload.png" alt="非同期アップロードのシーケンス図"></p>\n<p>非同期アップロードは、リクエストを受け取ったサーバーとは別のワーカープロセスがバックグラウンドで画像をアップロードする。そのため、クライアントがレスポンスを受け取った時点ではアップロードが完了していない可能性がある。</p>\n<p>同期アップロードと比べると、レスポンスタイムが改善され、複数の画像をアップロードすることも可能になる。しかし、非同期アップロードを実装するにあたり、考えなくてはいけないことがいくつかある。</p>\n<ul>\n<li>アップロードが失敗した場合にリトライさせる手段をどのように提供するか（UI/UX観点）。</li>\n<li>ジョブキューとワーカープロセス、そしてワーカープロセスを管理するプロセスをどのように開発時に用意するか（開発環境観点）。</li>\n<li>サーバーとワーカーの間でどのようにアップロードされた画像を受け渡すか（インフラ観点）。</li>\n</ul>\n<p>それぞれの論点は、それだけで十分に1つの記事になりうるため、ここでは論点を挙げるだけに留めておきたい。</p>\n<h1>ダイレクトアップロード</h1>\n<p><img src="/images/posts/10/direct-upload.png" alt="ダイレクトアップロードのシーケンス図"></p>\n<p>ダイレクトアップロードは、クライアントからサーバーを介さずに直接S3にアップロードし、完了後にファイルパスなどの情報のみサーバーに送る。</p>\n<p>この方法でも、同期アップロードのようにクライアントを待たせるようなことはなく、複数の画像をアップロードできる。さらに、非同期アップロードのような複雑なアーキテクチャも必要がないため、スマートな方法のように思える。</p>\n<p>この場合、画像をサーバーで処理できないため、画像のファイル形式の検証やウイルススキャンなどをクライアントで行う必要がある。アプリであればiOSとAndroid両方で実装が必要になるため、全体の実装工数は3つの実装パターンの中で最も大きいかもしれない。</p>',fileAbsolutePath:"contents/posts/10.md"}},pathContext:{id:"contents/posts/10.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-10-html-cdfc26231157fec5a24e.js.map