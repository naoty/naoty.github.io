webpackJsonp([0xabf1f89c67e],{418:function(e,t){e.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"2017年に作ったもの",time:"2017-12-21T23:00:00+0900",description:"2017年に作ったものを振り返りました"},html:'<p>2017年も終わろうとしているので、今年作ったものを振り返ってみた。こうやって振り返ってみると、今年もたくさん作った。今も使っているものもあるし、使っていないものもある。</p>\n<p>自分が抱えている問題を自分のコードで解決できるというのは、豊かな体験だとおもっている。来年も続けていけるように今年を振り返る。</p>\n<h1>使っているもの</h1>\n<h2><a href="https://github.com/naoty/table">table</a></h2>\n<pre><code class="language-bash">$ echo "day\\tDAU\\n2017-01-01\\t10000\\n2017-01-02\\t8000" | table -H\n+------------+-------+\n| day        | DAU   |\n+------------+-------+\n| 2017-01-01 | 10000 |\n| 2017-01-02 | 8000  |\n+------------+-------+\n</code></pre>\n<p><code>table</code>はタブ区切りの文字列をASCIIのテーブル形式に変換する。Google Spreadsheetなど表形式のテキストをSlackにコピペしたくて作った。そんなに使う頻度は多くないけど、使うときはとても便利でたまに使う。</p>\n<h2><a href="https://github.com/naoty/homebrew-misc">homebrew-misc</a></h2>\n<pre><code class="language-bash">$ brew tap naoty/misc\n</code></pre>\n<p>自作のちょっとしたツールを簡単にインストール・アンインストールするためにリポジトリを作った。今年作ったツールはここからHomebrewでインストールできるようにした。プライベートのPCで作ったツールを業務用のPCでインストールするときにラクなので作ってよかった。</p>\n<h2>fish-*</h2>\n<p>fishのためのプラグインをいくつか書いた。今年からzshからfishに移行した。fishにはfishermanというプラグイン管理ツールがあり、簡単にfishの機能を拡張できる。pecoを使ったスクリプトやプロンプトまでプラグインとして作った。</p>\n<h2><a href="https://github.com/naoty/license">license</a></h2>\n<pre><code class="language-bash">$ license > LICENSE\n</code></pre>\n<p>MITのLICENSEファイルを出力するだけのツール。新しいリポジトリを作るときは初手で上を実行している。</p>\n<h2><a href="https://github.com/naoty/git-misc">git-misc</a></h2>\n<pre><code class="language-bash">$ git prune-branch\n$ git tag-timestamp\n</code></pre>\n<p>git-miscにはgit関連のスクリプトがいくつか入っている。その中でも<code>git-prune-branch</code>という不要なbranchを削除するコマンドはほぼ毎日使っている気がする。</p>\n<h2><a href="https://github.com/naoty/nippo">nippo</a></h2>\n<pre><code class="language-bash">$ nippo\n</code></pre>\n<p><code>nippo</code>はその名の通り日報を作るためのスクリプト。<code>2017-12-21.md</code>のようなファイル名でファイルを作成してエディタを起動する。今年は10月くらいから毎日日報をつけるようにした。このスクリプトのおかげで続いていると言っても過言ではないと思う。</p>\n<h2><a href="https://github.com/naoty/icon">icon</a></h2>\n<pre><code class="language-bash">$ icon\n</code></pre>\n<p><code>icon</code>は自分のアイコンを生成するためのツール。引数を指定することで自由なサイズで生成できるので、ダミー画像を作る用途でも使える。</p>\n<h2><a href="https://github.com/naoty/homepage">homepage</a></h2>\n<p>このGitHub Pagesを管理するためのリポジトリ。既存の静的サイトジェネレーターを使わずにGulpプラグインだけでページを生成するようにしている。おかげで自由にカスタマイズすることができており、いまのところこのGitHub Pagesに移行してよかったと思っている。</p>\n<h1>使ってないもの</h1>\n<h2><a href="https://github.com/naoty/flock">flock</a></h2>\n<p><code>flock</code>はSwiftのソースコードから依存関係を抽出し、dot形式のファイルを出力する。今年はほとんどSwiftを書いていないので使う機会がなかった。</p>\n<h2><a href="https://github.com/naoty/Task">Task</a></h2>\n<p>TaskはWebフロントエンドの技術を学ぶために作ったElectronアプリで、<a href="https://github.com/naoty/todo">naoty/todo</a>のGUI版を意識して作った。CUIをそのままGUIにしただけでは、利便性ではCUIの方が優れていたため使うことはなかった。もう少しGUIの良さを活かしたタスク管理アプリケーションを作ってみたい。</p>\n<h2><a href="https://github.com/naoty/focus-theme">focus-theme</a></h2>\n<p>はてなブログのために作ったテーマ。CSSの勉強のために書いてみた。結局、後述するGitHub Pagesに移行したため使わなくなった。</p>\n<h2><a href="https://github.com/naoty/brewery">brewery</a></h2>\n<p><code>brewery</code>はHomebrewのformulaを作るためのツール。SHA256を生成するのがだんだんつらくて作ったけど、<code>shasum</code>を知ってから使う必要がなくなってしまった。</p>',fileAbsolutePath:"contents/posts/8.md"}},pathContext:{id:"contents/posts/8.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-8-html-16f54f9321f72eb1de02.js.map