import { Box, Flex, Heading, Text, VStack, Container, Divider, Link, useDisclosure } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import ParallaxSection from "../components/ParallaxSection";
import { useState, useEffect } from "react";

const Index = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <VStack spacing={8}>
      {/* Hero Section */}
      <Box
        w="full"
        h="100vh"
        bgImage="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcwODk4MzE0N3ww&ixlib=rb-4.0.3&q=80&w=1080"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "full",
          h: "full",
          bg: "blackAlpha.600",
        }}
      >
        <VStack spacing={4} position="relative" textAlign="center" justify="center" align="center" h="full">
          <Heading as="h1" size="2xl" color="white">
            Developer Landing Page
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.800">
            HTML, CSS, and JavaScript
          </Text>
        </VStack>
      </Box>

      <Container maxW="container.md" p={8}>
        {/* Technologies Section */}
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Technologies
          </Heading>
          <Text>As a developer, I specialize in the core technologies of the web: HTML, CSS, and JavaScript.</Text>
          <Flex justify="space-around" w="full">
            <Box textAlign="center">
              <FaHtml5 size="5em" color="#E34F26" />
              <Text mt={2}>HTML</Text>
            </Box>
            <Box textAlign="center">
              <FaCss3Alt size="5em" color="#1572B6" />
              <Text mt={2}>CSS</Text>
            </Box>
            <Box textAlign="center">
              <FaJsSquare size="5em" color="#F7DF1E" />
              <Text mt={2}>JavaScript</Text>
            </Box>
          </Flex>
        </VStack>

        <Divider my={8} />

        {/* Parallax Section with Fade Effect */}
        <ParallaxSection image="https://images.unsplash.com/photo-1532630571098-79a3d222b00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJhbGxheCUyMHBsYWNlaG9sZGVyfGVufDB8fHx8MTcwODk4MzE0OHww&ixlib=rb-4.0.3&q=80&w=1080">
          {/* Content to fade in and out */}
          <VStack spacing={4} position="relative" textAlign="center" justify="center" align="center" h="full">
            <Heading as="h2" size="xl" color="white" style={{ opacity: offsetY < 200 ? 1 - (200 - offsetY) / 100 : 1 }}>
              Engaging Experiences
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.800" style={{ opacity: offsetY < 250 ? 1 - (250 - offsetY) / 100 : 1 }}>
              Scroll down to see more
            </Text>
          </VStack>
        </ParallaxSection>

        <VStack spacing={4}>
          {/* Customization Section */}
          <Heading as="h3" size="lg">
            Customization
          </Heading>
          <Text>You can update the images and text to customize this template for your needs.</Text>
          <Text fontStyle="italic">
            {/* Comment to indicate where to update images */}
            {/* Update the bgImage prop with your desired image URL */}
          </Text>
        </VStack>
      </Container>

      {/* Footer Section */}
      <Box py={4} w="full" bg="gray.200">
        <Container maxW="container.md" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Developer Name</Text>
          <Link href="https://github.com/developer" isExternal>
            GitHub
          </Link>
        </Container>
      </Box>
    </VStack>
  );
};

export default Index;
