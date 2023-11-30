import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Show,
} from '@chakra-ui/react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi'
import {
    NavLink,
  } from "react-router-dom";
import { IconType } from 'react-icons'

interface LinkItemProps {
    name: string
    icon: IconType
    url: string
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
    url: string
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, url: '/' },
    { name: 'Trending', icon: FiTrendingUp, url: '/$' },
    { name: 'Explore', icon: FiCompass, url: '/!' },
    { name: 'Favourites', icon: FiStar, url: '/@' },
    { name: 'Settings', icon: FiSettings, url: '/setting' },
]

const SidebarContent = ({collaps/*, setCollaps*/}:any) => {
    return (
        <Show above='md'>
            <Box
                borderRight="1px"
                transition="0.1s ease"
                bg={useColorModeValue('white', 'gray.900')}
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={collaps ? { base: 'none', md: 60 } : { base: 'none', md: 20 }}
                pos="fixed"
                h="full"
                // onMouseOver={() => setCollaps(true)}
                // onMouseOut={() => setCollaps(false)}
            >
                {
                    collaps ?
                    <>
                        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color='red.600'>
                                BaseTemplatez
                            </Text>
                        </Flex>
                        {LinkItems.map((link) => (
                                <NavItem key={link.name} icon={link.icon} url={link.url}>
                                    {link.name}
                                </NavItem>
                        ))}
                    </>
                    : 
                    <>
                        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color='red.600'>
                                Bz
                            </Text>
                        </Flex>
                        {LinkItems.map((link) => (
                                <NavItem key={link.name} icon={link.icon} url={link.url}>
                                    
                                </NavItem>
                        ))}
                    </>
                }
            </Box>
        </Show>
    )
}

const MobileSidebar = ({open, setOpen}: any) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
        >

            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color='red.600'>
                    BaseTemplatez
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={() => setOpen(!open)} />
            </Flex>
            {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} url={link.url}>
                        {link.name}
                    </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => {
    return (
        <Box
            as={NavLink}
            to={url}
            _focus={{ boxShadow: 'none' }}
            className={({ isActive }: any) => {
                return isActive ? "active" :  "";
            }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'red.600',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

const Navigation = ({collaps, setCollaps, open, setOpen}: any) => {
    return (
        <Flex
            height="20"
            alignItems="center"
            borderBottomWidth="1px"
            px={{ base: 4, md: 4 }}
            justifyContent="space-between"
            bg={useColorModeValue('white', 'gray.900')}
            transition={{ base: 'none', md: "0.1s ease"}}
            ml={collaps ? { base: 0, md: 60 } : { base: 0, md: 20 } }
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        >
            <IconButton
                variant="outline"
                icon={<FiMenu />}
                aria-label="menu web"
                onClick={() => setCollaps(!collaps)}
                display={{ base: 'none', md: 'flex' }}
            />

            <IconButton
                variant="outline"
                icon={<FiMenu />}
                aria-label="menu mobile"
                onClick={() => setOpen(!open)}
                display={{ base: 'flex', md: 'none' }}
            />

            <Text
                fontSize="2xl"
                color='red.600'
                fontWeight="bold"
                fontFamily="monospace"
                display={{ base: 'flex', md: 'none' }}
            >
                BaseTemplatez
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm">Justina Clark</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    )
}

export { Navigation, SidebarContent, MobileSidebar }