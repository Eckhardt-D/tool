import {cli} from "./cli"

test("cli should return void", () => {
  const output = cli();
  expect(output).toBe(undefined);
})