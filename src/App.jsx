import RootLayout from '@/layout/RootLayout';
import Home from '@/pages/Home';

function App() {
  return (
    <div className="w-screen h-screen">
      <RootLayout>
        <Home />
      </RootLayout>
    </div>
  );
}

export default App;