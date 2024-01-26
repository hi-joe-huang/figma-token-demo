/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      asset: {
        font: {
          roboto: {
            400: {
              normal: "fonts/roboto-V20-latin-regular",
              italic: "fonts/roboto-V20-latin-italic"
            },
            700: {
              normal: "fonts/roboto-V20-latin-700",
              italic: "fonts/roboto-V20-latin-700italic"
            }
          }
        }
      },
      hiSkioThemeLight: {
        color: {
          teal: {
            50: "#eefafd",
            100: "#d8eff5",
            200: "#c3e5ed",
            300: "#98cfdd",
            400: "#6dbacc",
            500: "#42a4bc",
            600: "#178fac",
            700: "#12728a",
            800: "#0e5667",
            900: "#0b4857"
          },
          yellow: {
            50: "#fff7ea",
            100: "#ffe7c1",
            200: "#ffd798",
            300: "#ffc870",
            400: "#ffb847",
            500: "#ffa81d",
            600: "#dc9018",
            700: "#b97912",
            800: "#97610c",
            900: "#744a06"
          },
          red: {
            50: "#fbe8e8",
            100: "#f6c6c6",
            200: "#f1a7a7",
            300: "#ed8988",
            400: "#ec6262",
            500: "#e34a4a",
            600: "#cb3f3e",
            700: "#b33433",
            800: "#9a2827",
            900: "#821d1c"
          },
          gray: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#f0f0f0",
            300: "#d9d9d9",
            400: "#bfbfbf",
            500: "#8c8c8c",
            600: "#595959",
            700: "#434343",
            800: "#262626",
            900: "#141414"
          },
          green: {
            50: "#cdece8",
            100: "#b0dcd6",
            200: "#92cbc3",
            300: "#75bbb1",
            400: "#4bac9d",
            500: "#3a9b8c",
            600: "#2e7b70",
            700: "#235c54",
            800: "#173e38",
            900: "#112e2a"
          },
          blue: {
            50: "#e7f2fb",
            100: "#c9e3f5",
            200: "#a5c6dd",
            300: "#82aac6",
            400: "#5e8dae",
            500: "#3b7197",
            600: "#17547f",
            700: "#124366",
            800: "#0e324c",
            900: "#092233"
          }
        }
      },
      hiSkioLocaleZhTw: {
        test: {
          bodyText: "隊他我眼難  一兒生……計已在吃靈不亞上機你天，發心何分多機對有人？邊說這，當的速無院最理春位母大原院些各以？其的全整……個足手軍好點高銷頭。  種告情的能以進致的：多未道然們微無區禮，樣管帶女？望上就委班外家：數中覺息製人力身四為兩還我創他的久的然再術。  景愛論紙，中廣不登上究因受天出利？",
          pangram: "南去經三國，東來過五湖，永東國酬愛鬱靈鷹袋"
        }
      },
      hiSkioLocaleEn: {
        test: {
          bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisi et lacus varius rhoncus. Morbi sed metus luctus, maximus augue id, viverra ex. Mauris lacinia lectus nec elit viverra tempor. Fusce viverra molestie velit finibus pellentesque. Praesent pharetra lacinia nulla, ac consectetur est condimentum id. Ut euismod magna vitae purus iaculis dapibus. Vivamus magna turpis, lacinia vel posuere non, condimentum et sem. Etiam vestibulum eget diam non porta. ",
          pangram: "The quick brown fox jumps over the lazy dog"
        }
      },
      hiSkioTokensDefault: {
        screen: {
          sm: "40rem",
          md: "48rem",
          lg: "64rem",
          xl: "80rem",
      "2xl": "96rem"
        },
        borderRadius: {
          none: "0rem",
          sm: "0.125rem",
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
          full: "624.9375rem"
        },
        fontSize: {
          xs: "0.75rem",
          sm: "0.875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "9rem"
        },
        maxWidth: {
          0: "0rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
        },
        opacity: {
          0: "0rem",
          5: "0.3125rem",
          10: "0.625rem",
          15: "0.9375rem",
          20: "1.25rem",
          25: "1.5625rem",
          30: "1.875rem",
          35: "2.1875rem",
          40: "2.5rem",
          45: "2.8125rem",
          50: "3.125rem",
          55: "3.4375rem",
          60: "3.75rem",
          65: "4.0625rem",
          70: "4.375rem",
          75: "4.6875rem",
          80: "5rem",
          85: "5.3125rem",
          90: "5.625rem",
          95: "5.9375rem",
          100: "6.25rem"
        },
        spacing: {
          0: "0rem",
          1: "0.25rem",
          2: "0.5rem",
          3: "0.75rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          11: "2.75rem",
          12: "3rem",
          14: "3.5rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          28: "7rem",
          32: "8rem",
          36: "9rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          72: "18rem",
          80: "20rem",
          96: "24rem",
          px: "0.0625rem",
          0_5: "0.125rem",
          1_5: "0.375rem",
          2_5: "0.625rem",
          3_5: "0.875rem"
        },
        skew: {
          0: "0rem",
          1: "0.0625rem",
          2: "0.125rem",
          3: "0.1875rem",
          6: "0.375rem",
          12: "0.75rem"
        },
        borderWidth: {
          0: "0rem",
          1: "0.0625rem",
          2: "0.125rem",
          4: "0.25rem",
          8: "0.5rem"
        },
        blur: {
          none: "0rem",
          sm: "0.25rem",
          DEFAULT: "0.5rem",
          md: "0.75rem",
          lg: "1rem",
          xl: "1.5rem",
      "2xl": "2.5rem",
      "3xl": "4rem"
        }
      }
    },
  },
}