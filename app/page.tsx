import {
  LeftImageArticles,
  NonImageArticles,
  RightImageArticles,
} from "@/components/articles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl font-bold my-5 flex justify-center">
        e-スポーツクラブ
      </h1>
      <RightImageArticles
        image="/images/school_fes.jpg"
        title="文化祭"
        alt="文化祭の様子"
      >
        「音ゲー部門」と「格ゲー部門」でそれぞれ体験会を開いています。誰でも自由に参加することができます。写真は「Street
        Fighter
        V」という格闘ゲームの対戦の体験です。昨年は小学生から学生、大人まで多くの人が体験してくれました。今年は両方の部門ともさらにグレードアップして、体験会に加えそれぞれ楽しい企画を計画しています。ぜひ遊びに来てください！
      </RightImageArticles>
      <LeftImageArticles
        image="/images/class_match.jpg"
        title="クラスマッチ"
        alt="クラスマッチの様子"
      >
        クラスマッチに「太鼓の達人」という音楽ゲームの部門を加え企画運営を始めてから今年で3年目となります。「ふつう・むずかしい」「おに」部門でそれぞれ腕を競います。年々参加者も観戦者も増えており、規模が拡大しています。楽しく参加できることは勿論、他の参加者の素晴らしいプレイを見たり大会専用のプレゼンや創作譜面でのプレイを見たりすることも魅力です。
      </LeftImageArticles>
      <NonImageArticles title="その他">
        普段は各種目での練習会や、コントローラーのメンテナンス、大会準備、勉強会、様々な講習会などの活動を行っております。ランキングやe-sports大会への参加も計画実行しています。
      </NonImageArticles>
    </main>
  );
}
