import { Button } from "@chakra-ui/react"
import { useColorMode } from "@components/ui/color-mode"

export default function Dashboard() {
  const { toggleColorMode } = useColorMode()

  return (
    <div>
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </div>
  )
}