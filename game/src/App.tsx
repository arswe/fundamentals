import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}>
      <GridItem area='nav' bg='coral'>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='blue'>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;