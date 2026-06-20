import { Friends } from "./FriendsSection";
import { MostPopular } from "./MostPopular";
import { Wishlist } from "./Whislist";

export const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex justify-between items-center mb-4">
    <span className="text-base font-semibold text-white">{title}</span>
  </div>
);

export const Body = () => {
  return (
    <section className=" rounded-2xl p-6 text-white space-y-7">
      <MostPopular />
      <div className="grid grid-cols-[1fr_220px] gap-5">
        <Wishlist />
        <Friends />
      </div>
    </section>
  );
};
