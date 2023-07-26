import Link from "next/link";
import { memo } from "react";

const OneDayFooter = memo(() => {
  return (
    <footer className="footer p-10">
      <div>
        <span className="footer-title">Policy</span>
        <Link href="/policy">免責事項</Link>
      </div>
      <div>
        <span className="footer-title">制作</span>
        <div>
          <p>鹿児島高専所属 3年電子制御工学科 木佐木</p>
          <p>e-スポーツクラブ フリーランス</p>
        </div>
      </div>
    </footer>
  );
});

export default OneDayFooter;
