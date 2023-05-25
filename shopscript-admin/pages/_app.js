import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      // Configure AOS options here
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the element when animation starts
      easing: "ease", // Easing function for the animation
      once: true, // Whether the animation should only happen once
    });
    return () => {
      AOS.refresh(); // Reset AOS when navigating to a new page
    };
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      AOS.refresh(); // Refresh AOS on route change to apply animations to new elements
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        AOS.refresh(); // Clean up event listener on unmount
      });
    };
  }, [router.events]);
  return (
    <SessionProvider session={session}>
      <Head>
        <title>ShopScript</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
