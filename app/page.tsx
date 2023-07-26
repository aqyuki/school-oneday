import { LeftImageArticles, RightImageArticles } from "@/components/articles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold my-5 flex justify-center">
        e-スポーツクラブ
      </h1>
      <RightImageArticles
        image="/images/school_fes.jpg"
        title="文化祭"
        alt="文化祭の様子"
      >
        「音ゲー部門」と「格ゲー部門」でそれぞれ体験会を開いています。誰でも自由に参加する事ができます。今年もやりますので、ぜひ遊びに来てください！
      </RightImageArticles>
      <LeftImageArticles
        image="/images/class_match.jpg"
        title="クラスマッチ"
        alt="クラスマッチの様子"
      >
        「太鼓の達人」の「ふつう・むずかしい」「おに」部門でそれぞれ腕を競います。年々参加者も観戦者も増え、規模が拡大しています。
      </LeftImageArticles>
    </main>
  );
}
