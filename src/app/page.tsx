export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1736018546394-8787cf3ffd28?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Xurya</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <button className="border rounded-full px-4 py-2">Log in</button>
          <button className="bg-green-500 text-white rounded-full px-4 py-2">Get in touch</button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">New Energy for the Future</h1>
        <p className="mb-8">#1 Energy provider in the world</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black rounded-full px-4 py-2">Get in touch</button>
          <button className="bg-white text-black rounded-full px-4 py-2">Our services</button>
        </div>
      </main>
      <footer className="flex justify-around p-6 bg-white text-black">
        <div>
          <h2 className="text-2xl font-bold">6 mil</h2>
          <p>The company&apos;s annual net income</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">315</h2>
          <p>Projects completed worldwide</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">120K</h2>
          <p>Employees work in all parts of the world</p>
        </div>
      </footer>
    </div>
  );
}
