import { Flex, List, ListItem, Link } from "@chakra-ui/react";

const options = [
  {
    name: "Home",
    to: "home",
    img: "/assets/home.svg",
  },
  { name: "Logout", to: "login", img: "/assets/logout.svg" },
];

export function AsideMenu() {
  return (
    <Flex
      as="section"
      borderRightWidth="1px"
      borderStyle="solid"
      borderColor="border"
      w="100%"
    >
      <Flex as="nav" position="fixed" p="16" h="100vh">
        <List display="flex" flexDir="column" gap="20px">
          {options.map((option) => (
            <ListItem>
              <Link
                key={option.name}
                fontWeight="bold"
                fontSize="19px"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <img src={option.img} alt={`${option.name} icone`} />
                <a href={option.to}>{option.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
}
