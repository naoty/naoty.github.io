webpackJsonp([0x7c25560f21a7],{409:function(n,e){n.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"決定境界のプロット",time:"2018-07-22T15:02:00+0900",description:"numpyやmatplotlibを使って決定境界をプロットする方法を学んだ"},html:'<p>ロジスティック回帰など分類を行うアルゴリズムがちゃんとトレーニングデータを分類できているか確認するため、決定境界をプロットする方法を学んだ。そのメモをブログに残す。</p>\n<h2>まとめ</h2>\n<ul>\n<li><code>np.meshgrid()</code>で格子点を取得する。しかも、<code>np.arange()</code>などを使ってできるだけ細かく格子点を取得する。</li>\n<li>格子点を分類器に適用するため、トレーニングデータの形状に変換する。</li>\n<li>格子点に対して分類を予測する。</li>\n<li>格子点とその分類の予測を<code>plt.contourf()</code>を使って等高線としてプロットする。</li>\n</ul>\n<h2>格子点の取得</h2>\n<pre><code>x1 = np.arange(0, 5, 0.5)\nx2 = np.arange(0, 10, 0.5)\nX1, X2 = np.meshgrid(x1, x2)\n\nplt.plot(X1, X2, \'ok\')\nplt.xlimit(-1, 11)\nplt.ylimit(-1, 11)\nplt.show()\n</code></pre>\n<p><img src="/images/posts/36/meshgrid.png" alt="meshgrid"></p>\n<p>上のように<code>np.meshgrid()</code>を使うと、2つの配列<code>x1</code>と<code>x2</code>からなる平面上にある格子点を取得できる。</p>\n<p>この格子点の間隔を小さくすると、<code>x1</code>と<code>x2</code>からなる平面上の「すべての点」を擬似的に再現できる。</p>\n<pre><code>x1 = np.arange(0, 5, 0.01)\nx2 = np.arange(0, 10, 0.01)\n\n# 以下同じ\n</code></pre>\n<p><img src="/images/posts/36/dense_meshgrid.png" alt="dense meshgrid"></p>\n<h2>格子点の変換</h2>\n<p>ある平面上の「すべての点」を分類器に適用すると、平面上に分類した結果をマッピングできるようになる。</p>\n<p>そのために格子点をトレーニングデータの形状に変換する。つまり、$(x<em>1, x</em>2)$のようにする。</p>\n<pre><code># flatにする\nX1_flatten = X1.ravel()\nX2_flatten = X2.ravel()\n\n# 結合して行列にする\nX = np.array([X1_flatten, X2_flatten])\n\n# 行方向がトレーニングデータ、列方向がフィーチャーになるように転置する\nX = X.T\n</code></pre>\n<h2>格子点を分類器に適用する</h2>\n<pre><code>Z = classifier.predict(X)\n</code></pre>\n<p>上で分類器に適用できるように変換できたので、あとは予測する。</p>\n<h2>等高線図でプロットする</h2>\n<pre><code># プロットできるように形状を揃える\nZ = Z.reshape(X1.shape)\n\nplt.contourf(X1, X2, Z, cmap=\'RdBu\', alpha=0.5)\nplt.xlim(-1, 11)\nplt.ylim(-1, 11)\nplt.xlabel(\'x1\')\nplt.ylabel(\'x2\')\nplt.show()\n</code></pre>\n<p><img src="/images/posts/36/decision_regions.png" alt="decision regions"></p>\n<p><em>（上図は適当な関数を適用しただけです）</em></p>\n<p><code>plt.contourf()</code>は等高線図を引きつつ、領域を塗りつぶしてくれるので決定境界をプロットするのに便利。</p>',fileAbsolutePath:"contents/posts/36.md"}},pathContext:{id:"contents/posts/36.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-36-html-b5488cd58170c0b828f2.js.map