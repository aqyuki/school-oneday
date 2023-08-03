import Link from "next/link";

const Policy = () => {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl font-bold my-5 flex justify-center">Policy</h1>

      <article className="hero my-4 h-64">
        <div>
          <h2 className="text-3xl">著作権並びに肖像権について</h2>
          <div className="my-3">
            <p className="text-base">
              当ページにおいて掲載している画像並びに記事の転載をすべて禁止させていただきます。
            </p>
            <p className="text-base">
              また、このページのリンクやスクリーンショットなどをほかのSNSなどにアップロードする行為も禁止させていただきます。
            </p>
          </div>
        </div>
      </article>
      <article className="hero my-4 h-64">
        <div>
          <h2 className="text-3xl">免責事項</h2>
          <div className="my-3">
            <p className="text-base">
              当ページに掲載した内容によって生じたあらゆる損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </div>
        </div>
      </article>
      <article className="hero my-4 h-64">
        <div>
          <h2 className="text-3xl">その他</h2>
          <div className="my-3">
            <p className="text-base">
              このページに関して、お問い合わせ等ありましたら以下のメールアドレスに対して連絡をください。迅速に対応させていただきます。また、いたずらや嫌がらせ等の行為に対しても適切な対応を取らせていただきます。
            </p>
            <a href="mailto:b21095&#64kagoshima.kosen-ac.jp">
              E-mail : b21095@kagoshima.kosen-ac.jp
            </a>
          </div>
        </div>
      </article>
      <div className="hero">
        <Link href="/" className="btn">
          ホームへ
        </Link>
      </div>
    </main>
  );
};

export default Policy;
