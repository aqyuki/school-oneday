import { memo } from "react";

const OneDayFooter = memo(() => {
  return (
    <footer className="footer p-10">
      <div>
        <span className="footer-title">免責事項</span>
        <div>
          <p>
            当ページで掲載している文章や画像などにつきましては、無断転載することを禁止します。
          </p>
          <p>
            当ページは著作権や肖像権の侵害を目的としたものではありません。
            <br />
            著作権や肖像権に関して問題がございましたら、"b21095@kagoshima.kosen-ac.jp"までご連絡ください。迅速に対応させていただきます。
          </p>
        </div>
        <div>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </div>
      </div>
      <div>
        <span className="footer-title">制作</span>
        <div>
          <p>鹿児島高専所属 3年電子制御工学科 木佐木</p>
          <p>e-スポーツクラブ フリーランス(Web系)</p>
        </div>
      </div>
    </footer>
  );
});

export default OneDayFooter;
