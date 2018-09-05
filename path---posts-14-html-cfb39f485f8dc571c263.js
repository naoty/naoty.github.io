webpackJsonp([2960472934285],{385:function(t,e){t.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"スキーマファイルをSQL形式に変更する",time:"2018-01-13T09:53:00+0900",description:"スキーマファイルのと実際のスキーマの乖離を避けるためSQL形式に変更する"},html:'<p>Railsアプリのスキーマファイルはデータベースの現在のスキーマを表し、デフォルトでは<code>db/schema.rb</code>にActiveRecordのDSLで記述されている。スキーマファイルは<code>rails db:schema:dump</code>で生成されるものなので、開発者が直接いじってはならない。</p>\n<p>開発が進みデータベースのスキーマが複雑になると、ActiveRecordのDSLでの表現に限界が出てくる。DSLのメリットはデータベースに依存せず抽象的な表現ができることだが、データベース固有の設定をする場合にDSLで表現できなくなってくる。</p>\n<p>DSLで表現できなくなるとスキーマファイルと実際のスキーマに乖離が生まれる。スキーマに乖離があると、開発環境やCI上でデータベースをセットアップするのが困難になる。</p>\n<p>そこで、ActiveRecordはスキーマファイルの形式にSQLを選ぶことができる。<code>config/application.rb</code>で以下のように指定すると、<code>db/structure.sql</code>というSQL形式のスキーマファイルが生成される。</p>\n<pre><code class="language-rb">config.active_record.schema_format = :sql\n</code></pre>\n<p>なお、この設定はデフォルトでは<code>:ruby</code>が指定されている。</p>\n<p>SQL形式に変更した場合、コマンドを以下のように変える必要がある。</p>\n<table>\n<thead>\n<tr>\n<th>Ruby形式</th>\n<th>SQL形式</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>rails db:schema:load</code></td>\n<td><code>rails db:structure:load</code></td>\n</tr>\n<tr>\n<td><code>rails db:schema:dump</code></td>\n<td><code>rails db:structure:dump</code></td>\n</tr>\n</tbody>\n</table>\n<p>また、<code>db/structure.sql</code>の生成にはDBごとのスキーマダンプツールを使うため、MySQLであれば<code>mysqldump</code>を用意する必要がある。</p>',fileAbsolutePath:"contents/posts/14.md"}},pathContext:{id:"contents/posts/14.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-14-html-cfb39f485f8dc571c263.js.map