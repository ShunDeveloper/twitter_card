import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DocumentHead from "../component/document_head";
import Quote from "../component/quote";

const Home: NextPage = () => {
  return (
    <div>
      <DocumentHead />
      <main className="main-container">
        <div className="article-box">
          <TitleBox />
          <SettingContentType />
          <hr className="botted" />
          <SettingAuthor />
          <hr className="botted" />
          <SettingImage />
          <hr className="botted" />
          <SettingDescription />
          <hr className="botted" />
          <Conclusion />
        </div>
      </main>
    </div>
  );
};

const TitleBox = () => {
  return (
    <div>
      <h1 className="text-5xl font-ubuntu text-slate-900">
        How to use Twitter Card
      </h1>
      <hr className="text-slate-500 text-xl my-5" />
    </div>
  );
};

const SettingContentType = () => {
  const code_twitter_card: string =
    '<meta name="twitter:card" content="summary_large_image" />';
  return (
    <div>
      <h2 className="subtitle">1. 表示するコンテンツの設定</h2>
      <p>
        Twitter Cardを利用するにはhtmlのheadに記載するmetaタグを使います.
        表示するコンテンツを設定するには
        <span className="inline-code">twitter:card</span>を設定します.
      </p>
      <code>{code_twitter_card}</code>
      <p>
        contentには以下の4つの値を設定することができます. それぞれ,
        summaryが1:1の大きさのカード, summary_large_imageが2:1の大きさのカード,
        appがアプリケーションのインストール画面,
        playerが音楽の再生プレビューです
      </p>
      <Quote
        text="カードタイプは、“summary”、“summary_large_image”、“app”、“player”のいずれかになります。"
        sourceName="Twitter"
        source="https://developer.twitter.com/ja/docs/tweets/optimize-with-cards/guides/getting-started"
      />
    </div>
  );
};

const SettingAuthor = () => {
  const code_attribution1: string =
    '<meta name="twitter:site" content="@ShunDeveloper" />';
  const code_attribution2: string =
    '<meta name="twitter:creator" content="@ShunDeveloper" />';
  return (
    <div>
      <h2 className="subtitle">2. ソースと著作者の設定</h2>
      <p>
        ソースと著作者(=帰属)を設定するには
        <span className="inline-code">twitter:site</span>と
        <span className="inline-code">twitter:creator</span>を編集します.
        この設定は必須ではありません
      </p>
      <code>
        {code_attribution1}
        <br />
        {code_attribution2}
      </code>
      <p>
        siteとcreatorの違いはsiteがWebサイトの制作者であることに対して,
        creatorはリンク先のコンテンツ(内容)の制作者であることです.
      </p>
      <Quote
        text="twitter:site @username of website. twitter:creator @username of content creator."
        sourceName="Twitter"
        source="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup"
      />
    </div>
  );
};

const SettingImage = () => {
  const code_image: string =
    '<meta name="twitter:image" content="link_to_image" />';
  const code_image_alt: string =
    '<meta name="twitter:image:alt" content="私のブログで使う予定のTwitterカード" />';
  return (
    <div>
      <h2 className="subtitle">3. 画像の設定の設定</h2>
      <p>
        コンテンツの内容を設定するには
        <span className="inline-code">twitter:image</span>と
        <span className="inline-code">twitter:alt</span>を編集します.
        どちらの項目も任意です.
      </p>
      <p>
        imageはそのページを表現するような画像のURLを設定します.
        複数のページに渡るような一般的な画像,
        すなわちサイトのロゴや著者の写真等の使用は非推奨です.
        アスペクト比は2:1の300*157ピクセルから4096*4096ピクセルまで対応しています.
        ファイルのサイズは5MB以下でフォーマットはJPG, PNG, WEBP,
        GIFが対応しています.
        解像度の高い画像ですと5MBを超える可能性があるので事前に確認しておくと良いと思われます.
      </p>
      <Quote
        text="A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported."
        sourceName="Twitter"
        source="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image"
      />
      <p>
        今回は, <Link href="https://shun-developer.com/blog">自分のブログ</Link>
        に載せる予定の画像を用意しました.
        <br />
        <br />
        <Image
          src="/twitter_card.png"
          alt="Picture of the author"
          width={2048}
          height={1024}
        />
      </p>
      <p>
        image:altは画像を視覚に障がいを持つユーザーに伝える為の説明です.
        最大で420文字まで記述することができます.
      </p>
      <Quote
        text="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."
        sourceName="Twitter"
        source="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image"
      />
      <p>
        このサイトではコードはそれぞれ以下の様になりました.
        (画像は絶対パスで記載することにお気を付けください)
      </p>
      <code>
        {code_image}
        <br />
        {code_image_alt}
      </code>
    </div>
  );
};

const SettingDescription = () => {
  const code_content1: string =
    '<meta name="twitter:title" content="Twitter Cardの使い方" />';
  const code_content2: string =
    '<meta name="twitter:description"content="Twitter Cardを自分のブログに導入してみたいと思い練習で作成しました. 下記に導入のやり方を書いたので良ければご参照下さい"/>';
  return (
    <div>
      <h2 className="subtitle">4. 紹介文の設定</h2>
      <p>
        コンテンツの内容を設定するには
        <span className="inline-code">twitter:title</span>と
        <span className="inline-code">twitter:description</span>を編集します.
        尚, titleは必須項目です.
        <br />
        このサイトでは以下の様に設定をしています.
      </p>
      <code>
        {code_content1}
        <br />
        {code_content2}
      </code>
      <p>
        titleの文字数の制限ですが, Twitter側で切り捨てが行われます.
        AndroidとiOSでは2行までで, Webでは1行です.
      </p>
      <Quote
        text="A concise title for the related content.Platform specific behaviors: iOS, Android: Truncated to two lines in timeline and expanded Tweet Web: Truncated to one line in timeline and expanded Tweet"
        sourceName="Twitter"
        source="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image"
      />
      <p>
        descriptionの文字数の制限ですが,
        スマートフォンとWebで挙動が大きく異なります. AndroidとiOSでは表示されず,
        Webでは1行です.
      </p>
    </div>
  );
};

const Conclusion = () => {
  return (
    <div>
      <h2 className="subtitle">5. 最後に</h2>
      <p>
        本ページはTwitter
        Cardの日本語版サイトの説明が英語版に比べ不足していたため作成しました.
        誤字脱字, 間違い等ありましたら@ShunDeveloper (Twitter or
        Github)までご連絡下さい.
      </p>
    </div>
  );
};

export default Home;
