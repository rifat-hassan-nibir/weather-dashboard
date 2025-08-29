import { useState } from "react";
import FavoriteLocation from "./FavoriteLocation";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <FavoriteLocation onShow={() => setShowModal(!showModal)} />
          {/* Modal  */}
          {showModal && <FavoriteListModal />}
        </div>
      </nav>
    </header>
  );
}
