const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => window.location.reload()}>

          AI Investment Research Agent

        </h1>

      </div>
    </nav>
  );
};

export default Navbar;