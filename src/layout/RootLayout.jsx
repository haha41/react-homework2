import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

function RootLayout(props) {
  return (
    <>
      <Header />
        <main>
          {props.children}
        </main>
      <Footer />
    </>
  );
}

export default RootLayout;