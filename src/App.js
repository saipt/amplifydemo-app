import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

import {
  ImportExport2 
 } from './ui-components';

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}
export default withAuthenticator(App);

// import logo from "./logo.svg";
// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
//   // Button,
//   // Heading,
//   // Image,
//   View,
//   // Card,
// } from "@aws-amplify/ui-react";
// import {
//   ImportExport2 
//  } from './ui-components';
 
// function App({ signOut }) {
//   return (
//     <View className="App">
//       {/* <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>We now have Auth!</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button> */}
//       <ImportExport2 />
//     </View>
//   );
// }
// export default withAuthenticator(App);
