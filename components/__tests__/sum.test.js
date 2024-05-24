import { sum } from "../sum";

test("the output of the sum should be addition of two nos",
    () => {
        const result = sum(9,8);
        expect(result).toBe(17);
    }
)