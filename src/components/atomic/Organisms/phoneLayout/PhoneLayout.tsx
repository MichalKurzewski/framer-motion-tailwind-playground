import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { Variants, motion } from "framer-motion";
import { ImHome } from "react-icons/im";
import { SlBadge } from "react-icons/sl";
import { BsReception3, BsTicketPerforatedFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

import { AiOutlinePlus, AiOutlineWifi } from "react-icons/ai";
import { MdBattery5Bar } from "react-icons/md";
import { timerAtom } from "../../../../JotaiStores/timerStore";
import { useAtom } from "jotai";
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
  containerContent: {
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

interface IPhoneLayout {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: string | JSX.Element;
  isFooterVisible?: boolean;
  itemAction?: Function;
}

function ContainerHeader({ isOpen }: { isOpen: boolean }) {
  const timerId = useRef<NodeJS.Timeout>();
  function Timer({ isOpen }: { isOpen: boolean }) {
    const [time, setTime] = useAtom(timerAtom);
    useEffect(() => {
      if (isOpen && !time) {
        setTime(new Date().toLocaleTimeString());
        timerId.current = setInterval(() => {
          console.log("click", new Date().toLocaleTimeString());
          setTime(new Date().toLocaleTimeString());
        }, 1000);
      } else {
        clearInterval(timerId.current);
      }
    }, [isOpen, setTime, time]);
    return <span>{time}</span>;
  }
  return (
    <header className=" bg-slate-500 sticky flex flex-col top-0 w-full ">
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
    </header>
  );
}

function ContainerFooter({
  isFooterVisible = true,
  itemAction,
}: {
  isFooterVisible?: boolean;
  itemAction?: Function;
}) {
  return (
    <footer
      className={`${
        isFooterVisible ? "visible" : "hidden"
      } h-[100px] w-full bg-indigo-700 rounded-t-lg select-none`}
    >
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

        <ActivityButton itemAction={itemAction} />

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

function ActivityButton({
  itemAction,
}: {
  itemAction?: Function;
}): JSX.Element {
  const [isToggled, setIsToggled] = useState(true);
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
        rotate: isToggled ? 0 : 135,
        color: isToggled ? "rgb(252,252,252)" : "rgb(255,50,0)",
      },
    },
  };

  const handleClick = () => {
    if (itemAction) {
      itemAction();
    }
    setIsToggled((current) => !current);
  };

  return (
    <motion.div
      variants={variants.activityButton}
      initial="init"
      whileHover="hover"
      whileTap="tap"
      className="w-20 h-20 bg-cyan-300 rounded-full cursor-pointer text-white mb-8"
      onClick={handleClick}
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
function ItemContainer({
  children,
  isFooterVisible,
  isOpen,
  itemAction,
}: {
  children: string | JSX.Element;
  isFooterVisible?: boolean;
  isOpen: boolean;
  itemAction?: Function;
}) {
  return (
    <motion.div variants={variants.containerContent}>
      <div className="flex flex-col">
        <ContainerHeader isOpen={isOpen} />
        {children}
        <ContainerFooter
          isFooterVisible={isFooterVisible}
          itemAction={itemAction}
        />
      </div>
    </motion.div>
  );
}

const PhoneLayout = ({
  isOpen,
  setIsOpen,
  isFooterVisible,
  children,
  itemAction,
}: IPhoneLayout) => {
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
      <span className="text-center txt-color">Phone App</span>
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
        <ItemContainer
          isFooterVisible={isFooterVisible}
          isOpen={isOpen}
          itemAction={itemAction}
        >
          {children}
        </ItemContainer>
      </motion.div>
    </div>
  );
};

export default PhoneLayout;
