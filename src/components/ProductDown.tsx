import { useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

export default function ProductDown() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen  px-7 py-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="mb-2">
            <h1 className="text-4xl font-bold tracking-wider">
              <span className="text-gray-400">GOD</span>
              <span className="text-blue-400 mx-2">OF</span>
              <span className="text-gray-400">WAR</span>
            </h1>
          </div>
          <p className="text-blue-400 text-lg tracking-widest font-light">
            RAGNARÖK
          </p>
        </div>

        <div className="border border-gray-600 rounded-lg p-4 mb-6 flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center">
              <span className="text-xs font-bold text-white">18+</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-white text-sm">18+</p>
            <p className="text-gray-400 text-sm">
              Extreme Violence, Strong Language
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 text-sm font-medium">Base Game</p>
        </div>

        <div className="mb-6">
          <p className="text-white text-3xl font-bold">₹3,999</p>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-black font-bold py-3 px-4 rounded-lg mb-3 flex items-center justify-center gap-2 transition-colors">
          <span>Save Now</span>
          <CiShoppingCart size={20} />
        </button>

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="w-full bg-gray-700 hover:bg-gray-600 active:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg mb-8 flex items-center justify-center gap-2 transition-colors"
        >
          <CiHeart
            className={`w-7 h-7 ${true ? "text-red-500 " : "text-gray-400"}`}
          />{" "}
          <span>Wishlist</span>
        </button>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">Epic Rewards</p>
            <div className="flex items-center gap-2">
              <p className="text-white font-medium text-sm">Earn 5% Back</p>
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 pb-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">Refund Type</p>
            <div className="flex items-center gap-2">
              <p className="text-white text-sm">Self-Refundable</p>
              <span className="text-gray-500 cursor-help">?</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-1">Developer</p>
          <p className="text-white text-sm font-medium">
            Santa Monica Studio, Jetpack Interactive
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1">Publisher</p>
          <p className="text-white text-sm font-medium">
            PlayStation Publishing LLC
          </p>
        </div>
      </div>
    </div>
  );
}
