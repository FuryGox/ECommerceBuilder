"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoonStars, SunDim } from "@phosphor-icons/react/dist/ssr";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const iconVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  return (
    <Button
      className="w-10 h-10 flex items-center justify-center flex-grow"
      style={{ padding: 0 }}
      variant={"ghost"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={iconVariants}
          transition={{ duration: 0.5 }}
        >
          {theme === "dark" ? (
            <SunDim size={24} style={{ width: "24px", height: "24px" }} />
          ) : (
            <MoonStars size={24} style={{ width: "24px", height: "24px" }} />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
