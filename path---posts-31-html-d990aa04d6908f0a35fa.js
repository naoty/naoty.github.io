webpackJsonp([0x72e7fca024e4],{402:function(e,c){e.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"docker-composeでwebpack-dev-serverを使う",time:"2018-06-06T23:04:00+0900"},html:'<p>docker-composeを使って開発をしているとき、webpack-dev-serverを別サービスとして起動させたくなる。Rails + webpackerの環境でうまく実現できたのでメモを残しておく。</p>\n<p><code>docker-compose.yml</code>のうちポイントとなる箇所だけ抽出した。</p>\n<pre><code class="language-yaml">services:\n  rails:\n    environment:\n      WEBPACKER_DEV_SERVER_HOST: webpack-dev-server\n    volumes:\n      - ./public/packs:/myapp/public/packs\n    depends_on:\n      - webpack-dev-server\n  webpack-dev-server:\n    environment:\n      WEBPACKER_DEV_SERVER_HOST: 0.0.0.0\n    ports:\n      - 3035:3035\n    volumes:\n      - ./public/packs:/myapp/public/packs\n</code></pre>\n<h1>webpackerとwebpack-dev-server</h1>\n<p>webpackerをセットアップするとwebpack-dev-serverもついてくる。そして、<code>config/webpacker.yml</code>にはwebpack-dev-serverの設定も含まれている。</p>\n<p>開発環境において、webpackerはアセットへのリクエスト受信時にwebpackを実行してアセットをコンパイルするが、webpack-dev-serverの起動が確認できればアセットへのリクエストをwebpack-dev-serverに転送するようになっている。</p>\n<p>Railsがwebpack-dev-serverに接続する際、<code>config/webpacker.yml</code>に記載されたhostとportを参照する。ただし、<code>WEBPACKER_DEV_SERVER_*</code>のようなパターンの環境変数を設定することでYAMLファイルの設定を上書きできるようになっており、それを利用しているのが、上の<code>docker-compose.yml</code>内で指定している環境変数<code>WEBPACKER_DEV_SERVER_HOST</code>となる。これでwebpack-dev-serverのhostを設定できる。</p>\n<p>このdocker-composeでは、<code>depends_on</code>で設定したサービスのaliasを設定することでRailsからwebpack-dev-serverにアクセスできるようにしている。また、<code>webpack-dev-server</code>サービスで<code>0.0.0.0</code>を指定しているのは、このコンテナ外からアクセスできるようにするためだ。</p>\n<h1>マニフェストファイルの共有</h1>\n<p>Railsがwebpackでコンパイルしたアセットにアクセスする際、マニフェストファイルに記載されたアセットのファイルパスを利用している。マニフェストファイルはコンパイル時に生成されるため、webpack-dev-serverを実行するコンテナでマニフェストファイルが生成されることになる。</p>\n<p>そこで、マニフェストファイルが生成される<code>public/packs</code>ディレクトリをホストとマウントすることでRailsコンテナからマニフェストファイルを参照できるようにしている。</p>\n<h1>live reload</h1>\n<p>webpack-dev-serverはアセットのソースコードが変更されたときにブラウザを自動更新させるlive reloadの機能も備えている。live reloadはwebpack-dev-serverがアセットをコンパイルする際にlive reloadするスクリプトを挿入することで実現している（はず）。そのスクリプトはwebpack-dev-serverを参照するため（ここら辺の詳しい仕組みはちゃんと把握できていない）、3025番でホストとのポートマッピングを行っている。</p>',fileAbsolutePath:"contents/posts/31.md"}},pathContext:{id:"contents/posts/31.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-31-html-d990aa04d6908f0a35fa.js.map