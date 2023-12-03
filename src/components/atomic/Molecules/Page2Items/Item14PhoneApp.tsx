import {
  Variants,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import React, { useRef, useState } from "react";
import Shackle from "../../../../assets/svg/lock.svg?react";
import Lock from "../../../../assets/svg/lock2.svg?react";
import { useAtom } from "jotai";
import { isItem14AllowedAtom } from "../../../../JotaiStores/item14PhoneAppStore";
import PhoneLayout from "../../Organisms/phoneLayout/PhoneLayout";

function Padlock({ isInView }: { isInView: boolean }) {
  const [isAllowed] = useAtom(isItem14AllowedAtom);
  const variants: Record<string, Variants> = {
    padlock: {
      init: {},
      animate: {
        y: isAllowed ? [-2, 0, 0, 0] : [0, 0, 0, -2],
        scale: isInView ? 0.9 : 1,
      },
    },
    shackle: isAllowed
      ? {
          init: { originX: 0.735, rotateY: 180 },
          animate: isInView
            ? { rotateY: [180, 180, 0, 0], y: [4, 0, 0, 0] }
            : {},
        }
      : {
          init: { originX: 0.735 },
          animate: isInView
            ? { rotateY: [0, 180, 180, 180], y: [0, 0, 0, 4] }
            : {},
        },
  };
  return (
    <motion.div
      variants={variants.padlock}
      className="flex justify-center items-center w-full h-full fill-white "
    >
      <div className="relative w-7 h-7 drop-shadow-lg shadow-slate-300">
        <motion.div className="absolute w-full h-full left-[1px] ">
          <Lock />
        </motion.div>

        <motion.div
          variants={variants.shackle}
          className="absolute w-full -left-3 -top-[3px] "
        >
          <Shackle />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContainerItem({ index }: { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [isAllowed] = useAtom(isItem14AllowedAtom);
  const variants: Record<string, Variants> = {
    item: {
      init: {
        opacity: isInView ? 0 : 1,
        x: -40,
      },
      animate: {
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -40,
        transition: { duration: 1 },
      },
    },
    messageContainer: {
      init: {},
      animate: {
        opacity: [0, 0, 1, 1],
        transition: {
          delayChildren: isAllowed ? 0.75 : 1.2,
          duration: 1,
          times: isInView ? [0, 0.2, 0.6, 1] : [],
        },
        width: isInView ? [48, 48, 48, isAllowed ? 48 : 250] : [],
      },
    },
    microchipMessage: {
      init: { opacity: 0 },
      animate: {
        opacity: isInView ? 1 : 0,
        transition: { duration: 1 },
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative h-[500px]"
      style={{ perspective: "400px" }}
    >
      <li className="m-2  snap-start ">
        <img
          src={`https://picsum.photos/id/${index * 4}/400/224`}
          alt={`number ${index}`}
          className="bg-slate-500 h-56"
        />
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
          quasi suscipit saepe recusandae perspiciatis est nostrum beatae
          voluptates facilis. Sunt odit doloremque, nam laudantium praesentium
          placeat quae nostrum voluptate.
        </div>
      </li>

      <div>
        <motion.h2
          variants={variants.item}
          initial="init"
          animate="animate"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
          className="flex text-white absolute top-8 text-4xl  bg-slate-200/30 w-32 justify-end pb-1 pr-2 backdrop-blur-sm shadow-md shadow-slate-900/40 "
        >{`#00${index}`}</motion.h2>
        <motion.div
          variants={variants.messageContainer}
          initial="init"
          animate="animate"
          className={`flex absolute right-5 top-36 w-12 h-12 rounded-full bg-indigo-700/10  backdrop-blur-sm ${
            !isAllowed && "outline outline-white/50"
          }  shadow-lg shadow-slate-900/40`}
        >
          {!isAllowed && (
            <motion.h2
              variants={variants.microchipMessage}
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,1)" }}
              className="flex text-white ml-5 text-xl h-12 items-center"
            >
              Microchip required
            </motion.h2>
          )}
          {isInView && (
            <div
              className={`absolute right-0 top-0 w-12 h-12 rounded-full bg-indigo-600 ${
                isAllowed && "shadow-lg shadow-slate-900/40"
              }`}
            >
              <Padlock isInView={isInView} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
function RewardsHeader() {
  return (
    <div className="bg-white flex-1 border-b-indigo-700/30 border-b-4">
      <div className="text-xl text-center font-bold text-indigo-700">
        Rewards
      </div>
      <div className="flex justify-evenly ">
        <div>Featured</div>
        <div>All rewards</div>
      </div>
    </div>
  );
}
function ContainerList() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: listRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const itemCount = 20;
  return (
    <>
      <RewardsHeader />
      <motion.div className="progress h-3 bg-indigo-600" style={{ scaleX }} />
      <ul
        ref={listRef}
        className="snap-mandatory snap-y overflow-scroll w-full h-[500px] no-scrollbar"
      >
        {Array.from(
          {
            length: itemCount,
          },
          (_, index) => (
            <div key={index}>
              <ContainerItem index={index} />
            </div>
          )
        )}
      </ul>
    </>
  );
}

const Item14PhoneApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsAllowed] = useAtom(isItem14AllowedAtom);
  const itemAction = () => {
    setIsAllowed((current) => !current);
  };
  return (
    <PhoneLayout
      title="Phone App Store"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      itemAction={itemAction}
    >
      <ContainerList />
    </PhoneLayout>
  );
};
export default Item14PhoneApp;
