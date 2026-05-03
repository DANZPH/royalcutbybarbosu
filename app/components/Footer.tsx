export default function Footer() {
  return (
    <footer className="w-full py-20 bg-[#121212] dark:bg-black border-t border-[#E7CC89]/10">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 max-w-[1380px] mx-auto gap-8">
        <div className="space-y-6">
          <div className="text-xl font-serif uppercase text-[#E7CC89]">Royal cut by Barbosu</div>
          <div className="font-serif text-sm tracking-wide text-[#E7CC89]">
            <p className="mb-1 text-gray-400">© Royal cut by Barbosu | CVR 46410351</p>
          </div>
          <div className="flex gap-4">
            <a className="text-[#E7CC89] hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-[#E7CC89] hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="font-label-caps uppercase text-white tracking-widest text-xs">Contact Us</h4>
            <ul className="font-serif text-sm tracking-wide space-y-2">
              <li>
                <a className="text-gray-400 hover:text-[#E7CC89] transition-all" href="mailto:royalcutbybarbosu@gmail.com">
                  royalcutbybarbosu@gmail.com
                </a>
              </li>
              <li className="text-gray-400">Kingosgade 3, 1623 København</li>
              <li className="text-gray-400">Phone: 91939263</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps uppercase text-white tracking-widest text-xs">Hours</h4>
            <ul className="font-serif text-sm tracking-wide space-y-2 text-gray-400">
              <li>Mon - Fri: 09:00 - 18:00</li>
              <li>Saturday: 10:00 - 16:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1380px] mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <p className="font-serif text-xs text-gray-600 uppercase tracking-widest text-center md:text-left">
          Elevated Grooming Excellence in København
        </p>
      </div>
    </footer>
  );
}
