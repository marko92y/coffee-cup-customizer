import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../store";
import Interface from "./Interface";
import styles from "./Overlay.module.scss";

const Overlay = () => {
  const snap = useSnapshot(state);
  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {snap.intro ? (
          <motion.section {...config}>
            <motion.div
              key="title"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
              }}
            >
              <div className={styles.overlay}>
                <p className={styles.title}>coffee cup</p>
                <button
                  className={styles.pulseBtn}
                  style={{ backgroundColor: snap.color }}
                  onClick={() => (state.intro = false)}
                >
                  CUSTOMIZE
                </button>
              </div>
            </motion.div>
          </motion.section>
        ) : (
          <motion.section key="custom" {...config}>
            <motion.div
              key="title"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
              }}
            >
              <Customizer />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const Customizer = () => {
  return (
    <div className={styles.overlay}>
      <p className={styles.title}>cup customizer</p>
      <div className={styles.customizer}>
        <button className="goBack" onClick={() => (state.intro = true)}>
          GO BACK
        </button>
      </div>
      <Interface />
    </div>
  );
};

export default Overlay;
