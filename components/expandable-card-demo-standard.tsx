"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ExpandableCardDemo({prompt}: {prompt: any}) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );

    const router = useRouter();


    const [cards3, setCards] = useState(prompt.recipes.map((recipe: any) => {
        return {
            title: recipe.name,
            description: recipe.description,
            src: "/images/cocinita_default.webp",
            ctaText: "Play",
            ctaLink: "https://ui.aceternity.com/templates",
            content: () => {
                return (
                    <div>
                        <p>
                            <span className="font-bold mb-1">المكونات:</span> <br />
                            {recipe.ingredients.map((ingredient: string) => {
                                return (
                                    <span key={crypto.randomUUID()}>
                                        - {ingredient} <br />
                                    </span>
                                )
                            })}
                            <span className="font-bold">الطريقة: </span><br />
                            {recipe.instructions.map((instruction: string, index: number) => {
                                return (
                                    <span key={crypto.randomUUID()}>
                                        {index + 1}- {instruction} <br />
                                    </span>
                                )
                            })
                            }
                        </p>
                    </div>
                );
            },
        }
    }))


  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    if (prompt) {
        router.push("/#results")
    }
  }, [prompt])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useOutsideClick(ref, () => setActive(null));

//   const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)
    const [hovered, setHovered] = useState<number | null>(null);
  

//   const handleHover = (id: string | null) => {
//     setHoveredCardId(id)
//   }

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] font-main">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="h-full overflow-y-scroll">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4 pb-10">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm lg:text-base h-fit flex flex-col items-start gap-4 dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[90vw] mx-auto w-full gap-4 flex flex-row my-5 max-md:flex-wrap">
        {cards3.map((card: any, index: number) => (
            // <motion.div
            // layoutId={`card-${card.title}-${id}`}
            // key={`card-${card.title}-${id}`}
            // onClick={() => setActive(card)}
            // onHoverStart={() => handleHover(index)}
            // onHoverEnd={() => handleHover(null)}
            // className="p-6 rounded-xl cursor-pointer bg-[#FFE8C8] 
            //          shadow-lg border border-[#FFCC80] 
            //          transition-all duration-300 ease-in-out
            //         hover:shadow-xl dark:hover:shadow-2xl
            //         my-3
            //         "
                    
            // >
            // <div className="flex items-start space-x-4">
            // <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0">
            //     <Image
            //     width={80}
            //     height={80}
            //     src={card.src}
            //     alt={card.title}
            //     className="h-20 w-20 rounded-lg object-cover shadow-md ml-3"
            //     />
            // </motion.div>
            // <div className="flex-grow">
            //     <motion.h3
            //     layoutId={`title-${card.title}-${id}`}
            //     className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2"
            //     >
            //     {card.title}
            //     </motion.h3>
            //     <motion.p layoutId={`description-${card.description}-${id}`} className="text-sm text-gray-600 dark:text-gray-300">
            //     {card.description}
            //     </motion.p>
            // </div>
            // <motion.div
            //     animate={{ x: hoveredCardId === index ? 5 : 0 }}
            //     transition={{ type: "spring", stiffness: 300, damping: 20 }}
            //     className="flex-shrink-0 self-center"
            // >
            //     <ChevronRight className="w-6 h-6 text-gray-400 dark:text-gray-500" />
            // </motion.div>
            // </div>
            // </motion.div>

            <motion.div
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  layoutId={`card-${card.title}-${id}`}
                    key={`card-${card.title}-${id}`}
                    onClick={() => setActive(card)}
                  className={cn(
                    "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 cursor-pointer w-full transition-all duration-300 ease-out",
                    hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
                  )}
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <motion.div
                    className={cn(
                      "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                      hovered === index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                      {card.title}
                    </div>
                  </motion.div>
                </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "",
    title: "كعكة شكولاتة",
    src: "/images/cake.jpg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
            <p>
                المكونات: <br />
                سكر ١٠٠ غرام <br />
                بيضة ١ <br />
                زبدة ١٠٠ غرام <br />
                حليب ١٠٠ مل <br />
                كاكاو ٢٠ غرام <br />
                دقيق ١٠٠ غرام <br />
                باكنج باودر ١٠ غرام <br />
                ملح ١/٤ ملعقة صغيرة <br />
                فانيليا ١/٢ ملعقة صغيرة <br />
                زبدة للدهن <br />
                دقيق للرش <br />
                الطريقة: <br />
                1- نخلط الزبدة مع السكر جيداً حتى تصبح قوام كريمي. <br />
                2- نضيف البيضة ونخلطها مع الزبدة والسكر. <br />
                3- نضيف الحليب ونخلطه جيداً. <br />
                4- نضيف الكاكاو ونخلطه جيداً. <br />
                5- نضيف الدقيق والباكنج باودر والملح والفانيليا ونخلطهم جيداً. <br />
                6- ندهن الصينية بالزبدة ونرشها بالدقيق. <br />
                7- نسكب الخليط في الصينية. <br />
                8- ندخل الصينية الفرن المحمى مسبقاً على درجة حرارة 180 لمدة 20 دقيقة. <br />
                9- نتركها تبرد قليلاً ثم نقدمها. <br />
            </p>
        </div>
      );
    },
  },
  
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/images/cocinita.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/images/cocinita.png",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },

];


