//from grandchild component
import { ContextTest } from "../App";
const testC = React.useContext(ContextTest);

//from grandsire component
export const ContextTest = React.createContext();
const [testC, setTestC] = React.useState(true);
<ContextTest.Provider value={testC}>
</ContextTest.Provider>