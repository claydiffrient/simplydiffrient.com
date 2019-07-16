import "@testing-library/jest-dom/extend-expect";

// this is basically: afterEach(cleanup)
import "@testing-library/react/cleanup-after-each";

import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });
