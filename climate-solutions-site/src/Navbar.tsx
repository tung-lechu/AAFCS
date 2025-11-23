import { Navbar } from './Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
         <h1 className="text-3xl font-bold text-gray-800">Welcome to the Site</h1>
         <p className="mt-4 text-gray-600">Content goes here...</p>
      </main>
    </div>
  );
}

export default App;