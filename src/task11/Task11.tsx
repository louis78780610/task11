import { Box, Button, Divider, Link, Typography } from "@mui/material";
import {
  logo,
  mainvisualPC,
  products1,
  products2,
  resMainvisual,
  resProducts1,
  resProducts2,
} from "../images/task11Images";
import Reveal from "./Reveal";

// ===================================================================
// サイトに表示する文章・データはこの上部にまとめています。
// 文言を直したいときは基本的にこのあたりを編集すればOKです。
// ===================================================================

// このサイト全体で使う明朝体フォント（同じ指定を何度も書かずに済むようにまとめています）
const MINCHO =
  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif';

// ナビゲーション（href の #xxx は各セクションのidに対応）
const NAV_ITEMS = [
  { label: "店舗のご案内", href: "#store" },
  { label: "商品のご紹介", href: "#products" },
  { label: "お知らせ", href: "#news" },
];

// お知らせ一覧（hideOnMobile: true の項目はスマホでは非表示）
const NEWS_ITEMS = [
  { date: "2025.03.01", title: "春の新作コレクションを発売", hideOnMobile: true },
  { date: "2025.04.10", title: "雑誌『和美』に掲載されました", hideOnMobile: true },
  { date: "2025.05.20", title: "母の日ギフトのご予約を開始", hideOnMobile: false },
  { date: "2025.06.15", title: "オンラインストアをリニューアル", hideOnMobile: false },
  { date: "2025.07.01", title: "表参道店をオープンしました", hideOnMobile: false },
];

// 商品紹介（画像・見出し・キャプション）
const PRODUCTS = [
  {
    title: "新しい価値の創造",
    subtitle: "Create New Values",
    image: products1,
    resImage: resProducts1,
    captionColor: "rgba(249, 233, 6, 0.7)", // 半透明の黄色
    caption: ["一粒から生まれる、", "新しいおいしさ。"],
    reverse: false, // 画像が左・文字が右
  },
  {
    title: "科学と技術の調和",
    subtitle: "Science & Technology",
    image: products2,
    resImage: resProducts2,
    captionColor: "rgba(149, 42, 38, 0.7)", // 半透明の赤
    caption: ["伝統と科学が出会い、", "本物の味になる。"],
    reverse: true, // 文字が左・画像が右
  },
];

// 店舗情報
const STORE_INFO = [
  { label: "店名", value: "創作 六本木本店" },
  { label: "住所", value: "〒106-0032 東京都港区六本木5-9-9" },
  { label: "電話", value: "03-1234-5678" },
  { label: "営業時間", value: "11:00 – 20:00（L.O. 19:30）" },
  { label: "定休日", value: "不定休" },
  {
    label: "アクセス",
    value: "東京メトロ日比谷線・都営大江戸線「六本木駅」より徒歩5分",
  },
];

const Task11 = () => {
  return (
    <Box>
      {/* メインと文字 */}
      <Box
        sx={{
          position: "relative",
          height: "600px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "600px",
            backgroundImage: {
              xs: `url(${resMainvisual})`,
              md: `url(${mainvisualPC})`,
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* キャッチコピー（黒い余白部分に縦書きで重ねる） */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "80px", md: "110px" },
            left: { xs: "20px", md: "120px" },
            display: "flex",
          }}
        >
          <Typography
            sx={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              fontFamily: MINCHO,
              fontSize: { xs: "24px", md: "32px" },
              color: "#FFFFFF",
              letterSpacing: "0.1em",
              lineHeight: 1.4,
            }}
          >
            ひと粒に、創作を。
          </Typography>
          <Typography
            sx={{
              writingMode: "vertical-rl",
              textOrientation: "upright", // 英字も1文字ずつ縦向き（正立）にする
              fontFamily: MINCHO,
              fontSize: { xs: "11px", md: "13px" },
              color: "#FFFFFF",
              letterSpacing: "0.15em",
              marginTop: "10px",
              opacity: 0.85,
            }}
          >
            The Art of Pistachio
          </Typography>
        </Box>

        {/* 左側のボタン（画像の上に重ねる） */}
        <Box
          sx={{
            width: "52px",
            height: "236px",
            backgroundColor: "#707070",
            position: "absolute",
            bottom: { xs: "20px", md: "30px" },
            left: { xs: "20px", md: "40px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <Button
            variant="text"
            sx={{
              width: "100%",
              minWidth: "52px",
              height: "100%",
              padding: "0",
              writingMode: "vertical-rl", // 縦書きにする
              textOrientation: "upright", // 文字の向きを調整
              fontSize: "16px",
              fontFamily: MINCHO,
              color: "#fff", // テキスト色
              border: "1px solid #fff", // 白い枠線を追加
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#555", // ホバー時の背景色
              },
            }}
          >
            オンラインストアを見る
          </Button>
        </Box>
        {/* 右側のナビゲーションテキスト（画像の上に重ねる） */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "5%", md: "10%" },
            right: { xs: "20px", md: "80px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: "15px", md: "25px" },
            }}
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  textDecoration: "none",
                  fontFamily: MINCHO,
                  writingMode: "vertical-rl", // 縦書きにする
                  textOrientation: "upright", // 文字の向きを調整
                  // 3つ目（お知らせ）だけロゴとの間隔をあける
                  marginRight: index === NAV_ITEMS.length - 1 ? "35px" : "0",
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.6 },
                }}
              >
                {item.label}
              </Link>
            ))}
            <Box
              sx={{
                width: "40px",
                height: "91px",
                backgroundImage: `url(${logo})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* コンテンツ */}
      <Box
        id="news"
        sx={{
          padding: { xs: "80px 20px 110px", md: "180px 200px 160px " },
          backgroundColor: "#E6E2D7",
          scrollMarginTop: "20px",
        }}
      >
        {/* お知らせ */}
        <Reveal>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-end", md: "center" },
              alignItems: "flex-start",
              marginLeft: { xs: "0", md: "380px" },
            }}
          >
            {/* お知らせの各項目（配列から自動生成） */}
            {NEWS_ITEMS.map((news, index) => (
              <Box
                key={news.title}
                sx={{
                  display: news.hideOnMobile
                    ? { xs: "none", md: "flex" }
                    : "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginTop: { xs: "20px", md: "80px" },
                }}
              >
                {/* 項目の左側の縦線 */}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    height: "291.5px",
                    borderColor: "#000000",
                    marginRight: { xs: "12px", md: "30px" },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    margin: "auto 0",
                  }}
                >
                  <Typography
                    sx={{
                      writingMode: "vertical-rl", // 縦書きにする
                      textOrientation: "upright", // 文字の回転を防ぐ
                      fontFamily: MINCHO,
                      fontSize: "16px",
                      color: "#000",
                    }}
                  >
                    {news.title}
                  </Typography>
                  <Typography
                    sx={{
                      writingMode: "vertical-rl", // 縦書きにする
                      fontFamily: MINCHO,
                      fontSize: "9px",
                      color: "#000",
                      marginRight: { xs: "12px", md: "30px" },
                    }}
                  >
                    {news.date}
                  </Typography>
                </Box>
                {/* 最後の項目の右側にも縦線を入れて見出しと区切る */}
                {index === NEWS_ITEMS.length - 1 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      height: "291.5px",
                      borderColor: "#000000",
                      marginRight: { xs: "30px", md: "100px" },
                    }}
                  />
                )}
              </Box>
            ))}
            <Typography
              sx={{
                writingMode: "vertical-rl", // 縦書きにする
                textOrientation: "upright", // 文字の回転を防ぐ
                fontFamily: MINCHO,
                fontSize: { xs: "28px", md: "36px" },
                color: "#000",
              }}
            >
              お知らせ
            </Typography>
            <Typography
              sx={{
                writingMode: "vertical-rl", // 縦書きにする
                textOrientation: "upright", // 英字も1文字ずつ縦向き（正立）にする
                fontFamily: MINCHO,
                fontSize: "16px",
                color: "#000",
              }}
            >
              News
            </Typography>
          </Box>
        </Reveal>

        {/* 商品紹介（新しい価値の創造／科学と技術の調和） */}
        <Box id="products" sx={{ scrollMarginTop: "20px" }}>
          {PRODUCTS.map((product) => (
            <Reveal key={product.title}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  // 1つ目は右寄せ、2つ目は左寄せに配置
                  marginLeft: product.reverse ? "0" : { xs: "0", md: "280px" },
                  marginRight: product.reverse ? { xs: "0", md: "280px" } : "0",
                  marginTop: { xs: "80px", md: "180px" },
                }}
              >
                {/* 文字が左（reverse=true）のときは、先に見出しを置く */}
                {product.reverse && (
                  <ProductHeading
                    title={product.title}
                    subtitle={product.subtitle}
                  />
                )}

                {/* 画像＋キャプション */}
                <Box
                  sx={{
                    width: { xs: "301px", md: "639px" },
                    height: { xs: "194px", md: "426px" },
                    backgroundImage: {
                      xs: `url(${product.resImage})`,
                      md: `url(${product.image})`,
                    },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    margin: product.reverse
                      ? { xs: "70px 0 0 10px", md: "100px 0 0 20px" }
                      : { xs: "70px 10px 0 0", md: "100px 20px 0 0" },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "192px", md: "358px" },
                      height: { xs: "90px", md: "132px" },
                      position: "absolute",
                      top: { xs: "124px", md: "314px" },
                      // reverse のときは右下、通常は左下に飛び出させる
                      left: product.reverse ? "auto" : "-20px",
                      right: product.reverse ? "-20px" : "auto",
                      backgroundColor: product.captionColor,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {product.caption.map((line) => (
                      <Typography
                        key={line}
                        sx={{
                          textAlign: "center",
                          fontSize: { xs: "14px", md: "16px" },
                          fontFamily: MINCHO,
                          color: "#FFFFFF",
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                {/* 文字が右（reverse=false）のときは、画像の後に見出しを置く */}
                {!product.reverse && (
                  <ProductHeading
                    title={product.title}
                    subtitle={product.subtitle}
                  />
                )}
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>

      {/* 店舗情報 */}
      <Box
        id="store"
        sx={{
          backgroundColor: "#FFFFFF",
          padding: { xs: "80px 20px", md: "120px 200px" },
          scrollMarginTop: "20px",
        }}
      >
        <Reveal>
          {/* 見出し（縦書き）＋詳細＋地図を横一列に並べる */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "40px", md: "56px" },
              flexWrap: "wrap",
            }}
          >
            {/* 見出し＋詳細をひとまとめにする（折り返しても離れないように） */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: "24px", md: "40px" },
              }}
            >
              {/* 見出し */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  fontFamily: MINCHO,
                  fontSize: { xs: "28px", md: "36px" },
                  color: "#000",
                }}
              >
                店舗情報
              </Typography>
              <Typography
                sx={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright", // 英字も1文字ずつ縦向き（正立）にする
                  fontFamily: MINCHO,
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                Store
              </Typography>
            </Box>

            {/* 店舗の詳細（配列から自動生成） */}
            <Box sx={{ width: "100%", maxWidth: { md: "360px" } }}>
              {STORE_INFO.map((row) => (
                <Box
                  key={row.label}
                  sx={{
                    display: "flex",
                    padding: "14px 0",
                    borderBottom: "1px solid #E0E0E0",
                  }}
                >
                  <Typography
                    sx={{
                      width: "88px",
                      flexShrink: 0,
                      fontFamily: MINCHO,
                      fontSize: "14px",
                      color: "#888",
                    }}
                  >
                    {row.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: MINCHO,
                      fontSize: "14px",
                      color: "#000",
                      lineHeight: 1.7,
                    }}
                  >
                    {row.value}
                  </Typography>
                </Box>
              ))}
            </Box>
            </Box>

            {/* 地図（実際に表示されるGoogleマップの埋め込み） */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { md: "480px" },
                height: { xs: "300px", md: "360px" },
              }}
            >
              <iframe
                title="店舗の地図"
                src="https://maps.google.com/maps?q=Roppongi%2C%20Minato%2C%20Tokyo&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </Reveal>
      </Box>

      {/* フッター手前 */}
      <Box
        sx={{
          backgroundColor: "#000000",
          padding: { xs: "40px 20px 10px", md: "80px 0 0 12px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: { xs: "40px", md: "0" },
          }}
        >
          <Box>
            <Typography
              sx={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
                fontFamily: MINCHO,
                fontSize: { xs: "14px", md: "16px" },
                color: "#FFFFFF",
                marginLeft: { xs: "0", md: "30px" },
              }}
            >
              オンラインストアを見る｜お問い合わせ
            </Typography>
          </Box>
          {/* 右側 */}
          <Box
            sx={{
              marginRight: { xs: "0", md: "80px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href="#store"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "14px", md: "16px" },
                  textDecoration: "none",
                  fontFamily: MINCHO,
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  marginRight: { xs: "10px", md: "25px" },
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.6 },
                }}
              >
                店舗のご案内
              </Link>
              <Link
                href="#products"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", md: "16px" },
                  textDecoration: "none",
                  fontFamily: MINCHO,
                  writingMode: "vertical-rl", // 縦書きにする
                  textOrientation: "upright", // 文字の向きを調整
                  marginRight: { xs: "10px", md: "25px" },
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.6 },
                }}
              >
                商品のご紹介
              </Link>
              <Link
                href="#news"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", md: "16px" },
                  textDecoration: "none",
                  fontFamily: MINCHO,
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  marginRight: { xs: "25px", md: "60px" },
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.6 },
                }}
              >
                お知らせ
              </Link>
              <Link
                href="tel:0312345678"
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textDecoration: "none",
                  fontFamily: MINCHO,
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.6 },
                }}
              >
                電話:03-1234-5678
              </Link>
              <Link
                href="#store"
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textDecoration: "none",
                  fontFamily: MINCHO,
                  writingMode: "vertical-rl", // 縦書きにする
                  textOrientation: "upright", // 文字の向きを調整
                  marginRight: { xs: "25px", md: "60px" },
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.6 },
                }}
              >
                〒106-0032 東京都港区六本木5-9-9
              </Link>
              <Box
                sx={{
                  width: "40px",
                  height: "91px",
                  backgroundImage: `url(${logo})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* フッター */}
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
          height: "70px",
        }}
      >
        <Typography
          sx={{
            fontSize: "10px",
            height: "10px",
            color: "#FFFFFF",
          }}
        >
          © SOUSAKU
        </Typography>
      </Box>
    </Box>
  );
};

// 商品セクションの見出し（「新しい価値の創造 / Create New Values」の部分）。
// 縦書きの日本語見出しと英語サブタイトルをまとめた小さな部品です。
type ProductHeadingProps = { title: string; subtitle: string };

const ProductHeading = ({ title, subtitle }: ProductHeadingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          writingMode: "vertical-rl", // 縦書きにする
          textOrientation: "upright", // 文字の回転を防ぐ
          fontFamily: MINCHO,
          fontSize: { xs: "24px", md: "36px" },
          color: "#000",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          writingMode: "vertical-rl", // 縦書きにする
          textOrientation: "upright", // 英字も1文字ずつ縦向き（正立）にする
          fontFamily: MINCHO,
          fontSize: "16px",
          color: "#000",
          display: { xs: "none", md: "block" },
          marginTop: "18px",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Task11;
