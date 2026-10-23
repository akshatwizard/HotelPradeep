import Script from "next/script";

export default function Integrations() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9FXDWDJ45Z"
        strategy="lazyOnload"
      />
      <Script
        id="hotel-analytics"
        strategy="lazyOnload"
      >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-9FXDWDJ45Z');`}</Script>
      <Script
        id="hotel-chat"
        strategy="lazyOnload"
      >{`window.Tawk_API=window.Tawk_API||{};window.Tawk_LoadStart=new Date();(function(){if(document.getElementById('hotel-tawk'))return;var s=document.createElement('script');s.id='hotel-tawk';s.async=true;s.src='https://embed.tawk.to/67c94118703ff01909ccb629/1ill2ciet';s.charset='UTF-8';s.setAttribute('crossorigin','*');document.head.appendChild(s);})();`}</Script>
    </>
  );
}
