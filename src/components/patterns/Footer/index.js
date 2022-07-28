import { theme } from '../../../theme/theme';
import { Box, Text } from '../../../theme/components';

export default function Footer() {
  return (
    <Box
      as="footer"
      stylesheet={{
        backgroundColor: theme.colors.neutral[900]
      }}
    >
      <Box
        stylesheet={{
          overflow:"hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight:"auto",
          paddingVertical:{
            xs: theme.space.x12,
          },
          paddingHorizontal:{
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
        }}
      >
        <Text
          as="p"
          stylesheet={{
            textVariant: theme.typography.variants.body3,
            textAlign: "center",
            color: theme.colors.neutral[400],
          }}
        >
          &copy; {new Date().getFullYear()} DevSoutinho. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  )
}