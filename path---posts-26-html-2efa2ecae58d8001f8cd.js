webpackJsonp([63112919102416],{399:function(e,t){e.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"RailsからReduxのinitial stateを設定する",time:"2018-03-29T23:19:00+0900",description:"コントローラーで作ったデータをReduxのinitial stateに設定できないか試してみた"},html:'<pre><code class="language-rb">def new\n  @user = User.new\nend\n</code></pre>\n<p>上のようなコントローラーで作ったデータをReduxのinitial stateとして設定したいと思い、いろいろ考えて書いてみた。</p>\n<p>まず、ヘルパーとかデコレーターでモデルをReactコンポーネントに渡すpropsに変換してみる。今回はactive_decoratorを使う。</p>\n<pre><code class="language-rb">module UserDecorator\n  def to_react_props\n    as_json(only: %i[first_name last_name email])\n      .transform_keys { |key| key.camelcase(:lower) }\n      .transform_values { |value| value || "" }\n      .to_json\n  end\nend\n</code></pre>\n<p>これでモデルから必要な属性だけをcamelCaseのJSON文字列に変換できるようになった。</p>\n<p>次にRailsのviewでdata属性に上のpropsを渡す。あとでここからJSでデータを引っ張ってくる計画だ。</p>\n<pre><code class="language-erb">&#x3C;div id="js-redux-root" data-react-props="&#x3C;%= @user.to_react_props %>">\n&#x3C;/div>\n</code></pre>\n<p>あとは、Reduxのstoreを作成するときに上のpropsを設定する。</p>\n<pre><code class="language-javascript">document.addEventListener(\'DOMContentLoaded\', () => {\n  const rootElement = document.getElementById(\'js-redux-root\');\n  const initialState = JSON.parse(rootElement.dataset.reactProps);\n  const store = createStore(rootReducer, initialState);\n\n  render(\n    &#x3C;Provider store={store}>\n      &#x3C;SignUpForm />\n    &#x3C;/Provider>\n  );\n});\n</code></pre>\n<p>これでRailsで作ったデータをReduxのinitial stateに設定できた。フォームの初期値を埋めておきたいときなど、コントローラーからReactコンポーネントにデータを渡せるとラクなので、こういう実装が必要になると思う。</p>\n<p>最近、ReactとかReduxを勉強しているので、これでいいのかよくわかりません。コードレビューお願いします。</p>',fileAbsolutePath:"contents/posts/26.md"}},pathContext:{id:"contents/posts/26.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-26-html-2efa2ecae58d8001f8cd.js.map