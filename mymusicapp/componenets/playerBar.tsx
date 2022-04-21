import { Box, Flex, Text } from "@chakra-ui/layout"
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react"
import { useStoreState } from "easy-peasy"
import Player from "./player"

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs)
  const activeSong = useStoreState((state: any) => state.activeSong)
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <Box padding="20px" color="white" width="30%">
            <Text fontSize="large">{activeSong.name}</Text>
            <Text fontSize="sm">{activeSong.artist.name}</Text>
          </Box>
        ) : null}

        <Box width="40%">
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
        <Box width="30%" alignContent="right">
            <Box width="15%" marginLeft="400px">
              <RangeSlider
              aria-label={["min", "max"]}
              defaultValue={[1.0]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack/>
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              </RangeSlider>
            </Box> 
          </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar
