webpackJsonp([54558719581864],{390:function(t,e){t.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"react-railsによるCSRF対策",time:"2018-02-18T12:08:00+0900"},html:'<p>最近、react-railsを使ってRails上でReactコンポーネントを実装している。フォームを実装する際、Railsのフォームヘルパーは自動的にCSRFトークンを送るように<code>&#x3C;input></code>を生成してくれるが、Reactコンポーネントでフォームを実装する場合はそれを自分で実装する必要がある。</p>\n<p>react-railsであれば、Reactコンポーネントにpropsを簡単に渡せるため、props経由でCSRFトークンを渡すことで実装することができる。</p>\n<pre><code>// new.html.slim\n= react_component "SignUpForm",\n  { csrf_params: request_forgery_protection_token, csrf_token: form_authenticity_token }\n</code></pre>\n<pre><code>// SignUpForm.jsx\nrender() {\n  return (\n    &#x3C;form method="post" action="/sign_up">\n      &#x3C;input type="hidden" name={this.props.csrfParams} value={this.props.csrfToken} />\n    &#x3C;/form>\n  );\n}\n</code></pre>',fileAbsolutePath:"contents/posts/20.md"}},pathContext:{id:"contents/posts/20.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-20-html-021e1bffc3e9a4adca5b.js.map