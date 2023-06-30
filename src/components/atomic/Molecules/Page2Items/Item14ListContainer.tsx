import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const variants: Record<string, Variants> = {
  sidePanel: {
    init: {},
    animate: {
      backgroundColor: "rgb(252,252,252)",
      width: "500px",
      height: "800px",
      cursor: "default",
      overflowY: "scroll",
    },
  },
  itemList: {
    init: {
      visibility: "hidden",
    },
    animate: {
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

const Item14ListContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timerId = useRef<any>();
  const [time, setTime] = useState("");
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

  function ContainerItem() {
    return (
      <li className="m-2 h-[800px]">
        <div className="bg-slate-400 h-56 ">picture</div>
        <div>text</div>
      </li>
    );
  }

  function ContainerItemList() {
    const itemCount = 120;
    return (
      <>
        <motion.ul className="flex flex-col" variants={variants.itemList}>
          <div className="h-[100px]  bg-slate-500 sticky flex flex-col top-0 w-full ">
            <div className="pl-1 bg-black text-white">{`${time} O2`}</div>
            <div className="bg-white flex-1 border-b-indigo-700/30 border-b-4">
              <div className="text-xl text-center font-bold text-indigo-700">Rewards</div>
            </div>
          </div>
          {Array.from({ length: itemCount }, (_, index) => (
            <ContainerItem key={index}></ContainerItem>
          ))}
          <div className="h-[100px] bg-indigo-700 sticky bottom-0 w-full rounded-t-lg ">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-24 h-24 bg-cyan-300 rounded-full text-white">
              +
            </div>
          </div>
        </motion.ul>
      </>
    );
  }
  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={handleHoverOrClick}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onClick={handleHoverOrClick}
      variants={variants.sidePanel}
      animate={isOpen ? "animate" : "init"}
      className="no-scrollbar snap-mandatory div-item border-2 border-slate-600 dark:border-slate-300"
    >
      <ContainerItemList />
    </motion.div>
  );
};

export default Item14ListContainer;
