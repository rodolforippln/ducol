import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>

          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="geo.country" content="BR" />

          <meta name="robots" content="index, follow" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="rights" content="© Copyright Ducol Engenharia 2021" />
          <meta name="description" content="Ducol Engenharia Ltda, empresa maranhense com profissionais dedicados e comprometidos com a solução de problemas nos diversos ramos de engenharia, construção e prestação de serviços." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ducol.com/br-pt" />
          <meta property="og:title" content="Ducol" />
          <meta property="og:description" content="Ducol Engenharia Ltda, empresa maranhense com profissionais dedicados e comprometidos com a solução de problemas nos diversos ramos de engenharia, construção e prestação de serviços." />
          <meta property="og:image" content="https://1.cms.s81c.com/sites/default/files/2021-02-17/20210215-ls-red-hat-cloud-2304x983.jpg" />
          <meta property="og:locale" content="pt-br" />

          <title>Ducol Engenharia Ltda</title>
          <link rel="canonical" href="https://www.ducol.com.br" />

          <link rel="shortcut icon" href="./favicon.ico" />


          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />


          <link rel="stylesheet" href="./assets/vendor/bootstrap-icons/font/bootstrap-icons.css" />
          <link rel="stylesheet" href="./assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css" />
          <link rel="stylesheet" href="./assets/vendor/aos/dist/aos.css" />
          <link rel="stylesheet" href="./assets/vendor/swiper/swiper-bundle.min.css" />

          <link rel="stylesheet" href="./assets/css/theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="./assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

          <script src="./assets/vendor/hs-header/dist/hs-header.min.js"></script>
          <script src="./assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js"></script>
          <script src="./assets/vendor/hs-show-animation/dist/hs-show-animation.min.js"></script>
          <script src="./assets/vendor/hs-go-to/dist/hs-go-to.min.js"></script>
          <script src="./assets/vendor/aos/dist/aos.js"></script>
          <script src="./assets/vendor/typed.js/lib/typed.min.js"></script>
          <script src="./assets/vendor/swiper/swiper-bundle.min.js"></script>
          <script src="./assets/js/theme.min.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
