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
import { isAllowedAtom, isOpenAtom } from "../../../../JotaiStores/item14Store";

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
};

function Padlock({ isInView }: { isInView: boolean }) {
  const [isAllowed] = useAtom(isAllowedAtom);
  const variants: Record<string, Variants> = {
    padlock: {
      init: {},
      animate: {
        y: isAllowed ? [-2, 0, 0, 0] : [0, 0,0, -2],
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
          animate: isInView ? { rotateY: 180, y: [0, 0, 0, 4] } : {},
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
          className="flex text-white absolute top-8 text-4xl bg-slate-200/30 w-32 justify-end p-1 pr-2 backdrop-blur-sm shadow-md shadow-slate-900/40 "
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
                isAllowed &&
                "shadow-lg shadow-slate-900/40"
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
function ContainerHeader() {
  const [isOpen] = useAtom(isOpenAtom);
  const timerId = useRef<NodeJS.Timeout>();
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

const Item14ListContainer = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [isHovering, setIsHovering] = useState(false);

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
  }, [isOpen, isHovering, setIsOpen]);

  return (
    <div className="flex flex-col txt-uni">
      <span className="text-center txt-color">Phone Store</span>
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
