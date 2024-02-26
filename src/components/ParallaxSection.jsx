import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const ParallaxSection = ({ image, children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      w="full"
      h="300px"
      bgImage={image}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      my={8}
      style={{
        transform: `translateY(${offsetY * 0.5}px)`,
        opacity: offsetY > 100 ? (200 - offsetY) * 0.01 : 1,
      }}
    >
      {children}
    </Box>
  );
};

export default ParallaxSection;
