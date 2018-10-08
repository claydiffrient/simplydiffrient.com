import "jest-dom/extend-expect";

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each";

import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });
