import { config } from "./config";
test("快照测试", () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "password": "1234",
      "server": "http://localhost",
      "userName": "test",
    }
  `);
});
