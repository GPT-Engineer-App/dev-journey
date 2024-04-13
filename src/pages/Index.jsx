import React from "react";
import { Box, Heading, Text, VStack, HStack, Wrap, WrapItem, Image, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the project.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjk4Mzk2MXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of the project.",
      image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjk4Mzk2MXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    // Add more projects as needed
  ];

  const posts = [
    {
      title: "Blog Post 1",
      description: "A brief description of the blog post.",
      link: "#",
    },
    {
      title: "Blog Post 2",
      description: "A brief description of the blog post.",
      link: "#",
    },
    // Add more blog posts as needed
  ];

  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        {/* About Me */}
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            John Doe
          </Heading>
          <Text fontSize="xl" mb={4}>
            Hi, I'm John! I'm a passionate programmer with expertise in web development and machine learning.
          </Text>
          <HStack spacing={4}>
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton icon={<FaGithub />} aria-label="GitHub" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
            </Link>
            <Link href="mailto:john@example.com" isExternal>
              <IconButton icon={<FaEnvelope />} aria-label="Email" />
            </Link>
          </HStack>
        </Box>

        {/* Projects */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <Wrap spacing={8}>
            {projects.map((project, index) => (
              <WrapItem key={index} width={{ base: "100%", md: "45%" }}>
                <Box borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md" _hover={{ boxShadow: "lg" }}>
                  <Image src={project.image} alt={project.title} />
                  <Box p={6}>
                    <Heading as="h3" size="md" mb={2}>
                      {project.title}
                    </Heading>
                    <Text>{project.description}</Text>
                    <Link href={project.link} isExternal mt={4} display="inline-block">
                      View Project
                    </Link>
                  </Box>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Blog */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Blog
          </Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} borderWidth={1} borderRadius="lg" p={4} _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}>
                <Heading as="h3" size="md" mb={2}>
                  {post.title}
                </Heading>
                <Text>{post.description}</Text>
                <Link href={post.link} isExternal mt={2} display="inline-block">
                  Read More
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Contact */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text>
            Feel free to reach out to me via email at{" "}
            <Link href="mailto:john@example.com" color="blue.500">
              john@example.com
            </Link>{" "}
            or connect with me on{" "}
            <Link href="https://linkedin.com/in/johndoe" isExternal color="blue.500">
              LinkedIn
            </Link>
            .
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
