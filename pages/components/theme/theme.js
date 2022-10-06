import { extendTheme } from "@chakra-ui/react"
import { Button } from './Components/Button'
import { Input } from "./Components/Input"
import { Text } from './Components/Text'

const colors = {
    brand: {
        white: "white",
        lightGreen: "#153e75",
        darkGreen: "#2a69ac"
    },
}

export const theme = extendTheme({ colors,components: {
    Button,
    Input,
    Text,
} })