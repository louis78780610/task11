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
            <Link
              href="#"
              sx={{
                color: "#fff",
                fontSize: "16px",
                textDecoration: "none",
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                writingMode: "vertical-rl", // 縦書きにする
                textOrientation: "upright", // 文字の向きを調整
              }}
            >
              店舗のご案内
            </Link>
            <Link
              href="#"
              sx={{
                color: "#fff",
                fontSize: "16px",
                textDecoration: "none",
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                writingMode: "vertical-rl", // 縦書きにする
                textOrientation: "upright", // 文字の向きを調整
              }}
            >
              商品のご紹介
            </Link>
            <Link
              href="#"
              sx={{
                color: "#fff",
                fontSize: "16px",
                textDecoration: "none",
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                writingMode: "vertical-rl", // 縦書きにする
                textOrientation: "upright", // 文字の向きを調整
                marginRight: "35px",
              }}
            >
              お知らせ
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

      {/* コンテンツ */}
      {/* お知らせ */}
      <Box
        sx={{
          padding: { xs: "80px 20px 110px", md: "180px 200px 160px " },
          backgroundColor: "#E6E2D7",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-end", md: "center" },
            alignItems: "flex-start",
            marginLeft: { xs: "0", md: "380px" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: { xs: "20px", md: "80px" },
            }}
          >
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
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                タイトルタイトルタイトルタイトル
              </Typography>
              <Typography
                sx={{
                  writingMode: "vertical-rl", // 縦書きにする
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "9px",
                  color: "#000",
                  marginRight: "30px",
                }}
              >
                2021.01.01
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: { xs: "20px", md: "80px" },
            }}
          >
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
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                タイトルタイトルタイトルタイトル
              </Typography>
              <Typography
                sx={{
                  writingMode: "vertical-rl", // 縦書きにする
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "9px",
                  color: "#000",
                  marginRight: "30px",
                }}
              >
                2021.01.01
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: { xs: "20px", md: "80px" },
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "291.5px",
                borderColor: "#000000",
                marginRight: { xs: "5px", md: "30px" },
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
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                タイトルタイトルタイトルタイトル
              </Typography>
              <Typography
                sx={{
                  writingMode: "vertical-rl", // 縦書きにする
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "9px",
                  color: "#000",
                  marginRight: { xs: "12px", md: "30px" },
                }}
              >
                2021.01.01
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: { xs: "20px", md: "80px" },
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "291.5px",
                borderColor: "#000000",
                marginRight: { xs: "5px", md: "30px" },
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
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                タイトルタイトルタイトルタイトル
              </Typography>
              <Typography
                sx={{
                  writingMode: "vertical-rl", // 縦書きにする
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "9px",
                  color: "#000",
                  marginRight: { xs: "12px", md: "30px" },
                }}
              >
                2021.01.01
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: { xs: "20px", md: "80px" },
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "291.5px",
                borderColor: "#000000",
                marginRight: { xs: "5px", md: "30px" },
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
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                タイトルタイトルタイトルタイトル
              </Typography>
              <Typography
                sx={{
                  writingMode: "vertical-rl", // 縦書きにする
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  fontSize: "9px",
                  color: "#000",
                  marginRight: { xs: "12px", md: "30px" },
                }}
              >
                2021.01.01
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "291.5px",
                borderColor: "#000000",
                marginRight: { xs: "30px", md: "100px" },
              }}
            />
          </Box>
          <Typography
            sx={{
              writingMode: "vertical-rl", // 縦書きにする
              textOrientation: "upright", // 文字の回転を防ぐ
              fontFamily:
                '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
              fontSize: { xs: "28px", md: "36px" },
              color: "#000",
            }}
          >
            お知らせ
          </Typography>
          <Typography
            sx={{
              writingMode: "vertical-rl", // 縦書きにする
              fontFamily:
                '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
              fontSize: "16px",
              color: "#000",
            }}
          >
            News
          </Typography>
        </Box>

        {/* 新しい価値の創造 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: { xs: "0", md: "280px" },
            marginTop: { xs: "80px", md: "180px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "301px", md: "639px" },
              height: { xs: "194px", md: "426px" },
              backgroundImage: {
                xs: `url(${resProducts1})`,
                md: `url(${products1})`,
              },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              margin: { xs: "70px 10px 0 0", md: "100px 20px 0 0" },
            }}
          >
            <Box
              sx={{
                width: { xs: "192px", md: "358px" },
                height: { xs: "90px", md: "132px" },
                position: "absolute",
                top: { xs: "124px", md: "314px" },
                left: "-20px",
                backgroundColor: "rgba(249, 233, 6, 0.7)", // 半透明の黄色
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  color: "#FFFFFF",
                }}
              >
                テキストテキスト
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  color: "#FFFFFF",
                }}
              >
                テキストテキスト
              </Typography>
            </Box>
          </Box>
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
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                fontSize: { xs: "24px", md: "36px" },
                color: "#000",
              }}
            >
              新しい価値の創造
            </Typography>
            <Typography
              sx={{
                writingMode: "vertical-rl", // 縦書きにする
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                fontSize: "16px",
                color: "#000",
                display: { xs: "none", md: "block" },
                marginTop: "18px",
              }}
            >
              Create New Values
            </Typography>
          </Box>
        </Box>

        {/* 科学と技術の調和 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            marginRight: { xs: "0", md: "280px" },
            marginTop: { xs: "80px", md: "180px" },
          }}
        >
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
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                fontSize: { xs: "24px", md: "36px" },
                color: "#000",
              }}
            >
              科学と技術の調和
            </Typography>
            <Typography
              sx={{
                writingMode: "vertical-rl", // 縦書きにする
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                fontSize: "16px",
                color: "#000",
                display: { xs: "none", md: "block" },
                marginTop: "18px",
              }}
            >
              Science & Technology
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "301px", md: "639px" },
              height: { xs: "194px", md: "426px" },
              backgroundImage: {
                xs: `url(${resProducts2})`,
                md: `url(${products2})`,
              },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              margin: { xs: "70px 0 0 10px", md: "100px 0 0 20px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "192px", md: "358px" },
                height: { xs: "90px", md: "132px" },
                position: "absolute",
                top: { xs: "124px", md: "314px" },
                right: "-20px",
                backgroundColor: "rgba(149, 42, 38, 0.7)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  color: "#FFFFFF",
                }}
              >
                テキストテキスト
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  color: "#FFFFFF",
                }}
              >
                テキストテキスト
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Googleマップ */}
      <Box
        sx={{
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=ここにGoogleマップから取得したURLを貼り付けます"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
                fontFamily:
                  '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
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
                href="#"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "14px", md: "16px" },
                  textDecoration: "none",
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  marginRight: { xs: "10px", md: "25px" },
                }}
              >
                店舗のご案内
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", md: "16px" },
                  textDecoration: "none",
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  writingMode: "vertical-rl", // 縦書きにする
                  textOrientation: "upright", // 文字の向きを調整
                  marginRight: { xs: "10px", md: "25px" },
                }}
              >
                商品のご紹介
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", md: "16px" },
                  textDecoration: "none",
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  marginRight: { xs: "25px", md: "60px" },
                }}
              >
                お知らせ
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textDecoration: "none",
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
              >
                電話:03-ＸＸＸＸ-ＸＸＸＸ
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textDecoration: "none",
                  fontFamily:
                    '"游明朝", "Yu Mincho", "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", serif',
                  writingMode: "vertical-rl", // 縦書きにする
                  textOrientation: "upright", // 文字の向きを調整
                  marginRight: { xs: "25px", md: "60px" },
                }}
              >
                〒106-0032 東京都港区六本木5丁目×××××
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

export default Task11;
