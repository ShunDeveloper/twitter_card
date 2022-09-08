import React from "react";
import Head from "next/head";

const DocumentHead = () => {
  return (
    <Head>
      <title>How to use Twitter Card</title>
      <meta name="description" content="How to use Twitter Card" />
      <meta property="og:type" content="summary_large_image" />
      <meta
        property="og:image"
        content="https://twitter-card-nu.vercel.app/twitter_card.png"
      />
      <meta property="og:title" content="How to use Twitter Card" />
      <meta
        property="og:description"
        content="Twitter Cardを自分のブログに導入してみたいと思い練習で作成しました. 下記に導入のやり方を書いたので良ければご参照下さい"
      />
      <meta
        property="og:image:alt"
        content="私のブログで使う予定のTwitterカード"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ShunDeveloper" />
      <meta name="twitter:creator" content="@ShunDeveloper" />
      <meta name="twitter:title" content="Twitter Cardの使い方" />
      <meta
        name="twitter:description"
        content="Twitter Cardを自分のブログに導入してみたいと思い練習で作成しました. 下記に導入のやり方を書いたので良ければご参照下さい"
      />
      <meta
        name="twitter:image"
        content="https://twitter-card-nu.vercel.app/twitter_card.png"
      />
      <meta
        name="twitter:image:alt"
        content="私のブログで使う予定のTwitterカード"
      />
    </Head>
  );
};
export default DocumentHead;
