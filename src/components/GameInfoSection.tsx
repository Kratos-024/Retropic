import { useState } from "react";
import { TrailerPlayer } from "./TrailerPlayer";
import ProductDown from "./ProductDown";
import { ScrollingSlideShow } from "./ScrollingSlideShow";

export const GameInfoSection = () => {
  const [selected, setSelected] = useState("");
  const [mediaLink, setMediaLink] = useState("");
  const mediaLinkHandler = (link: string) => {
    setMediaLink(link);
  };
  return (
    <section>
      <div className="mt-14 ">
        <div className=" flex flex-col gap-6.5 items-start">
          <h2 className=" text-white text-[48px] font-semibold">
            God Of War Ragnarok
          </h2>
          <div className=" flex gap-4 items-start">
            <p>⭐⭐⭐⭐⭐ 4.9</p>
            <p>Great for Begginers</p>
            <p>🌐Diverse Characters</p>
          </div>
        </div>

        <ul className="flex items-start mt-6 mb-7 gap-5">
          <li
            onClick={() => {
              setSelected("overview");
            }}
            className={` space-y-2   hover:text-white cursor-pointer ${selected ? "text-white" : "text-[#ffffffa6] "}`}
          >
            <p>Overview</p>
            {selected === "overview" && (
              <div className="bg-[#26bbff] ease-in-out duration-200 animate-bounce  w-full h-0.5"></div>
            )}
          </li>

          <li
            onClick={() => {
              setSelected("add-ons");
            }}
            className={` space-y-2 hover:text-white cursor-pointer ${selected ? "text-white" : "text-[#ffffffa6] "}`}
          >
            <p>Add ons</p>
            {selected === "add-ons" && (
              <div className="bg-[#26bbff] w-full  h-0.5"></div>
            )}
          </li>
        </ul>

        <div className=" grid grid-cols-[1100px_minmax(0,1fr)]">
          <div className="w-full   h-full flex flex-col gap-20 ">
            <div className="w-full  h-175 mb-20">
              <TrailerPlayer link={mediaLink} />
              <ScrollingSlideShow
                mediaLinkHandler={mediaLinkHandler}
                trailerLink={"https://youtu.be/K0u_kAWLJOA"}
              />
            </div>
            <div className=" ">
              <div className=" flex gap-9 ">
                <div>Genres</div>
                <div className=" border border-l-black border-2">Console</div>
              </div>
              <h3 className=" text-white text-lg font-semibold mb-3">
                Kratos and Atreus embark on a mythic journey for answers before
                Ragnarök arrives – now on PC.
              </h3>
              From Santa Monica Studio comes the sequel to the critically
              acclaimed God of War (2018). Embark on an epic and heartfelt
              journey as Kratos and Atreus struggle with holding on and letting
              go. Brought to PC by Jetpack Interactive. Against a backdrop of
              Norse Realms torn asunder by the fury of the Aesir, they’ve been
              trying their utmost to undo the end times. But despite their best
              efforts, Fimbulwinter presses onward. Witness the changing dynamic
              of the father-son relationship as they fight for survival; Atreus
              thirsts for knowledge to help him understand the prophecy of
              “Loki”, as Kratos struggles to break free of his past and be the
              father his son needs. See for yourself how fate will force a
              choice upon them: between their own safety or the safety of the
              realms. All the while, hostile Asgardian forces assemble… Venture
              through all Nine Realms towards the prophesied battle that will
              end the world. Vanquish Norse gods and monsters alike in fluid,
              expressive combat. Explore in wonder through stunning mythological
              landscapes. PC features: Live and breathe every battle in 4K, with
              potential for unlocked frame rates.¹ View even more of the action
              with support for Ultrawide (21:9) and Super Ultrawide (32:9)
              aspect ratios.¹ Bask in the beautiful worlds you travel through,
              brought to life by stunning art direction and arresting attention
              to detail. Behold enhanced reflections, lighting and higher
              fidelity shadows, as well as increased geometric detail.² Witness
              every detail of this epic Norse war with upscaling and frame
              generation technologies, including NVIDIA DLSS 3.7, AMD FSR 3.1
              and Intel XeSS 1.2.² Feel your journey through the Norse realms,
              made possible by immersive haptic feedback and adaptive trigger
              functionality.³ Or choose mouse and keyboard, with fully
              customizable options tailored to your desired control scheme.
              Benefit from improved control latency via NVIDIA Reflex support.³
              Take advantage of highly accurate, spatial 3D Audio; hear enemies
              approaching from any direction, including from above and below
              you.⁴ God of War Ragnarök: Valhalla add-on included⁵ Master
              Thyself. To uncover the mysteries within, Kratos must delve into
              Valhalla facing challenges of mind and body. After the events of
              Ragnarök, Kratos sees a path for himself he never thought
              possible. Accompanied only by Mimir, Kratos embarks on a deeply
              personal and reflective journey that pushes him to master mind and
              body as he is confronted with the challenges of Valhalla in an
              unravelling, replayable adventure that blends the beloved combat
              from God of War Ragnarök with brand-new elements inspired by the
              roguelite genre. ¹ Compatible PC and display device required. ²
              Compatible PC and graphics card required. ³ DualSense™ controller
              and wired connection required to experience the full range of
              in-game controller features. ⁴ 3D Audio via analog/USB stereo
              headphones. ⁵ God of War Ragnarök: Valhalla is included with both
              Standard and Digital Deluxe Editions.
            </div>
          </div>

          <div>
            <ProductDown />
          </div>
        </div>
      </div>
    </section>
  );
};
