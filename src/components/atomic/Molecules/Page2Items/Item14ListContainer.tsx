import {
  Variants,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { BsReception3 } from "react-icons/bs";
import { MdBattery5Bar } from "react-icons/md";
import { AiOutlineWifi, AiOutlinePlus } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { SlBadge } from "react-icons/sl";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { ReactComponent as Shackle } from "../../../../assets/svg/lock.svg";
import { ReactComponent as Lock } from "../../../../assets/svg/lock2.svg";
import { useAtom } from "jotai";
import { isAllowedAtom } from "../../../../JotaiStores/item14Allowed";

const variants: Record<string, Variants> = {
  sidePanel: {
    init: {},
    animate: {
      backgroundColor: "rgb(252,252,252)",
      width: "400px",
      height: "700px",
      cursor: "default",
      borderRadius: "20px",
    },
  },
  itemList: {
    init: {
      display: "none",
      visibility: "hidden",
    },
    animate: {
      display: "block",
      visibility: "visible",
    },
  },
  containerItem: {
    normal: {
      scale: 1,
    },
    scaled: {
      scale: 2,
    },
  },
};

function Padlock({
  isInView,
  isAllowed,
}: {
  isInView: boolean;
  isAllowed: boolean;
}) {
  const variants: Record<string, Variants> = {
    padlock: {
      init: {},
      animate: isAllowed
        ? { fill: isInView ? "rgb(255,255,255)" : "rgb(255,50,0)" }
        : { fill: isInView ? "rgb(255,50,0)" : "rgb(255,255,255)" },
    },
    shackle: isAllowed
      ? {
          init: { originX: "22.5px", rotateY: 180 },
          animate: isInView
            ? { rotateY: [180, 180, 0, 0], y: [4, 0, 0, 0] }
            : {},
        }
      : {
          init: { originX: "22.5px" },
          animate: isInView ? { rotateY: 180, y: [0, 0, 4] } : {},
        },
  };
  return (
    <motion.div
      variants={variants.padlock}
      className={`flex relative w-[60%] h-[60%] center-element ${
        isAllowed ? "fill-[rgb(255,50,0)]" : "fill-[rgb(255,255,255)]"
      }`}
    >
      <motion.div className="absolute w-full">
        <Lock />
      </motion.div>
      <motion.div
        variants={variants.shackle}
        className="absolute w-full -left-3.5 -top-[3px]"
      >
        <Shackle />
      </motion.div>
    </motion.div>
  );
}
function ContainerItem({ index }: { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isAllowed] = useAtom(isAllowedAtom);
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
        x: isInView ? [50, -20, -20, -20] : 50,
        transition: {
          delayChildren: 1,
          duration: 1.5,
          times: isInView ? [0, 0.5, 0.8, 1] : [],
        },
        width: isInView ? [56, 56, 56, isAllowed ? 56 : 290] : [],
      },
    },
    microchipMessage: {
      init: {
        display: "none",
        opacity: 0,
      },
      animate: {
        display: isInView ? "flex" : "none",
        opacity: isInView ? [0, 0, 1] : 0,
        transition: { duration: 1, times: [0, 0.5, 1] },
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
      <motion.h2
        variants={variants.item}
        initial="init"
        animate="animate"
        className="flex text-white absolute top-8 text-4xl bg-slate-200/50 w-32 justify-end p-1 backdrop-blur-sm"
      >{`#00${index}`}</motion.h2>
      <motion.div
        variants={variants.messageContainer}
        initial="init"
        animate="animate"
        className="flex  absolute top-36 w-14 h-14 rounded-full right-0 bg-indigo-700/60  backdrop-blur-sm shadow-lg"
      >
        {!isAllowed && (
          <motion.h2
            variants={variants.microchipMessage}
            className="text-white ml-5 text-2xl h-14 items-center"
          >
            Microchip required
          </motion.h2>
        )}
        <div className="absolute right-0 top-0 w-14 h-14 rounded-full bg-indigo-200/10 border-2 border-indigo-300/10">
          <Padlock isInView={isInView} isAllowed={isAllowed} />
        </div>
      </motion.div>
    </section>
  );
}

const Item14ListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timerId = useRef<NodeJS.Timeout>();
  const containerRef = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };
  useOnClickOutside(containerRef, handleClickOutside);

  const handleHoverOrClick = () => {
    setIsOpen(true);
    setIsHovering(true);
  };
  useEffect(() => {
    if (isOpen && !isHovering) {
      const id = setTimeout(() => setIsOpen(false), 100000);
      return () => clearTimeout(id);
    }
  }, [isOpen, isHovering]);

  function Timer({ isOpen }: { isOpen: boolean }) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      if (isOpen) {
        setTime(new Date().toLocaleTimeString());
        timerId.current = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
      } else {
        clearInterval(timerId.current);
      }
    }, [isOpen]);
    return <span>{time}</span>;
  }

  function ContainerHeader() {
    return (
      <header className="h-[100px] bg-slate-500 sticky flex flex-col top-0 w-full ">
        <div className="flex justify-between bg-black text-white p-0.5">
          <div className="pl-1 space-x-3">
            <Timer isOpen={isOpen} />
            <span>O2</span>
          </div>
          <div className="flex space-x-1 items-center">
            <AiOutlineWifi />
            <BsReception3 />
            <span>90%</span>
            <MdBattery5Bar />
          </div>
        </div>
        <div className="bg-white flex-1 border-b-indigo-700/30 border-b-4">
          <div className="text-xl text-center font-bold text-indigo-700">
            Rewards
          </div>
          <div className="flex justify-evenly ">
            <div>Featured</div>
            <div>All rewards</div>
          </div>
        </div>
      </header>
    );
  }

  function ActivityButton(): JSX.Element {
    const [isAllowed, setIsAllowed] = useAtom(isAllowedAtom);
    const variants: Record<string, Variants> = {
      activityButton: {
        init: {
          boxShadow: "0 6px 3px rgba(0, 0, 0, 0.2)",
        },
        hover: {
          boxShadow: "0 10px 3px rgba(0, 0, 0, 0.2)",
          scale: 1.1,
        },
        tap: {
          boxShadow: "0 4px 3px rgba(0, 0, 0, 0.2)",
          y: 5,
        },
        toggle: {
          rotate: isAllowed ? 0 : 135,
          color: isAllowed ? "rgb(252,252,252)" : "rgb(255,50,0)",
        },
      },
    };
    return (
      <motion.div
        variants={variants.activityButton}
        initial="init"
        whileHover="hover"
        whileTap="tap"
        className="w-20 h-20 bg-cyan-300 rounded-full cursor-pointer text-white mb-8"
        onClick={() => setIsAllowed(!isAllowed)}
      >
        <motion.div
          variants={variants.activityButton}
          animate="toggle"
          className="flex mt-1 justify-center text-7xl select-none"
        >
          <AiOutlinePlus className="w-14" />
        </motion.div>
      </motion.div>
    );
  }

  function ContainerFooter() {
    return (
      <footer className="h-[100px] w-full bg-indigo-700 rounded-t-lg select-none">
        <div className="absolute bottom-0 text-white flex justify-evenly w-full ">
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="flex justify-center items-center flex-col w-8 -mb-6 cursor-pointer"
          >
            <ImHome className="w-6 h-6" />
            <div>Home</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="flex justify-center items-center flex-col w-8 -mb-6 cursor-pointer"
          >
            <SlBadge className="w-6 h-6" />
            <div>Badges</div>
          </motion.div>

          <ActivityButton />

          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="flex justify-center items-center flex-col w-8 -mb-6 cursor-pointer"
          >
            <BsTicketPerforatedFill className="w-6 h-6" />
            <div>Wallet</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="flex justify-center items-center flex-col w-8 -mb-6 cursor-pointer"
          >
            <FaShoppingBag className="w-6 h-6" />
            <div>Rewards</div>
          </motion.div>
        </div>
      </footer>
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

  function ItemContainer() {
    return (
      <div className="flex flex-col">
        <ContainerHeader />
        <ContainerList />
        <ContainerFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col txt-uni">
      <span className="text-center">Phone Store</span>
      <motion.div
        ref={containerRef}
        onMouseEnter={handleHoverOrClick}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        onClick={handleHoverOrClick}
        variants={variants.sidePanel}
        animate={isOpen ? "animate" : "init"}
        className="div-item border-2 relative border-slate-600 dark:border-slate-300 overflow-clip"
      >
        <motion.div variants={variants.itemList}>
          <ItemContainer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Item14ListContainer;