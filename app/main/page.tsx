import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeadBanner from '../components/HeadBanner';
import MainPage from '../views/Main';

const page = () => {
  return (
    <div>
      <HeadBanner />
      <Header />
      <div className="max-w-7xl mx-auto min-h-[800px]">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default page