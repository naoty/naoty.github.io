webpackJsonp([0x989d3ad8e6af],{405:function(n,e){n.exports={data:{site:{siteMetadata:{rootURL:"https://naoty.github.io"}},markdownRemark:{frontmatter:{title:"Circle CIのSlackへの通知を分かりやすくする",time:"2018-06-08T16:23:00+0900",description:"Circle CIのSlackへの通知にjob名を入れるためにスクリプトを書いた話"},html:'<p>Circle CI 2.0で導入されたworkflowを使うと、Slackへの通知にどのjobが完了したのかが含まれていなくて困ることがあった。特に失敗したときにどのjobが失敗したのかSlackでは分からないのが不便だった。</p>\n<p>そこで、Slackへの通知を分かりやすくするための設定をいくつかしてみたところ、劇的によくなったので紹介したい。</p>\n<h1>通知スクリプトを自作する</h1>\n<pre><code class="language-bash">#!/bin/bash -e\n\npayload=$(cat &#x3C;&#x3C; EOS\n{\n  "attachments": [\n    {\n      "title": "Success",\n      "title_link": "${CIRCLE_BUILD_URL}",\n      "text": "\\`workflow/${CIRCLE_STAGE}\\` in ${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME} (${CIRCLE_BRANCH})",\n      "mrkdwn_in": ["text"],\n      "color": "good"\n    }\n  ]\n}\nEOS\n)\n\ncurl \\\n  -X POST \\\n  -H \'Content-Type: application/json\' \\\n  --data "${payload}" \\\n  ${SLACK_WEBHOOK_URL}\n</code></pre>\n<ul>\n<li>Circle CIの連携時に生成されるWebhookを使って通知を送るスクリプトを書いた。</li>\n<li><code>attachments</code>フィールドを使ってリッチなメッセージを作る。</li>\n<li>環境変数<code>CIRCLE_STAGE</code>には、workflow内で実行中のjob名が入っているため、これを使ってどのjobが成功したのか失敗したのかを通知できる。</li>\n</ul>\n<h1>通知スクリプトを設定する</h1>\n<pre><code class="language-yaml">jobs:\n  test:\n    steps:\n      # ...\n      - run: ./.circleci/notify-success\n      - run:\n          command: ./.circleci/notify-failure\n          when: on_fail\n</code></pre>\n<ul>\n<li>各jobの最後のstepに成功時の通知を送るスクリプトを設定する。</li>\n<li><code>when: on_fail</code>を設定すると、先に実行されたstepが失敗したときに呼ばれるstepを設定できる。それを利用して、失敗時の通知を送るスクリプトを設定する。</li>\n</ul>',fileAbsolutePath:"contents/posts/32.md"}},pathContext:{id:"contents/posts/32.md absPath of file >>> MarkdownRemark"}}}});
//# sourceMappingURL=path---posts-32-html-632eb6e34d20e38b3102.js.map